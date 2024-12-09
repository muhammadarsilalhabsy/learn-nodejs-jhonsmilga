const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "otong") {
    req.user = { name: "otong", id: 1 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
