const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey:"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",
});

async function start(){
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "video call app in socket io using nodejs",
  temperature: 0,
  max_tokens: 1000,
});
console.log(response.data.choices[0].text);
}

start()

// video call app in socket io using nodejs