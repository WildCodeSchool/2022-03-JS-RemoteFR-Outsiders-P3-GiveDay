const crypto = require("crypto");

const genCode = (prenom, len) => {
  return `${prenom}-${crypto.randomBytes(len).toString("hex")}`;
};

export default genCode;
