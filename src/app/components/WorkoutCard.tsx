"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import { ILibrary } from "@/types/LibraryTypes";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

interface IWorkoutCardProps {
  workout: ILibrary;
  showMarkAsDone?: boolean;
}

const WorkoutCard = ({
  workout,
  showMarkAsDone = false,
}: IWorkoutCardProps) => {
  const { plan, setPlan, savedPlan, setSavedPlan } = useContext(WorkoutContext);

  const handleDelete = () => {
    if (showMarkAsDone) {
      setPlan(plan.filter((item) => item.id !== workout.id));
    } else {
      setSavedPlan(savedPlan.filter((item) => item.id !== workout.id));
    }
  };

  return (
    <div className="flex flex-col gap-5 rounded-xl border border-gray-800 bg-[#15171D] p-4 sm:flex-row sm:items-center">
      <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-lg sm:h-32 sm:w-48">
        <Image
          src={workout.image}
          alt={workout.name}
          width={300}
          height={200}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="text-base font-bold uppercase text-white">
          {workout.name}
        </h2>

        <p className="mt-2 text-xs text-gray-500">{workout.equipment}</p>

        <div className="mt-3 flex gap-4 text-xs text-gray-400">
          <span>clock {workout.duration} min</span>
          <span>fire {workout.caloriesBurned} kcal</span>
          <span>star {workout.rating}</span>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-3xl border border-gray-700 px-4 py-2 text-xs text-white"
        >
          View Details
        </Link>

        {showMarkAsDone && (
          <button className="rounded-3xl bg-[#ccff00] px-4 py-2 text-xs font-semibold text-black">
            <i className="fa-solid fa-check mr-1"></i>
            Mark as Done
          </button>
        )}

        <button
          onClick={handleDelete}
          title="Delete workout"
          className="rounded-3xl border border-gray-700 px-3 py-2 text-gray-400 hover:text-white"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;
