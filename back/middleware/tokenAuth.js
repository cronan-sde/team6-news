/** FOR FUTURE HTTPONLY COOKIE THAT STORES JWT **/

//Used to check if a user is logged in by checking if they have a token
module.exports = function(req, res, next) {
  //get token from cookie
  const token = req.cookies.auth_token;
  //if no token present, no access granted
  if (!token) {
    return res.status(401).json({ message: 'Access Denied' });
  }
  //if token present try to verify token
  try {
    //if token is verified, payload will be returned
    const verified = jwt.verify(token, process.env.SECRET_JWT_KEY);
    req.user = verified;
    next();
  }
  //if not verified, invalid token
  catch(err) {
    res.status(401).json({ message: 'Invalid Token' });
  }
}