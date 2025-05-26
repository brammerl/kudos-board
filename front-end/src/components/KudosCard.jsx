import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

import useMutation from "../hooks/useMutation";

import { truncateString } from "../helpers/helpers";

const KudosCard = ({ kudos, refetch }) => {
  const { title, img_url, description, upvote_count, id } = kudos;
  const { mutate: deleteKudos } = useMutation(`kudos/${id}`, "DELETE");
  const { mutate: updateKudos } = useMutation(`kudos/${id}`, "PUT");

  const handleDeleteKudos = () => {
    deleteKudos();
    refetch({});
  };

  const truncatedTitle = truncateString(title, 32);
  const truncatedDescription = truncateString(description);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        justifyItems: "center",
        textAlign: "center",
      }}
    >
      {img_url ? (
        <CardMedia component="img" image={img_url} sx={{ height: 200 }} />
      ) : null}
      <CardContent>
        <Typography variant="h5">{truncatedTitle}</Typography>
        <Typography>{truncatedDescription}</Typography>
      </CardContent>
      <CardActions>
        <Button>{`Upvote (${upvote_count})`}</Button>
        <Button onClick={handleDeleteKudos}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default KudosCard;
