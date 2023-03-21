import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import SideMenuContents from "./SideMenuContents";

function TestHeader({ setGenres, setFavoriteFilter }) {
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const [sideMenuFadeOut, setSideMenuFadeOut] = useState(false);
  const router = useRouter();
  const headerRef = useRef(null);

  const toggleSideMenu = (genre) => {
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
  const handleSideCasinoClick = (genre) => {
    // ジャンルを上書きする
    setGenres([genre]);
    // お気に入りフィルターを解除する
    setFavoriteFilter(false);
  };

  const toggleCasinoMenu = (genre) => {
    if (!isShow) {
      setIsShow(true);
      document.body.style.overflow = "hidden";
    } else {
      setSideMenuFadeOut(true);

      setTimeout(() => {
        setSideMenuFadeOut(false);
        setIsShow(false);
        document.body.style.overflow = "auto";
        const queryGenre = router.query.genre;
        if (genre !== queryGenre) {
          router.push({
            pathname: "/casino",
            query: { genre: genre },
          });
          handleSideCasinoClick(genre);
        }
      }, 600);
    }
  };

  const handleOverlayClick = (event) => {
    // クリックした要素がサイドメニューの外側の場合、サイドメニューを閉じる
    if (event.target.classList.contains("side-menu-overlay")) {
      toggleSideMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);

    // ヘッダーの高さを取得
    setHeaderHeight(document.querySelector("header").offsetHeight);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);

  return (
    <div className="relative pt-[60px]">
      {/* ヘッダー */}
      <header
        ref={headerRef}
        className={`bg-gradient-to-b h-[60px] w-full flex flex-col justify-center from-[#2C58CF] via-[#2244A0] to-[#193173] p-2 absolute top-0 z-40 ${
          visible
            ? " h-[60px] w-full animate-slide-in-top"
            : "animate-scale-out-ver-top"
        }`}
      >
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
          className={`fixed top-[60px] left-0  z-10 w-full animate-scale-in-hor-left ${
            sideMenuFadeOut && "animate-scale-out-hor-left"
          }`}
          // style={{ height: "90vh", overflowY: "auto" }}
        >
          <div
            className="absolute top-0 bottom-0 right-0 w-[25%] side-menu-overlay "
            onClick={handleOverlayClick}
          ></div>

          <SideMenuContents
            toggleSideMenu={toggleSideMenu}
            toggleCasinoMenu={toggleCasinoMenu}
          />
        </div>
      )}
    </div>
  );
}

export default TestHeader;
