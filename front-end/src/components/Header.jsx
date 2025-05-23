import { AppBar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" sx={{ height: "100%" }}>
      <Typography variant="h2">Kudos Board</Typography>
    </AppBar>
  );
};

export default Header;
