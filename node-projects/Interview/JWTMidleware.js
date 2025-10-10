const JWTMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization']; // get the Authorization header
    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const token = authHeader.split(' ')[1]; // extract the token
    console.log('Token:', token);

    if (token === 'dhruvil') {
        next();
    } else {
        // You can now verify the token (JWT or custom)
        res.status(404).json({ message: 'unauthorised' });
    }

}

module.exports = { JWTMiddleware }