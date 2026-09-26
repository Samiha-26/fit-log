"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { ILibrary } from "@/types/LibraryTypes";
import { useContext } from "react";
import { toast } from "react-toastify";

const TodaysPlan = ({ workout }: { workout: ILibrary }) => {
  const { plan, setPlan } = useContext(WorkoutContext);

  const handleTodaysPlan = () => {
    if (plan.length >= 5) {
      toast.error("Today's plan can have only 5 workouts.");
      return;
    }
    if (plan.some((item) => item.id === workout.id)) {
      toast.warning("This workout is already in today's plan.");
      return;
    }
    setPlan([...plan, workout]);
    toast.success("Added to today's plan!");
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
