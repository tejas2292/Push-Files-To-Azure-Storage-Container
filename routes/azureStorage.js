import express from "express";
import multer from "multer";
import * as azureOperations from "../operations/azureOperations.js";

const router = express.Router();
const upload = multer(); // Multer middleware for handling file uploads

// Upload route
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    const result = await azureOperations.uploadSingleFile(file);
    res.json(result);
  } catch (err) {
    console.error("Error during upload: ", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route to get the list of files
router.get("/files", async (req, res) => {
  try {
    const containerName = "shinobi"; // Replace with your container name
    const files = await azureOperations.getListofAllFiles(containerName);
    res.json(files);
  } catch (err) {
    console.error("Error fetching file list: ", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
