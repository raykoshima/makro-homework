require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();
const errorHandler = require("./middlewares/error");
const notFoundHandler = require("./middlewares/notfound");
const createError = require("./utils/createError")

const authRoute = require("./routers/auth-route")
const productRoute = require("./routers/product-route")

app.use(cors())
app.use(express.json());


app.use("/auth",authRoute)
app.use("/product", productRoute)


//footer
app.use(errorHandler)
app.use("*",notFoundHandler)
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });