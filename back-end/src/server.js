const express = require("express");
const app = express();
const cors = require("cors");
const boards = require("./routes/board");

const PORT = 3000;

app.use(cors());
app.use("/boards", boards);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
