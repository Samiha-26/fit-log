import SaveForLater from "@/app/components/WorkoutDetails/SaveForLater";
import TodaysPlan from "@/app/components/WorkoutDetails/TodaysPlan";
import { ILibrary } from "@/types/LibraryTypes";
import Image from "next/image";
import React from "react";

interface IWorkoutDetailsPageProps {
  params: Promise<{ workoutId: string }>;
}

const getLibrary = async (workoutId: string): Promise<ILibrary> => {
  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${workoutId}`,
  );

  if (!res.ok) {
    throw new Error("failed to fetch library");
  }

  return res.json();
};

const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {
  const { workoutId } = await params;
  const libraryData: ILibrary = await getLibrary(workoutId);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <Image
            src={libraryData.image}
            alt={libraryData.name}
            width={800}
            height={600}
            className="h-auto w-full rounded-xl object-cover"
          />
        </div>

        <div className="space-y-5">
          <div>
            <h1 className="text-3xl font-bold uppercase text-white md:text-4xl">
              {libraryData.name}
            </h1>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              {libraryData.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {libraryData.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-800 bg-[#15171D]">
            <div className="flex justify-between border-b border-gray-800 px-4 py-3">
              <span className="text-xs font-semibold text-gray-400">
                EQUIPMENT
              </span>
              <span className="text-sm text-white">
                {libraryData.equipment}
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-800 px-4 py-3">
              <span className="text-xs font-semibold text-gray-400">
                DIFFICULTY
              </span>
              <span className="text-sm text-white">
                {libraryData.difficulty}
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-800 px-4 py-3">
              <span className="text-xs font-semibold text-gray-400">SETS</span>
              <span className="text-sm text-white">{libraryData.sets}</span>
            </div>

            <div className="flex justify-between border-b border-gray-800 px-4 py-3">
              <span className="text-xs font-semibold text-gray-400">REPS</span>
              <span className="text-sm text-white">{libraryData.reps}</span>
            </div>

            <div className="flex justify-between border-b border-gray-800 px-4 py-3">
              <span className="text-xs font-semibold text-gray-400">
                DURATION
              </span>
              <span className="text-sm text-white">
                {libraryData.duration} min
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-800 px-4 py-3">
              <span className="text-xs font-semibold text-gray-400">
                CALORIES
              </span>
              <span className="text-sm text-white">
                {libraryData.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex justify-between px-4 py-3">
              <span className="text-xs font-semibold text-gray-400">
                RATING
              </span>
              <span className="text-sm text-white">{libraryData.rating}</span>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-sm font-bold text-white">INSTRUCTIONS</h2>

            <ol className="space-y-2 text-sm text-gray-400">
              {libraryData.instructions.map((instruction, index) => (
                <li key={instruction}>
                  {index + 1}. {instruction}
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <TodaysPlan workout ={libraryData}></TodaysPlan>
            <SaveForLater workout ={libraryData}></SaveForLater>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
