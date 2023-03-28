const GenreButton = ({
  handleClick,
  setFavoriteFilter,
  favoriteFilter,
  selectedGenre,
}) => {
  return (
    <div className="grid grid-cols-3 gap-1 whitespace-nowrap">
      {/* スロット */}
      <button
        className={`border dark:border-white py-1 px-2 text-sm rounded-full ${
          selectedGenre === "slots"
            ? "border-black "
            : "border-gray-300 opacity-40"
        }`}
        onClick={() => handleClick("slots")}
      >
        スロット
      </button>
      {/* テーブルゲーム */}
      <button
        className={`border dark:border-white py-1 px-2 text-sm rounded-full ${
          selectedGenre === "tablegame"
            ? "border-black "
            : "border-gray-300 opacity-40"
        }`}
        onClick={() => handleClick("tablegame")}
      >
        テーブルゲーム
      </button>
      {/* ジャックポット */}
      <button
        className={`border dark:border-white py-1 px-2 text-sm rounded-full ${
          selectedGenre === "jackpot"
            ? "border-black "
            : "border-gray-300 opacity-40"
        }`}
        onClick={() => handleClick("jackpot")}
      >
        ジャックポット
      </button>
      {/* ブラックジャック */}
      <button
        className={`border dark:border-white py-1 px-2 text-sm rounded-full ${
          selectedGenre === "blackjack"
            ? "border-black "
            : "border-gray-300 opacity-40"
        }`}
        onClick={() => handleClick("blackjack")}
      >
        ブラックジャック
      </button>
      {/* ルーレット */}
      <button
        className={`border dark:border-white py-1 px-2 text-sm rounded-full ${
          selectedGenre === "roulette"
            ? "border-black "
            : "border-gray-300 opacity-40"
        }`}
        onClick={() => handleClick("roulette")}
      >
        ルーレット
      </button>
      {/* ポーカー */}
      <button
        className={`border dark:border-white py-1 px-2 text-sm rounded-full ${
          selectedGenre === "poker"
            ? "border-black "
            : "border-gray-300 opacity-40"
        }`}
        onClick={() => handleClick("poker")}
      >
        ポーカー
      </button>
      {/* お気に入り */}
      <button
        className={`border dark:border-white py-1 px-2 text-sm rounded-full ${
          selectedGenre === "favorite"
            ? "border-black "
            : "border-gray-300 opacity-40"
        }`}
        onClick={() => handleClick("favorite")}
      >
        お気に入り
      </button>
    </div>
  );
};

export default GenreButton;
