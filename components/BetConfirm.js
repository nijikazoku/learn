const BetConfirm = ({ betList, handleBet }) => {
  return (
    <button
      onClick={handleBet}
      className={`fixed w-[35%] whitespace-nowrap  justify-center bottom-20 right-10 p-2 text-lg rounded-md text-center animate-pulse font-bold  bg-gradient-to-r from-blue-500 to-blue-600 ${
        betList.length !== 0 ? "animate-slide-in-br" : "animate-slide-out-br"
      }`}
    >
      <span className="text-xl text-yellow-400">BET数:{betList.length}</span>
    </button>
  );
};

export default BetConfirm;
