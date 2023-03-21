import Link from "next/link";

const SelectSportsSoccer = () => {
  return (
    <div className="flex justify-between items-center bg-gradient-to-l from-blue-700 via-blue-800 py-2 to-gray-900 px-4">
      <div className="flex space-x-2 items-center">
        <img
          className="w-5"
          src="https://www.svgrepo.com/show/484370/soccer-ball-illustration.svg"
          alt=""
        />
        <div className="text-[1.1rem]">サッカー</div>
      </div>

      <div className="flex space-x-4 items-center">
        <Link href="/baseball/npb">
          <img
            className="w-6"
            src="https://www.svgrepo.com/show/395857/baseball.svg"
            alt=""
          />
        </Link>
        <div>
          <img
            className="w-6"
            src="https://www.svgrepo.com/show/395860/basketball.svg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-6"
            src="https://www.svgrepo.com/show/401223/boxing-glove.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SelectSportsSoccer;
