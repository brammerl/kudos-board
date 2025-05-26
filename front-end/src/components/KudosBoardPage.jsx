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
import EmptyState from "./EmptyState";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 10,
  p: 4,
};

const KudosBoardPage = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    img_url: "",
  });

  const { data, loading, refetch } = useGetData(`/kudos/${id}`);
  const { mutate } = useMutation("/kudos", "POST");

  const formBtnDisabled = formData.title && formData.description ? false : true;

  // Consider putting this into a custom hook since this logic
  // is replicated elsewhere - LandingPage
  const handleModalChange = () => {
    return setIsModalOpen((prev) => (!prev ? true : false));
  };

  const handleFormSubmit = async () => {
    await mutate([
      {
        ...formData,
        board_id: id,
      },
    ])
      .then(() => {
        setFormData({
          title: "",
          description: "",
          img_url: "",
        });
        handleModalChange();
        refetch({});
      })
      .catch(() => {
        throw Error("Failed to create new kudos");
      });
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
      {data.length ? (
        <>
          <Stack direction="row" sx={{ marginBottom: "10px" }}>
            <Typography variant="h4" sx={{ flexGrow: 3 }}>
              {data[0].board.title ?? <div>`No kudos found`</div>}
            </Typography>
            <IconButton onClick={handleModalChange}>
              <AddIcon />
            </IconButton>
          </Stack>
          <CardGrid>
            {data.length
              ? data.map((kudos) => {
                  return (
                    <Grid size={4} key={kudos.id}>
                      <KudosCard
                        kudos={kudos}
                        key={kudos.title}
                        refetch={refetch}
                      />
                    </Grid>
                  );
                })
              : null}
          </CardGrid>
        </>
      ) : (
        <EmptyState
          title="No kudos found"
          description="Create kudos to display them"
          primaryButton={{
            onClick: handleModalChange,
            text: "Create kudos",
          }}
        />
      )}
      <Modal open={isModalOpen} onClose={handleModalChange}>
        <Box sx={style}>
          <form>
            <Typography variant="h5">Create new kudos</Typography>
            <Stack spacing={2} sx={{ marginTop: "10px", marginBottom: "20px" }}>
              <TextField
                id="title"
                label="Title"
                required
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
              />
              <TextField
                id="description"
                label="Description"
                required
                multiline
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
              />
              <TextField
                id="img_url"
                label="Link to image"
                value={formData.imgUrl}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    img_url: e.target.value,
                  }))
                }
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
