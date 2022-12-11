const { StatusCodes } = require("http-status-codes");

const devErr = (err, req, res) => {
    if (req.originalUrl.startsWith('/api')) {
      return res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
      });
    }
};


const prodErr = (err, req, res) => {
    if (req.originalUrl.startsWith('/api')) {
      //Predicted error. Send descriptive message to client
      if (err.isPredictable) {
        return res.status(err.statusCode).json({
          status: err.status,
          message: err.message
        });
      }
      //Need to think about error logging to ensure devs have a way of tracking such
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        status: 'error',
        message: 'Something went very wrong!'
      });
    }
};

module.exports = {
    devErr, prodErr
}