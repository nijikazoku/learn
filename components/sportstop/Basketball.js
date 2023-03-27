import Link from "next/link";
import FadeInEffect from "../FadeInEffect";

const Basketball = () => {
  return (
    <FadeInEffect>
      <div className="py-2">
        <div className="flex  items-end justify-between py-1">
          <p className="flex-grow text-xl px-3 font-bold">バスケットボール</p>
          <div className="px-3 text-sm">View All</div>
        </div>
        <div className="flex flex-col h-[16rem] space-y-1 w-[97%] mx-auto">
          <div className="h-1/2 flex space-x-1 ">
            {/* Bリーグ */}
            <Link href="/basketball/b_league" class="w-1/2 relative">
              <img
                src="https://i.imgur.com/0yFNX6Q.jpg"
                alt=""
                class="rounded-lg object-cover object-center w-full h-full"
              />
              <div class="absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded-lg"></div>
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="text-2xl font-bold text-slate-200 flex justify-center items-center">
                  Bリーグ
                </div>
              </div>
            </Link>
            {/* FIBA W杯 */}
            <Link href="/basketball/fiba_wc" class="w-1/2 relative">
              <img
                src="https://i.imgur.com/oQun7km.jpg"
                alt=""
                class="rounded-lg object-cover object-center w-full h-full"
              />
              <div class="absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded-lg"></div>
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="text-2xl font-bold font-anton text-slate-200 flex justify-center items-center">
                  FIBA W杯
                </div>
              </div>
            </Link>
          </div>
          {/* NBA */}
          <Link href="/basketball/nba" class="w-full relative h-1/2">
            <div class="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden">
              <img
                src="https://i.imgur.com/uCkKbjy.jpg"
                alt=""
                class="object-cover object-center w-full h-full"
              />
            </div>
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded-lg"></div>
            <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="text-4xl font-bold text-slate-200 flex justify-center items-center">
                NBA
              </div>
            </div>
          </Link>
        </div>
      </div>
    </FadeInEffect>
  );
};

export default Basketball;
