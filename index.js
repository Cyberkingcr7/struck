const qrcode = require('qrcode-terminal');
const thumb = './assets/thumb.jpg'


const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

client.on('message', message => {
	console.log(message.body);
});

client.on('message', message => {
if (msg.body === '!buttons') {
        let button = new Buttons('Button MessageMediafromFilePath(thumb)',[{body:'bt1'},{body:'bt2'},{body:'bt3'}],'title','footer');
        client.sendMessage(msg.from, button); }
});
