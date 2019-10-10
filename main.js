const TelegramBot = require('node-telegram-bot-api');

const token = '922548762:AAG02_w1dipHIr5jfk9iJW3lUw_mashqTXI';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/c/, function (msg, match) {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '/gamemode survival - Включает режим выживания');
    bot.sendMessage(chatId, '/gamemode creative - Включает режим креатива');
});

bot.onText(/\/help/, function (msg, match) {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Введите комманду /c@NikroksMinecraftCommandbot');
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
});
