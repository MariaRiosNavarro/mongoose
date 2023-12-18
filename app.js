import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { router } from "./contacts/router.js";

//mongoose9

await mongoose.connect(process.env.MONGODB_URI);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", router);

app.listen(process.env.PORT, () =>
  console.log(console.log("Port is:http://localhost:" + process.env.PORT))
);
