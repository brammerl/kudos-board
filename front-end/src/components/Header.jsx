import { AppBar, Typography } from "@mui/material";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ height: "100%" }}>
      <NavLink to={"/"}>
        <Typography variant="h2">Kudos Board</Typography>
      </NavLink>
    </AppBar>
  );
};

export default Header;
