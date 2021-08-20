const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error); //assigns to the next middleware function to execute
    }
  };
};

module.exports = asyncWrapper;
