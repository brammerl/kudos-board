import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

import { truncateString } from "../helpers/helpers";

const KudosCard = ({ kudos }) => {
  const { title, img_url, description, upvote_count } = kudos;
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
        <Button>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default KudosCard;
