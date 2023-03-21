import Link from "next/link";
import { useRouter } from "next/router";

const SoccerGenreButton = () => {
  const router = useRouter();

  return (
    <div className="">
      <div className="text-lg flex items-center border-b">
        <Link
          href="/soccer/j_league"
          className={`w-1/4 border-r py-1 text-center ${
            router.pathname === "/soccer/j_league" && "bg-[#0075C2]"
          }`}
        >
          国内
        </Link>
        <Link
          href={{
            pathname: "/soccer/overseas",
            query: { country: "england" },
          }}
          className={`w-1/4 border-r py-1 text-center ${
            router.pathname === "/soccer/overseas" && "bg-[#0075C2]"
          }`}
        >
          海外
        </Link>
        <Link
          href="/soccer/worldcup"
          className={`w-1/4 border-r py-1 text-center ${
            router.pathname === "/soccer/worldcup" && "bg-[#0075C2]"
          }`}
        >
          W杯
        </Link>
        <Link
          href="/soccer/others"
          className={`w-1/4 border-r py-1 text-center ${
            router.pathname === "/soccer/others" && "bg-[#0075C2]"
          }`}
        >
          その他
        </Link>
      </div>
    </div>
  );
};

export default SoccerGenreButton;
