const {convertToDoc} = require("../utils/convertToDoc");

const downloadCoverLetter = async function(req,res){
    const data = req.body;
    const pathToFile = convertToDoc(data.cover_letter,data.format);
    let full_route = req.get('host') + req.originalUrl
    let url = `http://${full_route}?file=${pathToFile}`
    return res.status(201).json({redirect:url});
}

const download = async function(req,res){
    const pathToFile = req.query.file
    res.download(pathToFile);
}

module.exports = {downloadCoverLetter, download}