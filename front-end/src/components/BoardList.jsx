import BoardCard from "./BoardCard";

const BoardList = ({ boards }) => {
  return (
    <div>
      {boards.map((board) => (
        <div>
          <BoardCard board={board} />
        </div>
      ))}
    </div>
  );
};

export default BoardList;
