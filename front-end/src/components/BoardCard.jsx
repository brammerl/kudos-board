import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { NavLink } from "react-router";

import { truncateString } from "../helpers/helpers";

const BoardCard = ({ board }) => {
  const { title, img_url, description, id } = board;
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
      <CardMedia component="img" image={img_url} sx={{ height: 200 }} />
      <CardContent>
        <Typography variant="h5">{truncatedTitle}</Typography>
        <Typography>{truncatedDescription}</Typography>
      </CardContent>
      <CardActions>
        <Button>
          <NavLink to={`/board/${id}`}>View board</NavLink>
        </Button>
        <Button>Delete board</Button>
      </CardActions>
    </Card>
  );
};

export default BoardCard;
