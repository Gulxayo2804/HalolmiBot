
const {Composer, Markup} =require('telegraf')
const {bot} =require('../../core/bot')

const composer= new Composer

composer.start( ctx =>{
    ctx.replyWithHTML(
      `Hurmatli <b> ${ctx.from.first_name} </b>, botimizga xush kelebsiz!`  , Markup
    .inlineKeyboard([
      Markup.button.callback('Oziq ovqat mahsulotlari va moddalar ', 'food'),
      Markup.button.callback('Qilaydigan ish va amallar', 'amal') 
    ])
    .oneTime()
    .resize()
    ).then()
})


composer.action('food', ctx =>{
  ctx.replyWithHTML(`<b>Mahsulotni nomini kiriting: </b>\n`
  ).then(()=> console.log(ctx))
})

composer.action('amal', ctx =>{
  ctx.replyWithHTML(`<b>Amalni nomini kiriting: </b>\n`
  ).then(()=> console.log(ctx))
})


bot.use(composer.middleware())