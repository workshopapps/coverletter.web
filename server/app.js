require("express-async-errors");
const express = require("express");
const routes = require("./routes/authRoutes");
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const bodyParser = require("body-parser");
const app = express();
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo');
require("dotenv").config();
//Routers
const authRoutes = require("./routes/authRoutes");
// database
const connectDB = require("./db/connect");

//Passport config
require('./utils/passport')(passport)
// Sessions
app.use(
  session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl: process.env.MONGO_URI}),
  })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(xss());

// routes
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
	res.send("templates api");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
	try {
		//connect DB
		await connectDB(process.env.MONGO_URI).then(() =>
			console.log("DB connection successful")
		);
		app.listen(port, () =>
			console.log(`Server is listening on port ${port}...`)
		);
	} catch (error) {
		console.log(error);
	}
};

start();

module.exports = app;
