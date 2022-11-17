const dotenv = require("dotenv").config({path:'./config.env'});
require("express-async-errors");
const express = require("express");
const routes = require("./routes/index");
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const app = express();
const connectDB = require('./db/connect')




//mongo uri
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD) 


// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

// user routes
app.use("/api/v1/users", routes);

app.get("/", (req, res) => {
  res.send("templates api");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //connect DB
    await connectDB(DB); 
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();





  
