const asyncWrapper = (fn) => {
    return async (req, res, next) => {
      try {
        await fn(req, res, next);
      } catch (error) {
        if (error.status) {
          return res.status(error.status).json({ message: error.message });
        }
        next(error);
      }
    };
  };
  
export default asyncWrapper;
  