const globalErrorHandler = (err, _, res, __) => {
    const { statusCode, message = "Something went wrong, please try again later" } = err;
    res.status(statusCode).json({ message });
};

module.exports={globalErrorHandler,}