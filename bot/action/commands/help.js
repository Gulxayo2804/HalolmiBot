
const {Composer, Markup} =require('telegraf')
const {bot} =require('../../core/bot')

const composer= new Composer

composer.help(ctx =>{
    ctx.replyWithHTML(
        `Ishlatish mumkin bo'lgan komandallar ro'yxati: \n`+
       `/start- <code>botni ishga tushirish</code>\n`+
       `/help - <code> shu smsni ko'rsatish</code>\n`
    ).then()
})

  
bot.use(composer.middleware())