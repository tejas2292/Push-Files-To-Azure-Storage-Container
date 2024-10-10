import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

import azureRoutes from "./routes/azureStorage.js";
//import azureStorage from "./routes/azureStorage.js";

const port = process.env.PORT;
app.use("/api", azureRoutes);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running at http:localhost:${port}`);
});
