import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const [sideMenuFadeOut, setSideMenuFadeOut] = useState(false);

  const toggleSideMenu = () => {
    if (!isShow) {
      setIsShow(true);
      document.body.style.overflow = "hidden";
    } else {
      setSideMenuFadeOut(true);

      setTimeout(() => {
        setSideMenuFadeOut(false);
        setIsShow(false);
        document.body.style.overflow = "auto";
      }, 600);
    }
  };
  return (
    <div className="relative">
      <header class=" bg-gradient-to-b h-[60px] w-full flex flex-col justify-center from-[#2C58CF] via-[#2244A0] to-[#193173] p-2">
        <div className="space-y-2 ">
          {/* 開く閉じる */}
          <div className="flex items-center justify-between space-x-1">
            <div
              onClick={toggleSideMenu}
              className="text-white flex flex-col justify-center items-center cursor-pointer"
            >
              {isShow ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-9 h-9"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-9 h-9"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </div>
            {/* BET CHANNEL */}
            <p className="font-bold text-xl">
              <span className="text-[#409AD6]">BET</span>
              <span className="text-[#E8B30F]">CHANNEL</span>
              <span className="text-[#02CFFF]">FREE</span>
            </p>
            {/* 掲示板 */}
            <Link
              href="/Board"
              className="font-bold animate-color-change-5x p-2 rounded-lg"
            >
              LIVE掲示板
            </Link>
          </div>
        </div>
      </header>
      {/* サイドバー */}
      {isShow && (
        <div
          className={`absolute top-[60px] left-0 overflow-y-auto  w-full z-30 bg-slate-800 animate-scale-in-hor-left ${
            sideMenuFadeOut && "animate-scale-out-hor-left"
          }`}
          style={{ height: "calc(100vh - 60px)" }}
        >
          {/* <div className="">
                <SideMenuContents isShow={isShow} />
              </div> */}
        </div>
      )}
    </div>
  );
};

export default Header;
