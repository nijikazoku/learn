const GenreButton = ({
  genres,
  handleClick,
  setFavoriteFilter,
  favoriteFilter,
}) => {
  return (
    <div className="space-y-2 w-[95%] mx-auto">
      <div className="space-x-3 flex justify-start items-center whitespace-nowrap">
        {/* スロット */}
        <button
          className={`border py-1 px-2 text-sm rounded-full  ${
            !genres.includes("スロット") && "opacity-40"
          }`}
          onClick={() => handleClick("スロット")}
        >
          スロット
        </button>
        {/* テーブルゲーム */}
        <button
          className={`border py-1 px-2 text-sm rounded-full  ${
            !genres.includes("テーブルゲーム") && "opacity-40"
          }`}
          onClick={() => handleClick("テーブルゲーム")}
        >
          テーブルゲーム
        </button>
        {/* ジャックポット */}
        <button
          className={`border py-1 px-2 text-sm rounded-full  ${
            !genres.includes("ジャックポット") && "opacity-40"
          }`}
          onClick={() => handleClick("ジャックポット")}
        >
          ジャックポット
        </button>
      </div>
      {/* お気に入り */}
      <div className="flex justigy-start items-center">
        <button
          className={`border py-1 px-2 text-sm rounded-full ${
            !favoriteFilter && "opacity-40"
          }`}
          onClick={() => setFavoriteFilter(!favoriteFilter)}
        >
          お気に入り
        </button>
      </div>
    </div>
  );
};

export default GenreButton;
