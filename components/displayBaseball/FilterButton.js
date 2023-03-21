const FilterButton = ({ handleFilter, filteredMatch }) => {
  return (
    <div className="space-x-3 text-sm px-2">
      <button
        onClick={() => handleFilter("accept")}
        className={`border rounded-md p-2 ${
          filteredMatch === "accept" && "border-green-600 bg-green-800"
        }`}
      >
        ベット受付中
      </button>
      <button
        onClick={() => handleFilter("before")}
        className={`border rounded-md p-2 ${
          filteredMatch === "before" && "border-[#FBBF24] bg-[#8a6915]"
        }`}
      >
        ベット受付前
      </button>
      <button
        onClick={() => handleFilter("after")}
        className={`border rounded-md p-2 ${
          filteredMatch === "after" && "border-red-400 bg-red-600"
        }`}
      >
        ベット締切済
      </button>
    </div>
  );
};

export default FilterButton;
