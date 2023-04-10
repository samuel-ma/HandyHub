import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./Routes/user.route";
import authRoute from "./Routes/auth.route";
import gigRoute from "./Routes/gig.route";
import conversationRoute from "./Routes/conversation.route";
import messageRoute from "./Routes/message.route";
import orderRoute from "./Routes/order.route";
import reviewRoute from "./Routes/review.route";
import cookieParser from "cookie-parser";

const app = express();
mongoose.set("strictQuery", true);
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connection to MongoDB successful");
  } catch (error) {
    console.error(error);
  }
};

// middleware
app.use(express.json());
app.use(cookieParser());
app.use((req, res, err, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.status || "Something went wrong"

    return res.status(errorStatus).send(errorMessage);
})

app.use("/server/auth", authRoute);
app.use("/server/users", userRoute);
app.use("/server/gigs", gigRoute);
app.use("/server/conversations", conversationRoute);
app.use("/server/orders", orderRoute);
app.use("/server/messages", messageRoute);
app.use("/server/reviews", reviewRoute);

app.listen(8800, () => {
  connect();
  console.log("Backend server is running!");
});

