import Link from "next/link";

import { GiRunningShoe, GiPokerHand, GiPresent } from "react-icons/gi";

const Footer = ({ setShowRegister, showRegister }) => {
  const handleRegister = () => {
    if (!showRegister) {
      setShowRegister(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsShow(false);

      document.body.style.overflow = "auto";
    }
  };
  return (
    <div class="bg-[#1b2d58] h-[70px]  text-[#c1cafd] flex justify-around items-center fixed w-full bottom-0">
      {/* 登録 */}
      <div
        onClick={handleRegister}
        className="box-register relative rounded-lg m-1 w-1/5 h-[60px] overflow-hidden text-white flex items-center justify-center "
      >
        <div className="z-10 flex flex-col items-center justify-center text-orange-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>

          <p className="text-sm">登録</p>
        </div>
      </div>
      {/* スポーツ */}
      <Link
        href="/"
        // onClick={() => setSelected(!selected)}
        className="box-sports relative rounded-lg m-1 w-1/5 h-[60px] overflow-hidden text-white flex items-center justify-center "
      >
        <div className="z-10 flex flex-col items-center justify-center text-[#b0c4de]">
          <GiRunningShoe size={30} />
          <p className="text-sm">スポーツ</p>
        </div>
      </Link>

      {/* カジノ */}
      <Link
        href="/casino"
        className="box-casino relative rounded-lg m-1 w-1/5 h-[60px] overflow-hidden text-white flex items-center justify-center "
      >
        <div className="z-10 flex flex-col items-center justify-center text-[#dda0dd]">
          <GiPokerHand size={30} />
          <p className="text-sm">カジノ</p>
        </div>
      </Link>
      {/* プロモ */}
      <div className="box-promo relative rounded-lg m-1 w-1/5 h-[60px] overflow-hidden text-white flex items-center justify-center ">
        <div className="z-10 flex flex-col items-center justify-center text-[#ffff00]">
          <GiPresent size={30} />
          <p className="text-sm">プロモ</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
