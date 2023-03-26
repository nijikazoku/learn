import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const GenreButtonFighting = () => {
  const router = useRouter();
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleSelect = (event) => {
    const genre = event.target.value;
    setSelectedGenre(genre);
  };

  useEffect(() => {
    if (selectedGenre !== "" && selectedGenre !== router.query.genre) {
      router.push(`/fighting/${selectedGenre}`);
    }
  }, [selectedGenre, router]);

  return (
    <div className="flex items-center py-2 space-x-3 px-2 justify-end">
      <div>カテゴリ選択</div>
      <select
        onChange={handleSelect}
        className="bg-slate-700 w-[45%] outline-none text-center rounded-lg py-1"
      >
        <option className="" value="breakingdown">
          Breaking Down
        </option>
        <option value="boxing">ボクシング</option>
        <option value="ufc">UFC</option>
      </select>
    </div>
  );
};

export default GenreButtonFighting;
