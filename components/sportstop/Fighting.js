import FadeInEffect from "../FadeInEffect";

const Fighting = () => {
  return (
    <FadeInEffect>
      <div className="py-2">
        <div className="flex  text-white items-end justify-between py-1">
          <p className="flex-grow text-xl px-3 font-bold">格闘技</p>
          <div className="px-3 text-sm">View All</div>
        </div>
        <div className="flex h-[14.25rem] space-x-1 w-[97%] mx-auto">
          <div className="w-1/2 h-[14rem] space-y-1 ">
            <div class="h-[7rem] relative">
              <img
                src="https://i.imgur.com/dFF2Pcj.jpg"
                alt=""
                class="rounded-lg object-cover object-center w-full h-full"
              />
              <div class="absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded-lg"></div>
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="text-2xl font-bold text-slate-200 flex justify-center items-center">
                  K-1
                </div>
              </div>
            </div>
            <div class="h-[7rem] relative">
              <img
                src="https://i.imgur.com/l4FhPMg.jpg"
                alt=""
                class="rounded-lg object-cover object-center w-full h-full"
              />
              <div class="absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded-lg"></div>
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="text-2xl font-bold font-anton text-slate-200 flex justify-center items-center">
                  RISE
                </div>
              </div>
            </div>
          </div>
          <div class="w-1/2 relative">
            <div class="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden">
              <img
                src="https://i.imgur.com/EsTgMrj.jpg"
                alt=""
                class="object-cover object-center w-full h-full"
              />
            </div>
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded-lg"></div>
            <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="text-4xl font-bold text-slate-200 flex justify-center items-center">
                RIZIN
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInEffect>
  );
};

export default Fighting;
