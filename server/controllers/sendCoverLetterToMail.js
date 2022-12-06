const sendPdfToEmail = require("../utils/sendPdfToEmail");
const fs = require('fs')
const sendCoverLetterToMail = async function(req,res){
    const email = req.body.email
    const file = req.files.file
    try {
        const result = await sendPdfToEmail(email,"Cover Letter",file)
        console.log(result)
        if(result.status==500){
            return res.status(500).json(result.message)
        }else{
            return res.status(200).json(result.message)
        }
    } catch (error) {
        console.log(error)
        
    }
    return res.status(200).json("Under Test")
}

module.exports = {sendCoverLetterToMail}