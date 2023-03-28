import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import SideMenuContents from "./SideMenuContents";
import { useTheme } from "next-themes";

function TestHeader({ setSelectedGenre, setFavoriteFilter }) {
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState("initial");
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const [sideMenuFadeOut, setSideMenuFadeOut] = useState(false);
  const router = useRouter();
  const headerRef = useRef(null);

  // サイドメニュー開閉
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
      let headerHeight = headerRef.current.offsetHeight;

      if (position > moving || moving <= 30) {
        setVisible(moving <= 30 ? "initial" : "scrollIn");
      } else if (moving > 30 + headerHeight) {
        setVisible("scrollOut");
      }

      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);

    // ヘッダーの高さを取得
    setHeaderHeight(headerRef.current.offsetHeight);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerRef, position]);
  const { theme, setTheme } = useTheme("");
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = theme === "dark";

  const [enabled, setEnabled] = useState(false);
  const toggleMode = () => {
    setEnabled(!enabled);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative pt-[60px]">
      {/* ヘッダー */}
      <header
        ref={headerRef}
        className={`bg-gradient-to-b h-[60px] w-full flex flex-col justify-center from-[#2C58CF] via-[#2244A0] to-[#193173] p-2 z-40 ${
          visible === "initial"
            ? "top-0 fixed"
            : visible === "scrollIn"
            ? "h-[60px] w-full fixed top-0 animate-slide-in-top"
            : "fixed -top-[60px] animate-scale-out-ver-topn"
        }`}
      >
        {/* 開く閉じるボタン */}
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start space-x-4">
            <div
              onClick={toggleSideMenu}
              className="text-white flex flex-col justify-center items-center cursor-pointer"
            >
              {isShow ? <MdClose size={30} /> : <RxHamburgerMenu size={30} />}
            </div>
            {/* BET CHANNEL */}
            <Link href="/">
              <p className="font-bold text-xl animate-bounce">
                <img
                  className="w-[12rem]"
                  src="https://betchannel-free.com/betchannel-free.com/img/common/logo2.png?1675828435"
                  alt=""
                />
              </p>
            </Link>
          </div>
          {/* ダークモード */}

          <div className="flex items-center space-x-2">
            {theme === "light" ? (
              <img
                src="https://www.svgrepo.com/show/407540/sun.svg"
                alt=""
                className="w-6"
              />
            ) : (
              <img
                src="https://www.svgrepo.com/show/178114/moon-moon.svg"
                alt=""
                className="w-6"
              />
            )}
            <label class="inline-flex relative items-center mr-5 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={enabled}
                readOnly
              />
              <div
                onClick={toggleMode}
                className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
              ></div>
            </label>
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
            isShow={isShow}
            setIsShow={setIsShow}
          />
        </div>
      )}
    </div>
  );
}

export default TestHeader;
