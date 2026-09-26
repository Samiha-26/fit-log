"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import { ILibrary } from "@/types/LibraryTypes";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-toastify";

interface IWorkoutCardProps {
  workout: ILibrary;
  showMarkAsDone?: boolean;
}

const WorkoutCard = ({
  workout,
  showMarkAsDone = false,
}: IWorkoutCardProps) => {
  const { plan, setPlan, savedPlan, setSavedPlan } =
    useContext(WorkoutContext);

  const handleDelete = () => {
    if (showMarkAsDone) {
      setPlan(plan.filter((item) => item.id !== workout.id));
    } else {
      setSavedPlan(savedPlan.filter((item) => item.id !== workout.id));
    }

    toast.success("Workout removed!");
  };

  const handleMarkAsDone = () => {
    setPlan(plan.filter((item) => item.id !== workout.id));
    toast.success("Workout marked as done!");
  };

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-gray-800 bg-[#15171D] p-4 sm:flex-row sm:items-center">
      
      <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-lg sm:h-32 sm:w-48">
        <Image
          src={workout.image}
          alt={workout.name}
          width={300}
          height={200}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <h2 className="text-base font-bold uppercase text-white">
          {workout.name}
        </h2>

        <p className="mt-2 text-xs text-gray-500">
          {workout.equipment}
        </p>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-400">
          <span>{workout.duration} min</span>
          <span>{workout.caloriesBurned} kcal</span>
          <span>★ {workout.rating}</span>
        </div>
      </div>

      <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
        <Link
          href={`/workouts/${workout.id}`}
          className="w-full rounded-md border border-gray-700 px-4 py-2.5 text-center text-xs text-white transition hover:bg-gray-800 sm:w-auto"
        >
          View Details
        </Link>

        {showMarkAsDone && (
          <button
            onClick={handleMarkAsDone}
            className="w-full rounded-md bg-[#ccff00] px-4 py-2.5 text-xs font-semibold text-black transition hover:opacity-90 sm:w-auto"
          >
            <i className="fa-solid fa-check mr-1"></i>
            Mark as Done
          </button>
        )}

        <button
          onClick={handleDelete}
          title="Remove workout"
          className="flex w-full items-center justify-center rounded-md border border-gray-700 px-4 py-2.5 text-gray-400 transition hover:bg-gray-800 hover:text-white sm:w-auto sm:px-3"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;