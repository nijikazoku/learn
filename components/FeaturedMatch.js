import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import { pickUpMatch } from "../src/pickUpMatch";

const FeaturedMatch = () => {
  return (
    <div className="py-3 space-y-2">
      <div className="flex text-white items-end justify-between ">
        <p className="flex-grow text-xl px-3 font-bold">注目の試合</p>
      </div>
      <Swiper
        loop={false}
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={1}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper rounded-lg w-[95%] space-x-4"
        // style={{
        //   "--swiper-pagination-color": "#DC2626",
        // }}
      >
        {pickUpMatch.slice(0, 4).map((match, index) => {
          return (
            <SwiperSlide key={index} className="relative  text-white">
              <div className="h-[14rem] w-full">
                <img
                  className=" opacity-30  object-contain"
                  src={match.image}
                  alt=""
                />
              </div>

              {/* 内容 */}
              {/* スポーツ名 */}
              <div className="absolute top-4 px-3 flex items-end space-x-3">
                <p className="text-xl ">{match.sports}</p>
              </div>
              {/* 時刻 */}
              <div className="absolute top-2 bg-opacity-70 py-2 px-4 right-2 rounded-lg bg-slate-900 flex flex-col items-end">
                <div className="font-thin text-md">MAR 17 FRI</div>
                <div className="font-bold text-xl ">{match.matchDate}</div>
              </div>
              {/* 対戦チーム名 */}
              <div className="absolute top-[70px] px-3 text-3xl font-bold text-white ">
                <p className="text-sm">{match.type}</p>
                <p>{match.homeTeam}</p>
                <p>{match.awayTeam}</p>
              </div>
              {/* ベット受付中 */}
              <div className="absolute bottom-[50px] right-1 bg-opacity-70 text-[#F59E0B] p-2 bg-slate-900  rounded-lg font-bold animate-pulse">
                ベット受付中
              </div>

              {/* オッズ */}
              <div className="absolute space-x-1 bottom-0 w-full flex justify-evenly text-lg whitespace-nowrap">
                <div className="flex w-1/3 p-1 bg-opacity-70 bg-slate-900  justify-between">
                  <p>W1</p>
                  <p className="text-[#F59E0B]">{match.odds1}</p>
                </div>
                <div className="flex w-1/3 p-1 bg-opacity-70 bg-slate-900  justify-between">
                  <p>W2</p>
                  <p className="text-[#F59E0B]">{match.odds2}</p>
                </div>
                <div className="flex w-1/3 p-1 bg-opacity-70 bg-slate-900  justify-between">
                  <p>DRAW</p>
                  <p className="text-[#F59E0B]">{match.odds3}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FeaturedMatch;
