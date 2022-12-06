const CoverLetter = require("../models/coverletter");
const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const GetCoverLetters = async (req, res) => {
    try {
        const id = req.params.id
        const coverLetters = await CoverLetter.findById(id.trim)
        if(!coverLetters) 
        {
            throw new NotFoundError(
                res.json({ message: "Cover letter not found for this user" })
            );
          
        } else {
            return res.status(StatusCodes.OK).json({ coverLetters});
        } 
    } catch (error) 
    {
       return res.status(500).json({msg : error.message})
    }
 
}

module.exports = {GetCoverLetters}