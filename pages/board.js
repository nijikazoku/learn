import BoardDisplay from "../components/board/BoardDisplay";
import BoardInput from "../components/board/BoardInput";
import TestHeader from "../components/TestHeader";

const board = () => {
  return (
    <>
      <TestHeader />
      <BoardDisplay />
      <BoardInput />
    </>
  );
};

export default board;
