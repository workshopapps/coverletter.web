const {convertToDoc} = require("../utils/convertToDoc");

//This is the content of the body sent to the download endpoint
// {
//     cover_letter,
//     company_name,
//     company_address,
//     city,
//     country,
//     years_of_exp,
//     date,
//     recipient_name,
//     recipient_department,
//     recipient_email,
//     recipient_phone_no,
//     format
// }

const downloadCoverLetter = async function(req,res){
    const data = req.body;
    const pathToFile = convertToDoc(data.cover_letter,data.format)
    return res.download(pathToFile);
}


module.exports = {downloadCoverLetter}