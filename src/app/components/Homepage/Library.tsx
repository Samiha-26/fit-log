import { ILibrary } from "@/types/LibraryTypes";
import LibraryCard from "../LibraryCard"

const getLibrary = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("failed to fetch library");
  }

  return res.json();
};

const Library = async () => {
  const libraryData = await getLibrary();
  return (
    <section id="library" className="px-4 py-12 md:py-16">
        <div className="container mx-auto">
      <div className="mb-8">
        <h1 className="font-bold text-2xl md:text-3xl text-white">THE LIBRARY</h1>
        <p className="text-gray-400">Twelve lifts covering every major muscle group.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {libraryData.map((library: ILibrary) => (
          <LibraryCard key={library.id} library={library} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default Library;