import { ILibrary } from "@/types/LibraryTypes";
import Image from "next/image";
import Link from "next/link";

interface IWorkoutCardProps {
  workout: ILibrary;
  showMarkAsDone?: boolean;
}

const WorkoutCard = ({
  workout,
  showMarkAsDone = false,
}: IWorkoutCardProps) => {
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

        <p className="mt-2 text-xs text-gray-500">
          {workout.equipment}
        </p>

        <div className="mt-3 flex gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <i className="fa-regular fa-clock text-[#ccff00]"></i>
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <i className="fa-solid fa-fire text-[#ccff00]"></i>
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <i className="fa-solid fa-star text-[#ccff00]"></i>
            {workout.rating}
          </span>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-full border border-gray-700 px-4 py-2 text-xs font-medium text-white transition hover:bg-[#252830]"
        >
          View Details
        </Link>

        {showMarkAsDone && (
          <button className="flex items-center gap-2 rounded-full bg-[#ccff00] px-4 py-2 text-xs font-semibold text-black transition hover:opacity-90">
            <i className="fa-solid fa-check"></i>
            Mark as Done
          </button>
        )}

        <button
          title="Delete workout"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition hover:border-red-500 hover:text-red-500"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;