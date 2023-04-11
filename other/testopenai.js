// import { Configuration, OpenAIApi } from "openai";
// const configuration = new Configuration({
//     organization: "org-jI3zOvolb9F4YmhyLzLGJhZZ",
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

// curl 'https://api.openai.com/v1/completions'\ -
//     H "Content-Type: application/json"\ -
//     H "Authorization: Bearer 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"\ -
//     d '{"model": "text-davinci-003", "prompt": "Say this is a test", "temperature": 0, "max_tokens": 7}'

const axios = require("axios");
console.log(axios);