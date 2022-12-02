require("express-async-errors");
const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./utils/swaggerOptions.json");
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const bodyParser = require("body-parser");
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo');
const connectDB = require("./db/connect");
require("dotenv").config();

const port = process.env.PORT || 5001;

const fileUpload = require("express-fileupload");
const app = express();

app.use(
	"/cvg-documentation",
	swaggerUI.serve,
	swaggerUI.setup(swaggerDocument)
);

//Routers
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes")
// const resetRoutes = require("./routes/resetRoutes");
const templateRoutes = require("./routes/templateRoutes");
const cvToCoverLetterRoutes = require("./routes/cvToCoverLetterRoutes");
const downloadCoverLetter = require("./routes/downloadCoverLetterRoutes");
const contactRoutes = require("./routes/contactRoutes");
const generateOtpRoutes = require("./routes/generateOtpRoutes");
const blogRoutes = require("./routes/blogRoutes");
const postRoutes = require('./routes/postRoutes')

app.use(
	"/cvg-documentation",
	swaggerUI.serve,
	swaggerUI.setup(swaggerDocument)
);

//Passport config
require('./utils/passport')(passport)
//Sessions
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
const textToPdf = require("./utils/textToPdf");

app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(
	fileUpload({
		limits: {
			fileSize: 5 * 1024 * 1024, //5MB
		},
		abortOnLimit: true,
	})
);

// routes
app.use("/api/v1", adminRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1", generateOtpRoutes);
app.use("/api/v1", templateRoutes);
app.use("/api/v1", cvToCoverLetterRoutes);
// app.use("/api/v1", resetRoutes);
app.use("/api/v1", downloadCoverLetter);
app.use("/api/v1", contactRoutes);
app.use("/api/v1", blogRoutes);
app.use("/api/v1", postRoutes);

app.get("/", (req, res) => {
	res.send("templates api");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const start = async () => {
	try {
		connectDB(process.env.MONGO_URI).then(() => {
			console.log("Connection succesful");
		});
		app.listen(port, () =>
			console.log(`Server is listening on port ${port}...`)
		);
	} catch (error) {
		console.log(error);
	}
};

start();



module.exports = app;
