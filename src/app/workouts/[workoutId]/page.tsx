import { ILibrary } from '@/types/LibraryTypes';
import Image from 'next/image';
import React from 'react';

interface IWorkoutDetailsPageProps {
    params:Promise< {workoutId: string;}>;
}

const getLibrary = async(workoutId: string) : Promise<ILibrary> => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${workoutId}`);

  if (!res.ok) {
    throw new Error("failed to fetch library");
  }

  return res.json();
};

const WorkoutDetailsPage = async({params} : IWorkoutDetailsPageProps) => {
    const {workoutId} = await params;
    const libraryData: ILibrary = await getLibrary(workoutId);

    return (
        <div className='container mx-auto mt-10'>
          <div className="card card-side bg-base-100 shadow-sm">
            <figure>
              <Image
                src={libraryData.image}
                alt='Workout image'
                width={800}
                height={600}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{libraryData.name}</h2>
              <p>{libraryData.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default WorkoutDetailsPage;