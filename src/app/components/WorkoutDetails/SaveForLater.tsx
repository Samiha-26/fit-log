'use client';
import { WorkoutContext } from "@/context/WorkoutContext";
import { ILibrary } from "@/types/LibraryTypes";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const SaveForLater = ({ workout }: { workout: ILibrary }) => {
    const { savedPlan, setSavedPlan } = useContext(WorkoutContext);

 const handleSaveForLater = () => {
  if (savedPlan.some((item) => item.id === workout.id)) {
     toast.warning("This workout is already saved.");
    return;
  }

  setSavedPlan([...savedPlan, workout]);
  toast.success("Workout saved for later!");
};
  return (
    <button
      className="flex items-center gap-2 rounded-md border border-gray-700 px-5 py-3 text-sm text-white"
      onClick={() => handleSaveForLater()}
    >
      <i className="fa-regular fa-bookmark"></i>
      Save for later
    </button>
  );
};

export default SaveForLater;
