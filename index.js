import express from "express";

const app = express();
const port = 3001;

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running at http:localhost:${port}`);
});
