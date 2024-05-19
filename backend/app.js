const express = require("express");
const app = express();
const cookieParser=require("cookie-parser");
const bodyParser=require("body-parser");
const fileUpload=require("express-fileupload");
const dotenv=require("dotenv");
const cors=require("cors");


const errorMiddleware=require("./middleware/error")


  //config
  dotenv.config({path:"backend/config/config.env"});

app.use(express.json())
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use(fileUpload());

const user = require("./routes/userRoute");
const product=require("./routes/productRoute");
const order=require("./routes/orderRoute");
const payment=require("./routes/paymentRoutes");

app.use("/api/v1" , product);
app.use("/api/v1" , user);
app.use("/api/v1" , order);
app.use("/api/v1" , payment);

app.get("/api/v1/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

app.use(errorMiddleware);

module.exports=app;