import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold text-[#ccff00]">404 ERROR</p>

      <h1 className="mt-3 text-5xl font-bold text-white md:text-7xl">
        PAGE NOT FOUND
      </h1>

      <p className="mt-4 max-w-md text-sm text-gray-400">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-md bg-[#ccff00] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
      >
        GO HOME
      </Link>
    </div>
  );
};

export default NotFound;
