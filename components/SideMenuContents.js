import { MdOutlineSportsBaseball, MdSupportAgent } from "react-icons/md";
import { CgCardSpades } from "react-icons/cg";
import { useState } from "react";
import Link from "next/link";
const SideMenuContents = ({ toggleSideMenu }) => {
  const [showSports, setShowSports] = useState(false);
  const [fadeOutSport, setFadeOutSport] = useState(false);

  const [showGames, setShowGames] = useState(false);
  const [fadeOutGames, setFadeOutGames] = useState(false);

  const [showSupport, setShowSupport] = useState(false);
  const [fadeOutSupport, setFadeOutSupport] = useState(false);
  const handleSports = () => {
    if (!showSports) {
      setShowGames(false); // gamesを閉じる
      setShowSports(true);
      setShowSupport(false);
    } else {
      setFadeOutSport(true);
      setTimeout(() => {
        setShowSports(false);
        setFadeOutSport(false);
      }, 400);
    }
  };

  const handleGames = () => {
    if (!showGames) {
      setShowSports(false); // sportsを閉じる
      setShowSupport(false);
      setShowGames(true);
    } else {
      setFadeOutGames(true);
      setTimeout(() => {
        setShowGames(false);
        setFadeOutGames(false);
      }, 400);
    }
  };

  const handleSupport = () => {
    if (!showSupport) {
      setShowSports(false); // sportsを閉じる
      setShowGames(false);
      setShowSupport(true);
    } else {
      setFadeOutSupport(true);
      setTimeout(() => {
        setShowSupport(false);
        setFadeOutSupport(false);
      }, 400);
    }
  };

  // const handleCloseSidebar = () => {
  //   handleShow(false);
  // };

  return (
    <div
      style={{ height: "calc(100vh-[70px])", overflowY: "auto" }}
      className="py-3 h-screen bg-black bg-opacity-80 "
    >
      <div className="flex flex-col space-y-2">
        <Link
          href="/register"
          className="text-center bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-yellow-400 via-yellow-300 to-yellow-300 font-bold text-black w-[90%] mx-auto rounded-md p-1 border-b-4 border-yellow-700"
        >
          15秒で簡単登録
        </Link>

        <Link
          href="/"
          className="text-center bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-blue-500 via-blue-700 to-blue-700 font-bold text-white w-[90%] mx-auto rounded-md p-1 border-b-4 border-blue-900"
        >
          ログイン
        </Link>
      </div>
      <ul>
        {/* HOME */}
        <li>
          <Link
            onClick={toggleSideMenu}
            href="/"
            className="flex border-b space-x-2 items-center  text-xl p-2 "
          >
            <img
              className="w-6"
              src="https://www.svgrepo.com/show/474867/home.svg"
              alt=""
            />
            <p className="text-xl">ホーム</p>
          </Link>
        </li>
        {/* SPORTS */}
        <li className={`border-b  text-xl ${showSports && "border-none"}`}>
          <div
            onClick={handleSports}
            className="flex justify-between  w-full p-2"
          >
            <div className="flex items-center space-x-2">
              <img
                className="w-6"
                src="https://www.svgrepo.com/show/395857/baseball.svg"
                alt=""
              />
              <p className="text-lg">無料スポーツ</p>
            </div>

            {showSports ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            )}
          </div>
          {showSports && (
            <div className={` ${fadeOutSport && "animate-scale-out-ver-top"} `}>
              <div
                className={`  w-full                 ${
                  showSports && "animate-scale-up-ver-top"
                }
  
                 `}
              >
                <Link href="/baseball/npb">
                  <div
                    onClick={toggleSideMenu}
                    className="pb-2 px-2 text-lg border-b border-red-500"
                  >
                    野球
                  </div>
                </Link>
                <Link href="/">
                  <div
                    onClick={toggleSideMenu}
                    className="p-2 text-lg border-b border-red-500"
                  >
                    サッカー
                  </div>
                </Link>
                <Link href="/">
                  <div
                    onClick={toggleSideMenu}
                    className="p-2 text-lg  border-b border-red-500"
                  >
                    バスケットボール
                  </div>
                </Link>
                <Link href="/">
                  <div
                    onClick={toggleSideMenu}
                    className="p-2 text-lg border-b border-red-500 "
                  >
                    格闘技
                  </div>
                </Link>
              </div>
            </div>
          )}
        </li>
        {/* FREE GAMES */}
        <li className={`border-b text-xl ${showGames && "border-none"}`}>
          <div
            onClick={handleGames}
            className="flex justify-between  w-full p-2"
          >
            <div className="flex items-center space-x-2">
              <img
                className="w-6"
                src="https://www.svgrepo.com/show/485024/casino-coin-part-2.svg"
                alt=""
              />
              <p className="text-lg">無料ゲーム</p>
            </div>

            {showGames ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            )}
          </div>
          {showGames && (
            <div className={` ${fadeOutGames && "animate-scale-out-ver-top"} `}>
              <div
                className={`w-full                 ${
                  showGames && "animate-scale-up-ver-top"
                }
  
                 `}
              >
                <Link href="/">
                  <div
                    onClick={toggleSideMenu}
                    className="px-2 pb-2 text-lg  border-b border-red-500"
                  >
                    スロット
                  </div>
                </Link>
                <Link href="/">
                  <div
                    onClick={toggleSideMenu}
                    className="p-2 text-lg border-b border-red-500"
                  >
                    バカラ
                  </div>
                </Link>
                <Link href="/">
                  <div
                    onClick={toggleSideMenu}
                    className="p-2 text-lg  border-b border-red-500"
                  >
                    ブラックジャック
                  </div>
                </Link>
                <Link href="/">
                  <div
                    onClick={toggleSideMenu}
                    className="p-2 text-lg  border-b border-red-500"
                  >
                    ルーレット
                  </div>
                </Link>
                <Link href="/">
                  <div
                    onClick={toggleSideMenu}
                    className="p-2 text-lg  border-b border-red-500"
                  >
                    ポーカー
                  </div>
                </Link>
                <Link href="/">
                  <div
                    onClick={toggleSideMenu}
                    className="p-2 text-lg  border-b border-red-500"
                  >
                    その他
                  </div>
                </Link>
              </div>
            </div>
          )}
        </li>
        {/* SUPPORT */}
        <li className={`border-b text-xl ${showSupport && "border-none"}`}>
          <div
            onClick={handleSupport}
            className="flex justify-between  w-full p-2"
          >
            <div className="flex items-end space-x-2">
              <img
                className="w-6"
                src="https://www.svgrepo.com/show/429965/customer-service-support.svg"
                alt=""
              />
              <p className="text-lg">サポート</p>
            </div>

            {showSupport ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            )}
          </div>
          {showSupport && (
            <div
              className={` ${fadeOutSupport && "animate-scale-out-ver-top"} `}
            >
              <div
                className={`w-full ${showSupport && "animate-scale-up-ver-top"}
  
                 `}
              >
                <Link href="/">
                  <div
                    onClick={toggleSideMenu}
                    className="px-2 pb-2 text-lg  border-b border-red-500"
                  >
                    遊び方ガイド
                  </div>
                </Link>
                <Link href="/">
                  <div
                    onClick={toggleSideMenu}
                    className="p-2 text-lg  border-b border-red-500"
                  >
                    よくある質問
                  </div>
                </Link>
                <Link href="/">
                  <div
                    onClick={toggleSideMenu}
                    className="p-2 text-lg  border-b border-red-500"
                  >
                    カスタマーサポート
                  </div>
                </Link>
                <Link href="/">
                  <div
                    onClick={toggleSideMenu}
                    className="p-2 text-lg  border-b border-red-500"
                  >
                    利用規約
                  </div>
                </Link>
                <Link href="/">
                  <div
                    onClick={toggleSideMenu}
                    className="p-2 text-lg  border-b border-red-500"
                  >
                    プライバシーポリシー
                  </div>
                </Link>
                <Link href="/">
                  <div
                    onClick={toggleSideMenu}
                    className="p-2 text-lg  border-b border-red-500"
                  >
                    運営会社
                  </div>
                </Link>
              </div>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SideMenuContents;
