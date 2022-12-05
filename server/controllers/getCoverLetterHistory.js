const CoverLetter = require("../models/coverletter");
const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const GetCoverLetters = async (req, res) => {
    
    const user_id = req.params
    const userId = mongoose.Types.ObjectId.isValid(user_id)
    const coverLetters = await CoverLetter.findById({ user_id : userId})

    if(coverLetters) 
    {
        return res.status(StatusCodes.OK).json({ coverLetters });
      
    } else {
        throw new NotFoundError(
            res.json({ message: "Cover letter not found for this user" })
        );
    }
}
module.exports = {GetCoverLetters}