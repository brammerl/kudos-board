const express = require("express");
const app = express();
const cors = require("cors");
const boards = require("./routes/board");
const kudos = require("./routes/kudos");
const categories = require("./routes/categories");

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/boards", boards);
app.use("/kudos", kudos);
app.use("/categories", categories);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
