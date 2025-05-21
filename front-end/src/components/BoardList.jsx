import { Grid, Container } from "@mui/material";
import BoardCard from "./BoardCard";

const BoardList = ({ boards }) => {
  return (
    <Container sx={{ marginTop: "100px" }}>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={2}>
        {boards.map((board) => (
          <Grid size={4}>
            <BoardCard board={board} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BoardList;
