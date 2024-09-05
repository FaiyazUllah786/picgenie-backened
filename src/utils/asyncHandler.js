const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

/*
Higer Order function ie function inside function execution
it help to standardize my async funtion to excute inside try catch function
const asyncHandler = (fn) => async (req, res) => {
  try {
    await fn();
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      message: error.message,
    });
  }
};

*/
