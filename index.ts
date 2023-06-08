import readline from 'readline';
import { Configuration, OpenAIApi } from 'openai';

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const openai = new OpenAIApi(new Configuration({
    apiKey: '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'
}));

read.prompt();
read.on('line', async input => {
    const res = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: input }]
    });
    console.log(res.data.choices[0].message?.content);
    read.prompt();
});