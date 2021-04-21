const Foods = require('../models/FoodModel');
const md5 = require('md5');
const path = require('path');
const fs = require('fs');
const multer = require('multer')

exports.createOne = async (req, res) => {
 
  const result = new Foods({
    name: req.body.name,
    description: req.body.description,
    image: `/public/uploads/foods/${req.file.filename}`,
    halolmi:req.body.halolmi
  })
  result.save()
    .then(() => {
      res.status(201).json({
        success: true,
        data: result
      })
    })
    .catch((error) => {
      res.status(400).json({
        success: false,
        error: error
      })
    })
}





exports.getAll = async (req, res) => {
  const result = await Foods.find()
    .sort({ date: -1 })
  // res.status(200).json({ success: true, data: result })
  res.send(result)
}

// exports.getName = async (req, res) => {
//   const result = await Foods.find()
//   for(let i=0; i<result.length; i++){
//     if(result[i].name==="aroq"){
//       res.status(200).json({ success: true, data: result[i] })
//     }else{
//       res.send("Bunday mahsulot yuq. "+result[i].name)
//     }
//   }

// }

exports.getOne = async (req, res) => {
  const result = await Foods.findById({ _id: req.params.id })
  res.status(200).json({ success: true, data: result })
}

exports.updateOne = async (req, res) => {
  const result = await Foods.findByIdAndUpdate({ _id: req.params.id })
  result.name = req.body.name
  result.description = req.body.description
  result.halolmi = req.body.halolmi

  result.save()
    .then(() => {
      res.status(200).json({ success: true, data: result })
    })
    .catch((error) => {
      res.status(400).json({ success: false, error: error })
    })
}

exports.deleteOne = async (req, res) => {
  await Foods.findById({ _id: req.params.id })
    .exec(async (error, data) => {
      if (error) {
        throw error
      } else {
        let filePath = path.join(path.dirname(__dirname) + `${data.image}`)
        console.log(filePath)
        fs.unlink(filePath, async (error) => {
          if (error) {
            throw error
          }
        })
        await Foods.findByIdAndDelete({ _id: req.params.id })
        res.status(200).json({ success: true, data: [] })
      }
    })
}



