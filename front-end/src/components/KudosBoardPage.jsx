import { useParams } from "react-router";
import { CircularProgress } from "@mui/material";

import useGetData from "../hooks/useGetData";
import KudosCard from "./KudosCard";

const KudosBoardPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useGetData(`/kudos/${id}`);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      {data.map((kudos) => {
        return <KudosCard kudos={kudos} />;
      })}
    </div>
  );
};

export default KudosBoardPage;
