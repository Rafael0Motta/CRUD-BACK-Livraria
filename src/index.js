const express = require("express");
const cors = require("cors");

const app = express();
const booksRouter = require("./routes/books");
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/api", booksRouter);

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});


