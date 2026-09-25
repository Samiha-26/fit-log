'use client';
import { ILibrary } from "@/types/LibraryTypes";
import React, { ReactNode, SetStateAction, useState } from "react";
import { createContext } from "react";

interface IWorkoutContext {
  plan: ILibrary[];
  setPlan: React.Dispatch<SetStateAction<ILibrary[]>>;
  savedPlan: ILibrary[];
  setSavedPlan: React.Dispatch<SetStateAction<ILibrary[]>>;
}
export const WorkoutContext = createContext<IWorkoutContext>({
  plan: [],
  setPlan: () => {},
  savedPlan: [],
  setSavedPlan: () => {},
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<ILibrary[]>([]);
  const [savedPlan, setSavedPlan] = useState<ILibrary[]>([]);
  const sharedData = {
    plan,
    setPlan,
    savedPlan,
    setSavedPlan,
  };
  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
