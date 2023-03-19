import { MdOutlineSportsBaseball, MdSupportAgent } from "react-icons/md";
import { CgCardSpades } from "react-icons/cg";
import { BiFootball } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";
const SideMenuContents = ({}) => {
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

  const handleCloseSidebar = () => {
    handleShow(false);
  };

  return (
    <div className="overflow-y-auto">
      <ul>
        {/* HOME */}
        <li>
          <Link
            onClick={handleCloseSidebar}
            href="/"
            className="flex border-b border-t space-x-2 items-end border-gray-700  text-xl p-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <p>HOME</p>
          </Link>
        </li>
        {/* SPORTS */}
        <li className="border-b border-gray-700 text-xl ">
          <div
            onClick={handleSports}
            className="flex justify-between  w-full p-4"
          >
            <div className="flex items-end space-x-2">
              <MdOutlineSportsBaseball size={30} />
              <p>SPORTS</p>
            </div>

            {showSports ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 12H6"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            )}
          </div>
          {showSports && (
            <div className={` ${fadeOutSport && "animate-scale-out-ver-top"} `}>
              <div
                className={`bg-slate-600  w-full                 ${
                  showSports && "animate-scale-up-ver-top"
                }
  
                 `}
              >
                <Link href="/baseball/npb">
                  <div className="p-4 border-b border-gray-500">野球</div>
                </Link>

                <p className="p-4 border-b border-gray-500">サッカー</p>
                <p className="p-4 border-b border-gray-500">バスケットボール</p>
                <p className="p-4">格闘技</p>
              </div>
            </div>
          )}
        </li>
        {/* FREE GAMES */}
        <li className="border-b border-gray-700 text-xl ">
          <div
            onClick={handleGames}
            className="flex justify-between  w-full p-4"
          >
            <div className="flex items-end space-x-2">
              <CgCardSpades size={30} />
              <p>FREE GAMES</p>
            </div>

            {showGames ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 12H6"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            )}
          </div>
          {showGames && (
            <div className={` ${fadeOutGames && "animate-scale-out-ver-top"} `}>
              <div
                className={`bg-slate-600 w-full                 ${
                  showGames && "animate-scale-up-ver-top"
                }
  
                 `}
              >
                <p className="p-4 border-b border-gray-500">スロット</p>
                <p className="p-4 border-b border-gray-500">バカラ</p>
                <p className="p-4 border-b border-gray-500">ブラックジャック</p>
                <p className="p-4 border-b border-gray-500">ルーレット</p>
                <p className="p-4 border-b border-gray-500">ポーカー</p>
                <p className="p-4 border-b border-gray-500">その他</p>
              </div>
            </div>
          )}
        </li>
        {/* SUPPORT */}
        <li className="border-b overflow-y-auto border-gray-700 text-xl ">
          <div
            onClick={handleSupport}
            className="flex justify-between  w-full p-4"
          >
            <div className="flex items-end space-x-2">
              <MdSupportAgent size={30} />
              <p>SUPPORT</p>
            </div>

            {showSupport ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 12H6"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                className={`bg-slate-600 w-full                 ${
                  showSupport && "animate-scale-up-ver-top"
                }
  
                 `}
              >
                <p className="p-4 border-b border-gray-500">遊び方ガイド</p>
                <p className="p-4 border-b border-gray-500">よくある質問</p>
                <p className="p-4 border-b border-gray-500">
                  カスタマーサポート
                </p>
                <p className="p-4 border-b border-gray-500">利用規約</p>
                <p className="p-4 border-b border-gray-500">
                  プライバシーポリシー
                </p>
                <p className="p-4 border-b border-gray-500">運営会社</p>
                <p className="p-4 border-b border-gray-500">
                  プライバシーポリシー
                </p>
                <p className="p-4 border-b border-gray-500">運営会社</p>
              </div>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SideMenuContents;
