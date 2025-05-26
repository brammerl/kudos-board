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
  Input,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

import useGetData from "../hooks/useGetData";
import useMutation from "../hooks/useMutation";

import CardGrid from "./CardGrid";
import BoardCard from "./BoardCard";

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
  // Consider putting these form inputs into one state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [categoryInput, setCategoryInput] = useState("");

  console.log("categoryInput", categoryInput);

  const { data, loading, error, refetch } = useGetData("/boards");
  const { data: categories, loading: categoriesLoading } =
    useGetData("/categories");
  const { mutate: createNewBoard } = useMutation("/boards", "POST");

  const handleModalChange = () => {
    return setIsModalOpen((prev) => (!prev ? true : false));
  };

  const handleFormSubmit = () => {
    createNewBoard([
      {
        title,
        description,
        img_url: imgUrl,
        category_id: categoryInput,
      },
    ]);

    handleModalChange();
    refetch({});
  };

  if (loading || categoriesLoading) {
    return <CircularProgress />;
  }

  const formBtnDisabled = title && description && categoryInput ? false : true;

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
        <Button startIcon={<AddIcon />} onClick={handleModalChange}>
          Add board
        </Button>
      </Box>
      <CardGrid>
        {filteredData.map((board) => {
          return (
            <Grid size={4} key={board.id}>
              <BoardCard board={board} key={board.title} />
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
              <FormControl>
                <InputLabel id="category-selection-label">Category</InputLabel>
                <Select
                  label="Category"
                  required
                  id="category"
                  value={categoryInput}
                  onChange={(e) => setCategoryInput(e.target.value)}
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
              Create kudos
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default LandingPage;
