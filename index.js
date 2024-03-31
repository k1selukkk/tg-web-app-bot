const TelegramBot = require('node-telegram-bot-api');

//Токен сделаем потом с помощью переменной окружения
const token = '6839956141:AAEHaAlbHk-m5VFPFkrJDXflekn5AHR6inM';
//Ссылка на наше приложение
const webAppUrl = 'https://ya.ru/'

//Действия бота в самой телеге
const bot = new TelegramBot(token, {polling: true});


bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

    if(text === '/start') {
        await bot.sendMessage(chatId, 'Килька', {
            reply_markup: {
                //Нижняя кнопка
                keyboard: [
                    [{text: 'Что-то придумаем мб уберем'}]
                ]
            }
        
        })  

    }
  
});