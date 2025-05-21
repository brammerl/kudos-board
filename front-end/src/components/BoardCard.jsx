import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

const BoardCard = ({ board }) => {
  const { title, img_url, description } = board;
  return (
    <Card>
      <CardMedia image={img_url} sx={{ height: 200, width: 300 }} />
      <CardContent>
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button>View board</Button>
        <Button>Delete board</Button>
      </CardActions>
    </Card>
  );
};

export default BoardCard;
