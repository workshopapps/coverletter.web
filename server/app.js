require("express-async-errors");
const express = require("express");
const routes = require("./routes/authRoutes");
const helmet = require("helmet");
const passport = require('passport')
const cors = require("cors");
const xss = require("xss-clean");
const bodyParser = require("body-parser");
//config passport
require('./utils/passport')(passport)
// dotenv config
require("dotenv").config();

const app = express();


//Routers
const authRoutes = require("./routes/authRoutes");
// database
const connectDB = require("./db/connect");



// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//middleware
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(passport.initialize())
app.use(passport.session())

// routes
app.use("/api/v1/auth", authRoutes);
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
