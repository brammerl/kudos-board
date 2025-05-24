import { useParams } from "react-router";
import { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  IconButton,
  Box,
  Stack,
  Modal,
  TextField,
  Button,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import useGetData from "../hooks/useGetData";
import useMutation from "../hooks/useMutation";
import KudosCard from "./KudosCard";
import CardGrid from "./CardGrid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const KudosBoardPage = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const { data, loading, refetch } = useGetData(`/kudos/${id}`);
  const { mutate } = useMutation("/kudos", "POST");

  const formBtnDisabled = title && description ? false : true;

  const handleModalChange = () => {
    return setIsModalOpen((prev) => (!prev ? true : false));
  };

  const handleFormSubmit = () => {
    mutate([
      {
        title,
        description,
        img_url: imgUrl,
        board_id: id,
      },
    ]);

    handleModalChange();

    refetch({});
  };
  if (loading) {
    return <CircularProgress />;
  }

  const { board } = data[0];

  return (
    <>
      <Stack direction="row" sx={{ marginBottom: "10px" }}>
        <Typography variant="h4" sx={{ flexGrow: 3 }}>
          {board.title}
        </Typography>
        <IconButton onClick={handleModalChange}>
          <AddIcon />
        </IconButton>
      </Stack>
      <CardGrid sx={{ borderStyle: "line" }}>
        {data.map((kudos) => {
          return (
            <Grid size={4} key={kudos.id}>
              <KudosCard kudos={kudos} key={kudos.title} />
            </Grid>
          );
        })}
      </CardGrid>
      <Modal open={isModalOpen} onClose={handleModalChange}>
        <Box sx={style}>
          <form>
            <Typography variant="h5">Create new kudos</Typography>
            <Stack spacing={2} sx={{ marginTop: "10px", marginBottom: "20px" }}>
              <TextField
                id="title"
                label="Title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                id="description"
                label="Description"
                required
                multiline
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextField
                id="img_url"
                label="Link to image"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
            </Stack>
            <Button
              variant="contained"
              onClick={handleFormSubmit}
              disabled={formBtnDisabled}
            >
              Create kudos
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default KudosBoardPage;
