import Link from "next/link";
import { useRouter } from "next/router";

const BasketballGenreButton = () => {
  const router = useRouter();

  return (
    <div className="">
      <div className="text-lg flex items-center border-b border-gray-600">
        <Link
          href="/basketball/nba"
          className={`w-1/3 border-r border-gray-600 py-1 text-center ${
            router.pathname === "/basketball/nba" &&
            "bg-blue-100 dark:bg-[#0075C2]"
          }`}
        >
          NBA
        </Link>
        <Link
          href="/basketball/b_league"
          className={`w-1/3 border-r border-gray-600 py-1 text-center ${
            router.pathname === "/basketball/b_league" &&
            "bg-blue-100 dark:bg-[#0075C2]"
          }`}
        >
          B1リーグ
        </Link>
        <Link
          href="/basketball/fiba_wc"
          className={`w-1/3 border-r border-gray-600 py-1 text-center ${
            router.pathname === "/basketball/fiba_wc" &&
            "bg-blue-100 dark:bg-[#0075C2]"
          }`}
        >
          FIBA W杯
        </Link>
      </div>
    </div>
  );
};

export default BasketballGenreButton;
