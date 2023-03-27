import Link from "next/link";

const SelectSports = () => {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-600 px-4 selectSports ">
      <div className="flex space-x-2 items-center">
        <img
          className="w-5"
          src="https://www.svgrepo.com/show/395857/baseball.svg"
          alt=""
        />
        <div className="text-[1.1rem]">野球</div>
      </div>

      <div className="flex space-x-4 items-center">
        <Link href="/soccer/j_league">
          <img
            className="w-6"
            src="https://www.svgrepo.com/show/484370/soccer-ball-illustration.svg"
            alt=""
          />
        </Link>
        <Link href="/basketball/nba">
          <img
            className="w-6"
            src="https://www.svgrepo.com/show/395860/basketball.svg"
            alt=""
          />
        </Link>
        <Link href="/fighting/breakingdown">
          <img
            className="w-6"
            src="https://www.svgrepo.com/show/401223/boxing-glove.svg"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default SelectSports;
