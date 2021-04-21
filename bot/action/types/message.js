const {Composer, Markup} = require('telegraf')

const Foods = require('../../../models/FoodModel');
const Action = require('../../../models/ActionsModel')
const axios = require('axios')

const {bot} =require('../../core/bot')
const url='http://localhost:5000/api/foods/all';
const composer = new Composer()

composer.on('text', async (ctx) => {
  let habar = ctx.message.text;
  let data= await axios.get(url).then(res =>{
    return res.data
  })

  ctx.replyWithPhoto({ url: `http://localhost:5000${data[0].image}`}).then()

  ctx.replyWithHTML(`<b>Mahsulot nomi: </b> ${data[0].name}\n`+
  `<b>Ma'lumot: </b>${data[0].description}\n`+
  `<b>Halolmi: </b> ${data[0].halolmi}\n`
  ).then()



  const a=data[0].name;


  // console.log( habar)
  if( a == "salom")
  {console.log(data[0].name)}
  else{console.log('yuq')}
   
})
 
bot.use(composer.middleware())