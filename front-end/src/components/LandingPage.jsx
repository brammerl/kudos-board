import {
  TextField,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Box,
  CircularProgress,
  Grid,
  Button,
  Modal,
  Typography,
  Stack,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

import useGetData from "../hooks/useGetData";
import useMutation from "../hooks/useMutation";

import CardGrid from "./CardGrid";
import BoardCard from "./BoardCard";
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

const removeElementFromArr = (arr, elem) => {
  if (arr.length == 1) {
    return [];
  }

  return arr.filter((arrElem) => arrElem !== elem);
};

const filterDataByQuery = (data, query) => {
  if (query == "") {
    return data;
  }

  const trimmedQuery = query.toLowerCase().trimEnd().trimStart();

  return data.filter((data) => data.title.toLowerCase().includes(trimmedQuery));
};

const filterDataByCategory = (data, categories) => {
  if (!categories.length) {
    return data;
  }

  return data.filter((data) =>
    categories.includes(data.category.category_name)
  );
};

const LandingPage = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    img_url: "",
    category_id: "",
  });

  const { data, loading, refetch } = useGetData("/boards");
  const { data: categories, loading: categoriesLoading } =
    useGetData("/categories");
  const { mutate: createNewBoard } = useMutation("/boards", "POST");

  if (loading || categoriesLoading) {
    return <CircularProgress />;
  }

  const formBtnDisabled =
    formData.title && formData.description && formData.category_id
      ? false
      : true;

  const handleModalChange = () => {
    return setIsModalOpen((prev) => (!prev ? true : false));
  };

  const handleFormSubmit = async () => {
    await createNewBoard([formData]).then(() => {
      handleModalChange();
      refetch({});
      setFormData({
        title: "",
        description: "",
        img_url: "",
        category_id: "",
      });
    });
  };

  const handleCheckBoxChange = (e) => {
    if (!e.target.checked) {
      const updated = removeElementFromArr(category, e.target.value);
      return setCategory([...updated]);
    }

    setCategory((prev) => [...prev, e.target.value]);
  };

  // Client side searching + filtering
  const categorizedData = filterDataByCategory(data, category);
  const filteredData = filterDataByQuery(categorizedData, query);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          rowGap: "10px",
          width: "100%",
          marginBottom: "50px",
        }}
      >
        <TextField
          variant="filled"
          sx={{ width: "30%" }}
          placeholder="Search"
          id="search-bar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <FormGroup row sx={{ flexGrow: "2", justifyContent: "flex-end" }}>
          <FormControlLabel
            control={
              <Checkbox
                value="celebration"
                onChange={(e) => handleCheckBoxChange(e)}
              />
            }
            label="Celebration"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="thank_you"
                onChange={(e) => handleCheckBoxChange(e)}
              />
            }
            label="Thank you"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="inspriation"
                onChange={(e) => handleCheckBoxChange(e)}
              />
            }
            label="Inspiration"
          />
        </FormGroup>
        <Button
          startIcon={<AddIcon />}
          onClick={handleModalChange}
          variant="contained"
        >
          Add board
        </Button>
      </Box>
      <Divider />
      {filteredData.length ? (
        <>
          <CardGrid>
            {filteredData.map((board) => {
              return (
                <Grid size={4} key={board.id}>
                  <BoardCard
                    board={board}
                    key={board.title}
                    refetch={refetch}
                  />
                </Grid>
              );
            })}
          </CardGrid>
        </>
      ) : (
        <EmptyState
          title="No boards found"
          primaryButton={{
            text: "Create Board",
            onClick: handleModalChange,
          }}
        />
      )}

      <Modal open={isModalOpen} onClose={handleModalChange}>
        <Box sx={style}>
          <form>
            <Typography variant="h5">Create new board</Typography>
            <Stack spacing={2} sx={{ marginTop: "10px", marginBottom: "20px" }}>
              <TextField
                id="title"
                label="Title"
                required
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
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
                value={formData.img_url}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, img_url: e.target.value }))
                }
              />
              <FormControl>
                <InputLabel id="category-selection-label">Category</InputLabel>
                <Select
                  label="Category"
                  required
                  id="category"
                  value={formData.category_id}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      category_id: e.target.value,
                    }))
                  }
                >
                  {categories.map(({ id, display_name, category_name }) => (
                    <MenuItem value={id} key={category_name}>
                      {display_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>

            <Button
              variant="contained"
              onClick={handleFormSubmit}
              disabled={formBtnDisabled}
            >
              Create board
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default LandingPage;
