import Link from "next/link";
const Baseball = () => {
  return (
    <>
      <div className="py-2">
        <div className="flex  items-end justify-between py-1">
          <p className="flex-grow text-xl px-3 font-bold">野球</p>
          <Link href="/baseball/npb" className="px-3 text-sm">
            View All
          </Link>
        </div>
        <div className="flex h-[14.25rem] space-x-1 w-[97%] mx-auto">
          <div class="w-1/2 relative">
            <div class="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden">
              <img
                src="https://i.imgur.com/pEaKndF.jpg"
                alt=""
                class="object-cover object-center w-full h-full"
              />
            </div>
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded-lg"></div>
            <Link
              href="/baseball/npb"
              class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            >
              <div className="text-4xl font-bold text-slate-200 flex justify-center items-center">
                NPB
              </div>
            </Link>
          </div>

          <div className="w-1/2 h-[14rem] space-y-1 ">
            <Link href="/baseball/mlb">
              <div class="h-[7rem] relative">
                <img
                  src="https://i.imgur.com/50iA3O2.jpg"
                  alt=""
                  class="rounded-lg object-cover object-center w-full h-full"
                />
                <div class="absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded-lg"></div>
                <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="text-2xl font-bold text-slate-200 flex justify-center items-center">
                    MLB
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/baseball/wbc">
              <div class="h-[7rem] relative">
                <img
                  src="https://i.imgur.com/VeRaSKT.jpg"
                  alt=""
                  class="rounded-lg object-cover object-center w-full h-full"
                />
                <div class="absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded-lg"></div>
                <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="text-2xl font-bold font-anton text-slate-200 flex justify-center items-center">
                    WBC
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Baseball;
