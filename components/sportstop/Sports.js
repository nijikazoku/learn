import Baseball from "./Baseball";
import Basketball from "./Basketball";
import Fighting from "./Fighting";
import Soccer from "./Soccer";

const Sports = () => {
  return (
    <div className="pb-[70px]">
      <Baseball />
      <Soccer />
      <Fighting />
      <Basketball />
    </div>
  );
};

export default Sports;
