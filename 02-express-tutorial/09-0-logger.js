const logger = (req, res, next) => {
  const { method, url } = req;
  const currentYear = new Date().getFullYear();

  console.log(method, url, currentYear);
  next(); // lanjutkan ke req, res selanjutnya
};

module.exports = logger;
