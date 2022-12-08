const customErr = require('../errors/customErr');
const { devErr, prodErr} = require('../errors/envErrors');

const castErrDB = err => {
    //Handling invalid mongoDB id issues
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new customErr(message, 400);
};

const duplicateErrDB = err => {
    //Handle DB error in the case of a duplicate field that should not exist
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
    //console.log(value);

  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new customErr(message, 400);
};

const validationErrDB = err => {
    //Handle DB validation errors
  const errors = Object.values(err.errors).map(el => el.message);

  const message = `Invalid input data. ${errors.join('. ')}`;
  return new customErr(message, 400);
};

const JWTError = () =>
  new customErr('Invalid token. Please log in again!', 401);

const JWTExpiredError = () =>
  new customErr('Your token has expired! Please log in again.', 401);


module.exports = (err, req, res, next) => {
  // console.log(err.stack);

  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.APP_ENV === 'dev') {
    devErr(err, req, res);
  } else if (process.env.APP_ENV === 'prod') {
    let error = { ...err };
    error.message = err.message;

    if (error.name === 'CastError') error = castErrDB(error);
    if (error.code === 11000) error = duplicateErrDB(error);
    if (error.name === 'ValidationError') error = validationErrDB(error);
    if (error.name === 'JsonWebTokenError') error = JWTError();
    if (error.name === 'TokenExpiredError') error = JWTExpiredError();

    prodErr(error, req, res);
  }
};
