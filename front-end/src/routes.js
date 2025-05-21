import { createBrowserRouter } from "react-router";
import LandingPage from "./components/LandingPage";
import KudosBoardPage from "./components/KudosBoardPage";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, Component: LandingPage },
      { path: "board/:id", Component: KudosBoardPage },
    ],
  },
]);

export default router;
