import { createBrowserRouter } from "react-router";
import LandingPage from "./components/LandingPage";
import KudosBoardPage from "./components/KudosBoardPage";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: LandingPage },
      { path: "board/:id", Component: KudosBoardPage },
    ],
  },
]);

export default router;
