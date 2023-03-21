import { useEffect, useState } from "react";
import { BsPlayCircle, BsBookmarkCheck } from "react-icons/bs";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { ImArrowDown2 } from "react-icons/im";
import { allGames } from "../src/casino/allGames";
import GenreButton from "../components/casino/GenreButton";
import Layout from "../components/Layout";
import Header from "../components/Header";
import { useRouter } from "next/router";

const casino = () => {
  const [genres, setGenres] = useState([]);
  const [favoriteFilter, setFavoriteFilter] = useState(false);
  const [allGamesWithFavorite, setAllGamesWithFavorite] = useState(
    allGames.map((game) => ({ ...game, favorite: false }))
  );
  const [favoriteMessage, setFavoriteMessage] = useState("");
  const [favoriteMessageColor, setFavoriteMessageColor] = useState("");
  const [favoriteMessageColorBorder, setFavoriteMessageColorBorder] =
    useState("");
  const [favoriteMessageTimerId, setFavoriteMessageTimerId] = useState(null);

  const [showCount, setShowCount] = useState(4);
  const router = useRouter();
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    const query = router.query;
    if (query.genre) {
      setSelectedGenre(query.genre);
    }
  }, [router.query]);

  useEffect(() => {
    if (selectedGenre === "slot") {
      handleClick("slot");
    }
    if (selectedGenre === "tableGame") {
      handleClick("tableGame");
    }
  }, [selectedGenre]);

  useEffect(() => {
    const query = {};
    if (genres.length > 0) {
      query.genres = genres.join(",");
    }
    if (favoriteFilter) {
      query.favoriteFilter = true;
    }
    router.push({ pathname: "/casino", query: query });
  }, [genres, favoriteFilter]);
  const filteredGames = allGamesWithFavorite.filter((game) => {
    if (favoriteFilter && !game.favorite) {
      return false;
    }
    if (genres.length === 0) {
      return true;
    }
    return genres.some((genre) => game.genre.includes(genre));
  });
  const itemsToShow =
    genres.length === 0 && !favoriteFilter
      ? filteredGames.slice(0, showCount)
      : filteredGames;

  const handleClick = (genre) => {
    if (genres.includes(genre)) {
      // ジャンルが選択されている場合、選択を解除する
      setGenres(genres.filter((g) => g !== genre));
    } else {
      // ジャンルが選択されていない場合、選択する
      setGenres([genre]);
    }
    // お気に入りフィルターを解除する
    setFavoriteFilter(false);
  };

  const handleFavorite = (eName) => {
    setAllGamesWithFavorite((prevGames) =>
      prevGames.map((game) =>
        game.eName === eName ? { ...game, favorite: !game.favorite } : game
      )
    );

    if (allGamesWithFavorite.find((game) => game.eName === eName).favorite) {
      setFavoriteMessage("お気に入りから削除しました");
      setFavoriteMessageColor("bg-red-600");
      setFavoriteMessageColorBorder("border-red-800");
    } else {
      setFavoriteMessage("お気に入りに追加しました");
      setFavoriteMessageColor("bg-blue-500");
      setFavoriteMessageColorBorder("border-blue-700");
    }

    if (favoriteMessageTimerId) {
      clearTimeout(favoriteMessageTimerId);
    }
    setFavoriteMessageTimerId(
      setTimeout(() => {
        setFavoriteMessage("");
      }, 1800)
    );
  };

  const handleShowMore = () => {
    setShowCount(showCount + 4);
  };

  return (
    <Layout>
      <Header
        handleClick={handleClick}
        setSelectedGenre={setSelectedGenre}
        selectedGenre={selectedGenre}
      />
      <div className="space-y-1 mb-[70px]">
        <div>
          {/* ジャンル */}
          <div className="p-2">
            <p className="text-lg">ジャンル</p>
            <GenreButton
              genres={genres}
              handleClick={handleClick}
              setFavoriteFilter={setFavoriteFilter}
              favoriteFilter={favoriteFilter}
              selectedGenre={selectedGenre}
            />
          </div>
          <div className="flex space-x-1 w-[95%] justify-between items-center py-1 mx-auto px-2">
            <p className="text-2xl">無料ゲーム</p>
            <div className="flex">
              <p>総ゲーム数:</p>
              <div className="font-bold">{filteredGames.length}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-[95%] mx-auto">
            {itemsToShow.map((game, index) => (
              <div key={game.eName} className="relative">
                <div className="flex flex-col items-center">
                  <img src={game.image} alt="" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90">
                  <BsPlayCircle size={40} style={{ color: "white" }} />
                </div>

                <button
                  className="absolute top-1 right-0"
                  onClick={() => handleFavorite(game.eName)}
                >
                  {game.favorite ? (
                    <AiFillStar size={30} style={{ color: "#FACC15" }} />
                  ) : (
                    <AiOutlineStar size={30} style={{ color: "#FACC15" }} />
                  )}
                </button>
              </div>
            ))}
          </div>
          {/* もっと見るボタン */}
          {filteredGames.length > 0 && showCount < filteredGames.length && (
            <div className="flex items-center mt-5 animate-bounce py-2 text-blue-600 justify-center space-x-2">
              <ImArrowDown2 size={20} />
              <button
                className="text-blue-600 font-bold text-xl"
                onClick={handleShowMore}
              >
                SHOW MORE
              </button>
            </div>
          )}
        </div>

        {/* お気に入りメッセージ */}
        {favoriteMessage && (
          <div
            className={`fixed bottom-[5rem] right-2  font-bold text-white px-4 py-3 shadow-lg rounded-lg border-b-4 animate-slide-in-right ${favoriteMessageColor} ${favoriteMessageColorBorder}`}
          >
            <p>{favoriteMessage}</p>
          </div>
        )}
      </div>
    </Layout>
  );
};
export default casino;
