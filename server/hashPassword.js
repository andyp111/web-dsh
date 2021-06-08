const crypto = require('crypto');

const hashPassword = (password) => {
  let hashed = crypto.createHmac('sha256', password).digest('hex');

  return hashed;
};

module.exports = hashPassword;
