const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const cors = require("cors");

require("./database/db");

// const { checkUser } = require("./middleware/auth.middleware");

const app = express();

const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:4000"],
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));

app.disable("x-powered-by");

const serverRoutes = require("./routes/server");
const soldeRoutes = require("./routes/solde.router");

// app.get("*", checkUser);

const userRoutes = require("./routes/user.routes");
const checkEmailRouter = require("./routes/checkEmail");
const codeRouter = require("./routes/code");
const ExchangeRoutes = require("./routes/exhange");
const orderRoutes = require("./routes/order.router");
const euroRoutes = require("./routes/rateEuro.router");
const dollarRoutes = require("./routes/rateDollar.router");
const usdtRoutes = require("./routes/rateUsdt.router");
const cnyRoutes = require("./routes/rateCny.router");
const buyRoutes = require("./routes/buy.routes");
const soldeOrderRoutes = require("./routes/solde.order.route");
const connectRoutes = require("./routes/connect.route");

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());

app.use("/goadmin/users", userRoutes);
app.use("/goadmin/server", serverRoutes);
app.use("/goadmin/checkemail", checkEmailRouter);
app.use("/goadmin/code", codeRouter);
app.use("/goadmin/exchange", ExchangeRoutes);
app.use("/goadmin/solde", soldeRoutes);
app.use("/goadmin/order", orderRoutes);
app.use("/goadmin/buy", buyRoutes);
app.use("/goadmin/euro", euroRoutes);
app.use("/goadmin/dollar", dollarRoutes);
app.use("/goadmin/usdt", usdtRoutes);
app.use("/goadmin/cny", cnyRoutes);
app.use("/goadmin/soldeorder", soldeOrderRoutes);
app.use("/goadmin/connect", connectRoutes);

app.listen(process.env.PORT, () =>
  console.log(`server running on port ${process.env.PORT}`)
);
