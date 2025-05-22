import { Grid, Container } from "@mui/material";
import BoardCard from "./BoardCard";

const BoardList = ({ boards }) => {
  return (
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={2}>
      {boards.map((board) => (
        <Grid size={4} key={board.id}>
          <BoardCard board={board} key={board.title} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BoardList;
