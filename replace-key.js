const fs = require('fs');
const path = 'Chatbot.js';

fs.readFile(path, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    const result = data.replace('process.env.OPENAI_API_KEY', `"${process.env.OPENAI_API_KEY}"`);

    fs.writeFile(path, result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});
