const SelectSoccerLeague = ({ setSelectCountry, selectCountry }) => {
  return (
    <div className="flex justify-around space-x-1">
      <img
        onClick={() => setSelectCountry("england")}
        className={`w-8 ${selectCountry === "england" ? "" : "opacity-40 "}`}
        src="https://www.svgrepo.com/show/405401/flag-england.svg"
        alt=""
      />

      <img
        onClick={() => setSelectCountry("spain")}
        className={`w-8 ${selectCountry === "spain" ? "" : "opacity-40 "}`}
        src="https://www.svgrepo.com/show/405610/flag-for-flag-spain.svg"
        alt=""
      />
      <img
        onClick={() => setSelectCountry("germany")}
        className={`w-8 ${selectCountry === "germany" ? "" : "opacity-40 "}`}
        src="https://www.svgrepo.com/show/405490/flag-for-flag-germany.svg"
        alt=""
      />
      <img
        onClick={() => setSelectCountry("italy")}
        className={`w-8 ${selectCountry === "italy" ? "" : "opacity-40 "}`}
        src="https://www.svgrepo.com/show/405517/flag-for-flag-italy.svg"
        alt=""
      />
      <img
        onClick={() => setSelectCountry("france")}
        className={`w-8 ${selectCountry === "france" ? "" : "opacity-40 "}`}
        src="https://www.svgrepo.com/show/405485/flag-for-flag-france.svg"
        alt=""
      />
      <img
        onClick={() => setSelectCountry("netherlands")}
        className={`w-8 ${
          selectCountry === "netherlands" ? "" : "opacity-40 "
        }`}
        src="https://www.svgrepo.com/show/405561/flag-for-flag-netherlands.svg"
        alt=""
      />
      <img
        onClick={() => setSelectCountry("portgal")}
        className={`w-8 ${selectCountry === "portgal" ? "" : "opacity-40 "}`}
        src="https://www.svgrepo.com/show/405585/flag-for-flag-portugal.svg"
        alt=""
      />
    </div>
  );
};

export default SelectSoccerLeague;
