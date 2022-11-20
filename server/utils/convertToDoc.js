const fs = require('fs');
const { permittedCrossDomainPolicies } = require('helmet');
const path = require('path');
const { generateOTP } = require('./generateOTP');

const convertToDoc = function (input, format, filename = null) {
    if (filename == null) {
        filename = `cover-letter-${generateOTP(5)}`
    }
    let filePath = path.join("server/converted_docs")
    switch (format) {
        case "pdf":
            filePath = filePath + `/${filename}.pdf`
            fs.writeFile(filePath, input, (err) => { if (err) console.error(err) });
            break;
        case "doc":
            filePath = filePath + `/${filename}.docx`
            fs.writeFile(filePath, input, (err) => { if (err) console.error(err) });
            break;
        case "txt":
            filePath = filePath + `/${filename}.txt`
            fs.writeFile(filePath, input, (err) => { if (err) console.error(err) });
            break;
        default:
            filePath = filePath + `/${filename}.docx`
            fs.writeFile(filePath, input, (err) => { if (err) console.error(err) });
    }
    return filePath;
}

module.exports = { convertToDoc }