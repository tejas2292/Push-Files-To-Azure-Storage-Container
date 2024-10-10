# Push Files To Azure Storage Container

This project is a simple Node.js-based REST API built with Express that enables users to interact with Azure Blob Storage. It provides endpoints for uploading files and retrieving a list of stored files. The API uses `@azure/storage-blob` library for interacting with Azure Blob Storage and `multer` for handling file uploads. This implementation can be easily expanded to include more operations depending on your Azure Blob Storage needs.

## Features

- **Upload File**: Upload a single file to a specified Azure Blob Storage container.
- **List Files**: Retrieve a list of all files stored in a specific container.

## Project Structure

```
.
├── index.js                 # Main entry point of the API server
├── routes
│   └── azureStorage.js      # Route definitions for handling Azure Storage operations
├── operations
│   └── azureOperations.js   # Logic for interacting with Azure Blob Storage
├── .env                     # Environment configuration file (not included in the repository)
└── README.md                # Project documentation
```

## Getting Started

### Prerequisites

Before starting the project, make sure you have:

- **Node.js** installed on your system.
- **Azure Storage Account** with a Blob container created.
- **Azure Storage Connection String** from the Azure Portal.

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
PORT=3000
AZURE_STORAGE_CONNECTION_STRING=<Your_Azure_Storage_Connection_String>
```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tejas2292/Push-Files-To-Azure-Storage-Container.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Push-Files-To-Azure-Storage-Container
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and configure it as shown in the [Environment Variables](#environment-variables) section.

---
