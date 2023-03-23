import Link from "next/link";

const BetConfirm = ({ betList, handleBet }) => {
  return (
    <button
      onClick={handleBet}
      className="fixed w-[35%]whitespace-nowrap bottom-20 right-10 border p-3 text-xl rounded-md text-center animate-bounce bg-yellow-300 text-blue-600 font-bold"
    >
      ベット数:{betList.length}
    </button>
  );
};

export default BetConfirm;
