import Image from "next/image";
import bannerImg from "@/assets/banner.png";
import Link from "next/link";
const Banner = () => {
  return (
    <section className=" px-4 py-8 md:py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 rounded-4xl bg-[#15171D] px-6 py-10 md:px-12 md:py-14">
        <div className="space-y-5 text-center md:text-left">
          <p className="text-[#ccff00] text-sm font-semibold">
            WORKOUT LIBRARY
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold md:mt-6 mt-4">
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>
          <p className="text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <Link
            href="#library"
            className="inline-flex items-center gap-2 rounded-[5px] bg-[#ccff00] px-6 py-2 text-[12px] font-semibold text-black"
          >
            BROWSE WORKOUTS
            <span>→</span>
          </Link>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image src={bannerImg} alt="banner" width={300} height={300} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
