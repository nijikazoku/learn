import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import SideMenuContents from "./SideMenuContents";
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
              {isShow ? <MdClose size={30} /> : <RxHamburgerMenu size={30} />}
            </div>
            {/* BET CHANNEL */}
            <Link href="/">
              <p className="font-bold text-xl">
                <span className="text-[#409AD6]">BET</span>
                <span className="text-[#E8B30F]">CHANNEL</span>
                <span className="text-[#02CFFF]">FREE</span>
              </p>
            </Link>

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
          className={`absolute top-[59px] left-0 overflow-y-auto  w-[80%] z-30 bg-slate-800 animate-scale-in-hor-left ${
            sideMenuFadeOut && "animate-scale-out-hor-left"
          }`}
          style={{ height: "calc(100vh - 60px)" }}
        >
          <div className="">
            <SideMenuContents toggleSideMenu={toggleSideMenu} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
