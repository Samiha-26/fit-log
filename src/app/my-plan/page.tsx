"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import { useContext, useState } from "react";
import Link from "next/link";

const Page = () => {
  const { plan, savedPlan } = useContext(WorkoutContext);
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const currentList = activeTab === "plan" ? plan : savedPlan;

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
                0
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex w-fit rounded-lg bg-[#15171D] p-1">
          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-md px-4 py-2 text-xs font-medium ${
              activeTab === "plan"
                ? "bg-[#252830] text-white"
                : "text-gray-500"
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
      </div>

      <div className="mt-4">
        {currentList.length === 0 ? (
          <div className="flex min-h-70 items-center justify-center rounded-xl border border-gray-800 bg-[#0F1115]">
            <div className="text-center">
              <h2 className="text-sm font-bold text-white">
                NOTHING HERE YET
              </h2>

              <p className="mt-2 text-xs text-gray-500">
                {activeTab === "plan"
                  ? "Browse the library and add a lift to get today moving."
                  : "Save a workout to see it here later."}
              </p>

              <Link
                href="/workouts"
                className="mt-5 inline-block rounded-full bg-[#ccff00] px-5 py-2 text-xs font-semibold text-black transition hover:opacity-90"
              >
                Go to workouts
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-4">
            {currentList.map((workout) => (
              <div
                key={workout.id}
                className="rounded-xl border border-gray-800 bg-[#15171D] p-4"
              >
                <h2 className="font-bold text-white">{workout.name}</h2>
                <p className="mt-1 text-xs text-gray-500">
                  {workout.duration} min • {workout.caloriesBurned} calories
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;