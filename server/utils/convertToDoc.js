const fs = require('fs');
const path = require('path');
const { randomString } = require('./randomString');

const convertToDoc = function (input, format, filename = null) {
    if (filename == null) {
        filename = `cover-letter-${randomString()}`
    }
    let filePath = path.join("converted_docs")
    switch (format) {
        case "pdf":
            filePath = filePath + `/${filename}.pdf`
            fs.writeFile(filePath, input, (err) => { if (err) console.error(err) });
            break;
        case "doc":
            filePath = filePath + `/${filename}.doc`
            fs.writeFile(filePath, input, (err) => { if (err) console.error(err) });
            break;
        case "txt":
            filePath = filePath + `/${filename}.txt`
            fs.writeFile(filePath, input, (err) => { if (err) console.error(err) });
            break;
        default:
            filePath = filePath + `/${filename}.doc`
            fs.writeFile(filePath, input, (err) => { if (err) console.error(err) });
    }
    return filePath;
}

module.exports = { convertToDoc }