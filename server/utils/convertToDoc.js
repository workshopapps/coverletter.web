const fs = require('fs');
const path = require('path');
const { generateOTP } = require('./generateOTP');
const textToPdf = require('./textToPdf')
const getStream = require("get-stream");

const convertToDoc = function (input, format, filename = null) {
    if (filename == null) {
        filename = `cover-letter-${generateOTP(5)}`
    }
    let filePath = path.join("converted_docs")
    switch (format) {
        case "pdf":
            filePath = filePath + `/${filename}.pdf`
            textToPdf(input).then((input)=>{
                fs.writeFile(filePath, input,{encoding:"base64"},(err) => { if (err) console.error(err) });
            })
            break;
        case "doc":
            filePath = filePath + `/${filename}.docx`
            fs.writeFile(filePath, input, {encoding:"utf-8"}, (err) => { if (err) console.error(err) });
            break;
        case "txt":
            filePath = filePath + `/${filename}.txt`
            fs.writeFile(filePath, input, {encoding:"utf-8"},(err) => { if (err) console.error(err) });
            break;
        default:
            filePath = filePath + `/${filename}.docx`
            fs.writeFile(filePath, input, (err) => { if (err) console.error(err) });
    }
    return filePath;
}

module.exports = { convertToDoc }
