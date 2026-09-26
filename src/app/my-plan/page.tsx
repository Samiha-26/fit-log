"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";

const Page = () => {
  const { plan, savedPlan } = useContext(WorkoutContext);

  return (
    <div className="container mx-auto px-4 py-10">
      <div>
        <div>
          <h1>MY PLAN</h1>
          <p>Cap of five lifts for today. Finish them, then load more.</p>
        </div>
        <div>
          <p></p>
        </div>
      </div>

      <div>

      </div>
    </div>
  );
};

export default Page;