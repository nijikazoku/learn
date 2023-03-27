const FilterButton = ({ handleFilter, filteredMatch }) => {
  return (
    <div className="space-x-3 text-sm px-2">
      <button
        onClick={() => handleFilter("accept")}
        className={`border rounded-md p-2 ${
          filteredMatch === "accept" &&
          "border-green-500 bg-green-200 dark:border-green-600 dark:bg-green-800"
        }`}
      >
        ベット受付中
      </button>
      <button
        onClick={() => handleFilter("before")}
        className={`border rounded-md p-2 ${
          filteredMatch === "before" &&
          "border-yellow-400 bg-yellow-200 dark:border-[#FBBF24] dark:bg-[#6f6f13]"
        }`}
      >
        ベット受付前
      </button>
      <button
        onClick={() => handleFilter("after")}
        className={`border rounded-md p-2 ${
          filteredMatch === "after" &&
          "bg-red-300 border-red-600 dark:border-red-400 dark:bg-red-600"
        }`}
      >
        ベット締切済
      </button>
    </div>
  );
};

export default FilterButton;
