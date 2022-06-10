const crypto = require("crypto");

const genCode = (len) => {
  return crypto.randomBytes(len).toString("hex");
};

export default genCode;
