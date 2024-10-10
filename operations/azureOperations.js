import dotenv from "dotenv";
import { BlobServiceClient } from "@azure/storage-blob";

dotenv.config();

const AZURE_STORAGE_CONNECTION_STRING =
  process.env.AZURE_STORAGE_CONNECTION_STRING;
const blobServiceClient = BlobServiceClient.fromConnectionString(
  AZURE_STORAGE_CONNECTION_STRING
);

// Upload a single file to Azure Blob Storage
async function uploadSingleFile(file) {
  const containerName = "shinobi"; // Replace with your container name
  const containerClient = blobServiceClient.getContainerClient(containerName);

  const blockBlobClient = containerClient.getBlockBlobClient(file.originalname);

  try
  {
  // Upload file buffer
  await blockBlobClient.uploadData(file.buffer);
  return { message: `File uploaded successfully: ${file.originalname}` };
  }
  catch (E)
  {
    
  }
}

// Get the list of all files in a container
async function getListofAllFiles(containerName) {
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blobList = [];

  // Iterate through all blobs in the container
  for await (const blob of containerClient.listBlobsFlat()) {
    blobList.push(blob.name);
  }

  return blobList;
}

export { uploadSingleFile, getListofAllFiles };
