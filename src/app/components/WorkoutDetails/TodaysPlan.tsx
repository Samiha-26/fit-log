"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { ILibrary } from "@/types/LibraryTypes";
import { useContext } from "react";

const TodaysPlan = ({ workout }: { workout: ILibrary }) => {
  const { plan, setPlan } = useContext(WorkoutContext);

  const handleTodaysPlan = () => {
    if (plan.length >= 5) {
      return;
    }
    if (plan.some((item) => item.id === workout.id)) {
      return;
    }
    setPlan([...plan, workout]);
  };

  return (
    <button
      className="flex items-center gap-2 rounded-md bg-[#ccff00] px-5 py-3 text-sm font-semibold text-black"
      onClick={handleTodaysPlan}
    >
      <i className="fa-regular fa-calendar-plus"></i>
      Add to today&apos;s plan
    </button>
  );
};

export default TodaysPlan;
