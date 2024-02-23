const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

function isUpperCase(str) {
    return str === str.toUpperCase();
}

function fiveUpperCase(str) {
    count = 0

    for (let i = 0; i < str.length; i++){
        if(isUpperCase(str[i]))
            count++
    }

    return count >= 5
}

client.on('message', (message) => {
    if(message.author == "554784846984@c.us" && message.from == "120363227085845290@g.us"){
        if(isUpperCase(message.body) || fiveUpperCase(message.body))
        message.delete(true)
    }
});

client.initialize();
