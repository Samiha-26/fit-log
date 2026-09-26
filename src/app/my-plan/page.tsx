"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import { useContext, useState } from "react";
import Link from "next/link";
import WorkoutCard from "../components/WorkoutCard";
import { ILibrary } from "@/types/LibraryTypes";

const Page = () => {
  const { plan, savedPlan } = useContext(WorkoutContext);
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  const currentList = activeTab === "plan" ? plan : savedPlan;

  const sortWorkouts = (workouts: ILibrary[]) => {
    const sortedWorkouts = [...workouts];

    if (sortBy === "duration") {
      sortedWorkouts.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "calories") {
      sortedWorkouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
      sortedWorkouts.sort((a, b) => b.rating - a.rating);
    }

    return sortedWorkouts;
  };

  const sortedList = sortWorkouts(currentList);

  return (
    <div className="container mx-auto px-4 py-10">
      <div>
        <h1 className="text-2xl font-bold text-white">MY PLAN</h1>

        <p className="mt-2 text-xs text-gray-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="mt-5 rounded-xl border border-gray-800 bg-[#15171D]">
        <div className="grid grid-cols-1 divide-y divide-gray-800 md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="px-4 py-5">
            <p className="text-xs text-gray-500">Exercises</p>
            <p className="mt-2 text-2xl font-bold text-[#ccff00]">
              {plan.length}
            </p>
          </div>

          <div className="px-4 py-5">
            <p className="text-xs text-gray-500">Minutes</p>
            <p className="mt-2 text-2xl font-bold text-white">
              {plan.reduce((total, workout) => total + workout.duration, 0)}
            </p>
          </div>

          <div className="px-4 py-5">
            <p className="text-xs text-gray-500">Calories</p>
            <p className="mt-2 text-2xl font-bold text-white">
              {plan.reduce(
                (total, workout) => total + workout.caloriesBurned,
                0,
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex w-fit rounded-lg bg-[#15171D] p-1">
          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-md px-4 py-2 text-xs font-medium ${
              activeTab === "plan" ? "bg-[#252830] text-white" : "text-gray-500"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-md px-4 py-2 text-xs font-medium ${
              activeTab === "saved"
                ? "bg-[#252830] text-white"
                : "text-gray-500"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500">Sort By</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "duration" | "calories" | "rating")
              }
              className="appearance-none rounded-lg border border-gray-800 bg-[#15171D] py-2 pl-4 pr-10 text-xs text-white focus:border-[#ccff00] focus:outline-none focus:ring-1 focus:ring-[#ccff00] cursor-pointer"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
              <svg
                className="h-3 w-3 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        {sortedList.length === 0 ? (
          <div className="flex min-h-70 items-center justify-center rounded-xl border border-gray-800 bg-[#0F1115]">
            <div className="text-center">
              <h2 className="text-sm font-bold text-white">NOTHING HERE YET</h2>

              <p className="mt-2 text-xs text-gray-500">
                {activeTab === "plan"
                  ? "Browse the library and add a lift to get today moving."
                  : "Save a workout to see it here later."}
              </p>

              <Link
                href="/"
                className="mt-5 inline-block rounded-full bg-[#ccff00] px-5 py-2 text-xs font-semibold text-black transition hover:opacity-90"
              >
                Go to workouts
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {sortedList.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
                showMarkAsDone={activeTab === "plan"}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
