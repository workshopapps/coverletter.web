const fs = require("fs")

fs.readFile('cover_letter_templates/Template_1.docx',(err,data)=>{
    if (err){console.log(err)}
    else{
        let result = data.replace(/{{NAME}}/g,"Delight Fela-Steve")
        console.log(result)
        // fs.writeFile('converted_docs/test.docx',result,{encoding:"utf-8"},(err)=>{if(err)console.log(err)})
    }
})