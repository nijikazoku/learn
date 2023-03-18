import FadeInEffect from "../FadeInEffect";
const Soccer = () => {
  return (
    <FadeInEffect>
      <div className="py-2">
        <div className="flex  text-white items-end justify-between py-1">
          <p className="flex-grow text-xl px-3 font-bold">サッカー</p>
          <div className="px-3 text-sm">View All</div>
        </div>
        <div className="flex flex-col h-[16rem] space-y-1 w-[97%] mx-auto">
          <div class="w-full relative h-1/2">
            <div class="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden">
              <img
                src="https://i.imgur.com/Oli8knO.jpg"
                alt=""
                class="object-cover object-center w-full h-full"
              />
            </div>
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded-lg"></div>
            <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="text-4xl font-bold text-slate-200 flex justify-center items-center">
                Jリーグ
              </div>
            </div>
          </div>

          <div className="h-1/2 flex space-x-1 ">
            <div class="w-1/2 relative">
              <img
                src="https://i.imgur.com/R39LS9v.jpg"
                alt=""
                class="rounded-lg object-cover object-center w-full h-full"
              />
              <div class="absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded-lg"></div>
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="text-xl font-bold text-slate-200 flex justify-center items-center">
                  プレミアリーグ
                </div>
              </div>
            </div>
            <div class="w-1/2 relative">
              <img
                src="https://i.imgur.com/E09a9cm.jpg"
                alt=""
                class="rounded-lg object-cover object-center w-full h-full"
              />
              <div class="absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded-lg"></div>
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="text-xl font-bold font-anton text-slate-200 flex justify-center items-center">
                  ラ・リーガ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInEffect>
  );
};

export default Soccer;
