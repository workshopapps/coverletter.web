const {convertToDoc} = require("../utils/convertToDoc");
const fs = require("fs");

const downloadCoverLetter = async function(req,res){
    try {
        const data = req.body.data;
        const content = `${data.company_name}\n${data.company_address}\n
        ${data.city},${data.country}\n` + data.cover_letter
    
        const pathToFile = convertToDoc(content,data.format);
        let full_route = req.get('host') + req.originalUrl
        let url = `http://${full_route}?file=${pathToFile}`
        return res.status(201).json({status:"success",redirect:url});
    } catch (error) {
        return res.status(500).json({"message":"Oops! The problem is from us"})
    }

}

const download = async function(req,res){
    try {
        const pathToFile = req.query.file
        return res.download(pathToFile,(err)=>{
            if (err){
                return res.status(500).json({status:"failure"})
            }else{
                fs.unlink(pathToFile,(err)=>{if(err){console.log(err)}});
            }
        });
    } catch (error) {
        return res.status(500).json({"message":"Oops! The problem is from us"})
    }

    
}

module.exports = {downloadCoverLetter, download}