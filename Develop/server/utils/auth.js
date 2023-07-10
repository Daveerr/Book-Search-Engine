const jwt = require("jsonwebtoken");

// set token secret and expiration date
const secret = "mysecretsshhhhh";
const expiration = "2h";

module.exports = {
  // function for our authenticated routes
  authMiddleware: function ({ req }) {
    // allows token to be sent via  req.query or headers
    let token = req.header.authorization || "";

    if (token) {
      // "Bearer <tokenvalue>"
      token = token.split(" ")[1];
    }

    if (!token) {
      throw new Error("Authentication token is missing!");
    }

    try {
      const { data } = jwt.verify(token, secret);
      req.user = data;
    } catch (error) {
      console.log("Invalid token:", error);
      throw new Error("Invalid token!");
    }
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
