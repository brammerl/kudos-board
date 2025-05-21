import { Container } from "@mui/material";
import useGetData from "../hooks/useGetData";
import BoardList from "./BoardList";

const LandingPage = () => {
  const { data, loading, error } = useGetData("/boards");
  console.log("data", data);
  console.log("loading", loading);
  console.log("error", error);
  return (
    <div>{loading ? <div>loading</div> : <BoardList boards={data} />}</div>
  );
};

export default LandingPage;
