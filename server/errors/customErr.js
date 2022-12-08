class customErr extends Error {
    constructor(message, statusCode) {
      super(message);
  
      this.statusCode = statusCode;
      this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
      this.isPredictable = true; //Errors that arise from anticipated user actions
  
      Error.captureStackTrace(this, this.constructor);
    }
}
  
module.exports = customErr ;
  