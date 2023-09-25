import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, MONGO_URL } from "./config.js";
import { Book } from "./models/Book.js";
import booksRoute from "./routes/books.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/books", booksRoute);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log(`Connected to MongoDB`);
    app.listen(PORT, () => {
      console.log(`Server port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
