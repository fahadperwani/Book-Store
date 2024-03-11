import express from "express";
import genre from "./routes/genre.js";
import payment from "./payment/payment.cjs";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config.js";

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to the database........."))
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.use(express.json());
app.use(cors());

app.use("/genre", genre);
app.use("/stripe/payment", payment);

app.listen(5000, console.log("listening to port 5000"));
