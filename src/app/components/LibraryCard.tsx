import { ILibrary } from "@/types/LibraryTypes";
import Image from "next/image";
import Link from "next/link";

const LibraryCard = ({ library }: { library: ILibrary }) => {
  return (
    <Link href={`/workouts/${library.id}`}>
      <div className="card bg-[#15171D] shadow-sm hover:shadow-lg transition-shadow">
        <figure>
          <Image
            src={library.image}
            alt={library.name}
            width={400}
            height={250}
            className="h-52 w-full object-cover"
          />
        </figure>

        <div className="card-body">
          <div className="flex flex-wrap gap-2">
            {library.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full border bg-[#ccff00] px-3 py-1 text-xs font-bold text-black"
              >
                {muscle.toUpperCase()}
              </span>
            ))}
          </div>

          <h2 className="card-title mt-2 text-xl font-bold uppercase text-white">
            {library.name}
          </h2>


          <p className="text-sm text-gray-400">
            {library.equipment}
          </p>
          <div className="divider"></div>
          <div className=" flex items-center justify-start text-sm text-gray-400 gap-4">

            <span className="flex items-center gap-1">
              <i className="fa-regular fa-clock"></i>
              {library.duration} min
            </span>

            <span className="flex items-center gap-1">
              <i className="fa-solid fa-fire"></i>
              {library.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1">
              <i className="fa-solid fa-star"></i>
              {library.rating}
            </span>

          </div>
        </div>
      </div>
    </Link>
  );
};

export default LibraryCard;