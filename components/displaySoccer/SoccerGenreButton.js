import Link from "next/link";
import { useRouter } from "next/router";

const SoccerGenreButton = () => {
  const router = useRouter();

  return (
    <div className="">
      <div className="text-lg flex items-center border-b border-gray-600">
        <Link
          href="/soccer/j_league"
          className={`w-1/4 border-r py-1 border-gray-600 text-center ${
            router.pathname === "/soccer/j_league" &&
            "bg-blue-100 dark:bg-[#0075C2]"
          }`}
        >
          国内
        </Link>
        <Link
          href="/soccer/overseas/england"
          className={`w-1/4 border-r py-1 border-gray-600 text-center ${
            router.pathname === "/soccer/overseas" &&
            "bg-blue-100 dark:bg-[#0075C2]"
          }`}
        >
          海外
        </Link>
        <Link
          href="/soccer/worldcup"
          className={`w-1/4 border-r py-1 border-gray-600 text-center ${
            router.pathname === "/soccer/worldcup" &&
            "bg-blue-100 dark:bg-[#0075C2]"
          }`}
        >
          W杯
        </Link>
        <Link
          href="/soccer/others"
          className={`w-1/4  py-1 border-gray-600 text-center ${
            router.pathname === "/soccer/others" &&
            "bg-blue-100 dark:bg-[#0075C2]"
          }`}
        >
          その他
        </Link>
      </div>
    </div>
  );
};

export default SoccerGenreButton;
