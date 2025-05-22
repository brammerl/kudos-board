import {
  Container,
  TextField,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Box,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";

import useGetData from "../hooks/useGetData";
import BoardList from "./BoardList";

const removeElement = (arr, elem) => {
  if (arr.length == 1) {
    return [];
  }

  return arr.filter((cat) => cat !== elem);
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

  const { data, loading, error } = useGetData("/boards");

  const handleCheckBoxChange = (e) => {
    if (!e.target.checked) {
      const updated = removeElement(category, e.target.value);
      return setCategory([...updated]);
    }

    setCategory((prev) => [...prev, e.target.value]);
  };

  if (loading) {
    return <CircularProgress />;
  }

  const categorizedData = filterDataByCategory(data, category);
  const filteredData = filterDataByQuery(categorizedData, query);

  return (
    <Container sx={{ marginTop: "50px" }}>
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
      </Box>

      <BoardList boards={filteredData} />
    </Container>
  );
};

export default LandingPage;
