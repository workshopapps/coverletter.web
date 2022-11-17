const crypto = require('crypto');
const User = require('../models/User');
const { BadRequestError } = require('../errors');


// @michstery Reset Password Endpoint
exports.resetPassword = async (req, res, next) => {
        // 1) Get  User based on token
        const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

        const user = await User.findOne({ passwordResetToken: hashedToken, passwordResetExpires: { $gt:Date.now() } });
        // 2) If token has not expired and there is user, set the new User
        if (!user) {
            return next(new AppError('Token is invalid or has Expired'), 400);
        }
};