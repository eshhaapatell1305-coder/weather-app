const logger = (req, res, next) => {
    console.log("----------------------------------");
    console.log(`Request Method : ${req.method}`);
    console.log(`Request URL    : ${req.url}`);
    console.log(`Time           : ${new Date().toLocaleString()}`);
    console.log("----------------------------------");

    next(); // Pass control to the next middleware
};

module.exports = logger;