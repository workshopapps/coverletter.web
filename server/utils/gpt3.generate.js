require('dotenv').config();
const {
    Configuration,
    OpenAIApi
} = require("openai");
const {
    getpdfTotext
} = require("./pdf.to.string")


const generator = async (file, company_name, role, recipient_name, recipient_department) => {
    const resume = await getpdfTotext(file);

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const gpt3Prompt = `Use this resume ${resume}, to generate a cover letter for the role of ${role} at ${company_name}. Address it to ${recipient_name} in the ${recipient_department}of the organization `
    // create the prompt with the function parameters
    const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: gpt3Prompt,
        temperature: 0.5,
        max_tokens: 2040,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    const coverLetter = response.data.choices[0].text
    return coverLetter;
}
module.exports = {
    generator
}