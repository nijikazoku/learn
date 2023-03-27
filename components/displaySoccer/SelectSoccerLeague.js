import Link from "next/link";
import { useRouter } from "next/router";

const SelectSoccerLeague = ({ setSelectCountry, selectCountry }) => {
  const router = useRouter();
  return (
    <div className="flex justify-around space-x-1">
      <Link href="/soccer/overseas/england">
        <img
          className={`w-8 ${
            router.pathname === "/soccer/overseas/england" ? "" : "opacity-40 "
          }`}
          src="https://www.svgrepo.com/show/405401/flag-england.svg"
          alt=""
        />
      </Link>

      <Link href="/soccer/overseas/spain">
        <img
          className={`w-8 ${
            router.pathname === "/soccer/overseas/spain" ? "" : "opacity-40 "
          }`}
          src="https://www.svgrepo.com/show/405610/flag-for-flag-spain.svg"
          alt=""
        />
      </Link>
      <Link href="/soccer/overseas/germany">
        <img
          className={`w-8 ${
            router.pathname === "/soccer/overseas/germany" ? "" : "opacity-40 "
          }`}
          src="https://www.svgrepo.com/show/405490/flag-for-flag-germany.svg"
          alt=""
        />
      </Link>

      <Link href="/soccer/overseas/italy">
        <img
          className={`w-8 ${
            router.pathname === "/soccer/overseas/italy" ? "" : "opacity-40 "
          }`}
          src="https://www.svgrepo.com/show/405517/flag-for-flag-italy.svg"
          alt=""
        />
      </Link>
      <Link href="/soccer/overseas/france">
        <img
          className={`w-8 ${
            router.pathname === "/soccer/overseas/france" ? "" : "opacity-40 "
          }`}
          src="https://www.svgrepo.com/show/405485/flag-for-flag-france.svg"
          alt=""
        />
      </Link>
      <Link href="/soccer/overseas/netherlands">
        <img
          className={`w-8 ${
            router.pathname === "/soccer/overseas/netherlands"
              ? ""
              : "opacity-40 "
          }`}
          src="https://www.svgrepo.com/show/405561/flag-for-flag-netherlands.svg"
          alt=""
        />
      </Link>
      <Link href="/soccer/overseas/portugal">
        <img
          className={`w-8 ${
            router.pathname === "/soccer/overseas/portugal" ? "" : "opacity-40 "
          }`}
          src="https://www.svgrepo.com/show/405585/flag-for-flag-portugal.svg"
          alt=""
        />
      </Link>
    </div>
  );
};

export default SelectSoccerLeague;
