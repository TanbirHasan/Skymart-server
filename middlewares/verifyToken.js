const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
	const authHeader = req.headers.authorization;
	// console.log(authHeader);
	if (!authHeader) {
		res.status(401).send({ message: 'Invalid authorization. Login in order to get a token ' });
	}

	const token = authHeader.split(' ')[1];
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
		if (err) {
			res.status(403).send({ message: 'Forbidden Access ' });
		}
		req.decoded = decoded;
		next();
	});
};

module.exports = verifyToken;
