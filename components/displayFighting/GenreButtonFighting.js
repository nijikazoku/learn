import Link from "next/link";
import { useRouter } from "next/router";

const GenreButtonFighting = () => {
  const router = useRouter();

  return (
    <div className="">
      <div className="text-lg grid grid-cols-3 border-b">
        <Link
          href="/fighting/breakingdown"
          className={`border-r border-b py-1 text-center ${
            router.pathname === "/fighting/breakingdown" && "bg-[#0075C2]"
          }`}
        >
          Breaking Down
        </Link>
        <Link
          href="/fighting/boxing"
          className={`border-b flex items-center justify-center border-r py-1 text-center ${
            router.pathname === "/fighting/boxing" && "bg-[#0075C2]"
          }`}
        >
          ボクシング
        </Link>
        <Link
          href="/fighting/ufc"
          className={`border-b flex items-center justify-center  border-r py-1 text-center ${
            router.pathname === "/fighting/ufc" && "bg-[#0075C2]"
          }`}
        >
          UFC
        </Link>
        <Link
          href="/fighting/rizin"
          className={`border-r py-1 text-center ${
            router.pathname === "/fighting/rizin" && "bg-[#0075C2]"
          }`}
        >
          RIZIN
        </Link>
        <Link
          href="/fighting/k1_Krush"
          className={`border-r py-1 text-center ${
            router.pathname === "/fighting/k1_krush" && "bg-[#0075C2]"
          }`}
        >
          K-1・Krush
        </Link>
        <Link
          href="/fighting/others"
          className={`border-r py-1 text-center ${
            router.pathname === "/fighting/others" && "bg-[#0075C2]"
          }`}
        >
          その他
        </Link>
      </div>
    </div>
  );
};

export default GenreButtonFighting;
