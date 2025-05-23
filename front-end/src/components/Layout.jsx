import { Outlet } from "react-router";
import { Container } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <Header />
      <Container sx={{ marginTop: "50px" }}>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;
