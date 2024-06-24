
import MistralClient from '@mistralai/mistralai';
import dotenv from 'dotenv';


dotenv.config();

const apikey=process.env.MISTRAL_API_KEY;

const clienet = new MistralClient(apikey);

const chatResponse = await clienet.chat({
    model:'mistral-tiny',
    messages:[
        {role:'system',content:"you're a friendly chatbot and answer questions about the weather. Ask me anything!"},
        {role:'user',content:'What is the weather in India?'}
    ],
    temperature:0.6,
    // response_format:{
    //     type:'json_object',
    // }
    responseFormat:{
        type:'json_object',
    
    }
});

console.log(chatResponse.choices[0].message.content);