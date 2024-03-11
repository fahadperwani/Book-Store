import express from "express";
import genre from "./routes/genre.js";
import payment from "./payment/payment.cjs";
import mongoose from "mongoose";
import cors from "cors";

mongoose
  .connect("mongodb://127.0.0.1:27017/ExpoProject")
  .then(() => console.log("Connected to the database........."));
const app = express();

app.use(express.json());
app.use(cors());
app.use("/genre", genre);
app.use("/stripe/payment", payment);

app.listen(5000, console.log("listening to port 5000"));
