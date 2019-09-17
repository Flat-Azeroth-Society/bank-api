import express from "express";
import { PORT } from "./constants";
import itemsRouter from "./api-v1/item";

// Instantiate the app
const app = express();

// Middleware
app.use(express.json());

// Set up routing
app.use("/api/v1/items", itemsRouter);

// Start the app
app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
