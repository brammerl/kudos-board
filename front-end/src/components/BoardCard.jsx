import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

const truncateString = (title, maxLength) => {
  if (title.length > maxLength) {
    return title.substring(0, maxLength) + "...";
  }

  return title;
};

const BoardCard = ({ board }) => {
  const { title, img_url, description } = board;
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
        <Typography>{truncatedTitle}</Typography>
        <Typography>{truncatedDescription}</Typography>
      </CardContent>
      <CardActions>
        <Button>View board</Button>
        <Button>Delete board</Button>
      </CardActions>
    </Card>
  );
};

export default BoardCard;
