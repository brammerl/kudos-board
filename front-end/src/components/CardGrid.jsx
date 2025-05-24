import { Grid, Container } from "@mui/material";

const CardGrid = ({ children }) => {
  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12 }}
      spacing={2}
      sx={{
        border: "black",
        borderStyle: "solid",
        padding: "30px",
      }}
    >
      {children}
    </Grid>
  );
};

export default CardGrid;
