import { useParams } from "react-router";
import { CircularProgress, Grid } from "@mui/material";

import useGetData from "../hooks/useGetData";
import KudosCard from "./KudosCard";
import CardGrid from "./CardGrid";

const KudosBoardPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useGetData(`/kudos/${id}`);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <CardGrid>
      {data.map((kudos) => {
        return (
          <Grid size={4} key={kudos.id}>
            <KudosCard kudos={kudos} key={kudos.title} />
          </Grid>
        );
      })}
    </CardGrid>
  );
};

export default KudosBoardPage;
