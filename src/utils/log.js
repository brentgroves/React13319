function log (...args) {
  if (process.env.NODE_ENV === "developmen") {
    console.log(...args);
  }
}

module.exports = {
    log
}
