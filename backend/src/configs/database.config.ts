import mongoose, { connect, ConnectOptions } from "mongoose";

mongoose.set("strictQuery", false);
export const dbConnect = () => {
  connect(process.env.MONGO_URI!, {
    dbName: "foodapp",
    // userNewUrlParser: true,
    // userUnifiedTopology: true,
  } as ConnectOptions).then(
    () => console.log("connect successfully"),
    (error) => console.log(error)
  );
};

// const mongoose = require("mongoose");
// // Connecting to database
// mongoose.connect(
//   process.env.MONGO_URI,
//   {
//     dbName: "foodapp",
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err: any) =>
//     err ? console.log(err) : console.log("Connected to yourDB-name database")
// );
// const express = require("express");
// const app = express();
// const cors = require("cors");
