const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get token from header
  // For postman
  const token = req.header('authorization');
  // Regular request
  // const token = req.header('token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // regular request
    // const decoded = jwt.verify(token, config.get('jwtSecret'));
    // Postman request
    const decoded = jwt.verify(token.substring(7), config.get('jwtSecret'));


    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
