"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { ILibrary } from "@/types/LibraryTypes";
import { useContext } from "react";
import { toast } from "react-toastify";

const TodaysPlan = ({ workout }: { workout: ILibrary }) => {
  const { plan, setPlan } = useContext(WorkoutContext);
  const isPlanFull = plan.length >= 5;

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
      disabled={isPlanFull}
      className="flex items-center gap-2 rounded-md bg-[#ccff00] px-5 py-3 text-sm font-semibold text-black disabled:cursor-not-allowed disabled:opacity-50"
      onClick={handleTodaysPlan}
    >
      <i className="fa-regular fa-calendar-plus"></i>
      {isPlanFull ? "Plan Full" : "Add to today's plan"}
    </button>
  );
};

export default TodaysPlan;
