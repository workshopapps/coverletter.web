const User = require('../models/User')


exports.forgotPassword = async (req, res, next) => {
    const user = await User.findOne({email: req.body.email})
    if(!user){
        return next(new AppError('There is no user with this email address.', 404 ));
    }
}
exports.resetPassword = (req, res, next) => {

}