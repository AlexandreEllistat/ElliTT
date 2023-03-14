var express = require("express");

var app = express();

const port = 3000;
const errorLogger = (err, req, res, next) => {
  console.log(`Error: ${err.message}`);
  next(err);
};

console.log("Setting up API routes...");
app.use("/api", require("./api"));

const errorResponder = (err, req, res, next) => {
  const status = err.status || 400;
  const payload = {
    message: err.message,
  };
  if (status === 500) {
    payload.stack = err.stack;
  }
  res.status(status).send(payload);
};
app.use(errorLogger);
app.use(errorResponder);

app.listen(port, () => {
  console.log("Server running on port " + port);
});
