const asyncErr = fn => {
    //Returns a function that returns the intended function which accesses the function parameters by virtue of closure
    return (req, res, next) => {
      fn(req, res, next).catch(next);
    };
  };

module.exports = asyncErr