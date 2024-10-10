const auth = (req, res, next) => {
  const API_KEY = req.headers["x-api-key"];

  if (!API_KEY || API_KEY !== process.env.API_KEY)
    return res.status(401).json({ msg: "unauthorize" });

  next();
};

module.exports = auth;
