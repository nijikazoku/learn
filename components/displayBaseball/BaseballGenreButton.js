import Link from "next/link";
import { useRouter } from "next/router";

const BaseballGenreButton = () => {
  const router = useRouter();

  return (
    <div className="">
      <div className="text-lg flex items-center border-b border-gray-600">
        <Link
          href="/baseball/npb"
          className={`w-1/4 border-r border-gray-600 py-1 text-center ${
            router.pathname === "/baseball/npb" &&
            "bg-blue-100 dark:bg-[#0075C2]"
          }`}
        >
          NPB
        </Link>
        <Link
          href="/baseball/mlb"
          className={`w-1/4 border-r py-1 border-gray-600 text-center ${
            router.pathname === "/baseball/mlb" &&
            "bg-blue-100 dark:bg-[#0075C2]"
          }`}
        >
          MLB
        </Link>
        <Link
          href="/baseball/wbc"
          className={`w-1/4 border-r py-1 border-gray-600 text-center ${
            router.pathname === "/baseball/wbc" &&
            "bg-blue-100 dark:bg-[#0075C2]"
          }`}
        >
          WBC
        </Link>
        <Link
          href="/baseball/others"
          className={`w-1/4 py-1 border-gray-600 text-center ${
            router.pathname === "/baseball/others" &&
            "bg-blue-100 dark:bg-[#0075C2]"
          }`}
        >
          その他
        </Link>
      </div>
    </div>
  );
};

export default BaseballGenreButton;
