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

const LandingPage = () => {
  const [query, setQuery] = useState("");

  const { data, loading, error } = useGetData("/boards");
  console.log(loading);
  console.log(data);
  if (loading) {
    return <CircularProgress />;
  }

  const filteredData = data.filter((data) => {
    if (query == "") {
      return data;
    }
    const trimmedQuery = query.toLowerCase().trimEnd().trimStart();
    return data.title.toLowerCase().includes(trimmedQuery);
  });

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
          <FormControlLabel control={<Checkbox />} label="Celebration" />
          <FormControlLabel control={<Checkbox />} label="Thank you" />
          <FormControlLabel control={<Checkbox />} label="Inspiration" />
        </FormGroup>
      </Box>

      {loading ? <div>loading</div> : <BoardList boards={filteredData} />}
    </Container>
  );
};

export default LandingPage;
