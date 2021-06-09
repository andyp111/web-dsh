const crypto = require('crypto');

const hashPassword = (password) => {
  let hashed = crypto.createHmac('sha256', password).digest('hex');

  return hashed;
};

const hashId = (id) => {
  let hashed = crypto.createHash('md5', id).digest('base64');
  return hashed;
}

module.exports = { hashPassword, hashId };

