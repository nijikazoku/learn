// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SlideBanner() {
  return (
    <Swiper
      className="mySwiper"
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={9000}
      loop={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <img src="https://bet-channel.com/bet-channel.com/insert/sports/images/slider/wbc_nolose_pc_jp_20230301.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://www.betchannel-free.com/betchannel-free.com/insert/sports/images/slider/top_image0.jpeg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://bet-channel.com/bet-channel.com/insert/sports/images/slider/vip_pc_20220705.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://www.betchannel-free.com/betchannel-free.com/insert/sports/images/slider/top_pc.jpeg" />
      </SwiperSlide>
    </Swiper>
  );
}
