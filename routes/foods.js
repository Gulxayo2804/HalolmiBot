  
const express = require('express')
const router = express.Router()
const FoodControllers = require('../controllers/foodController')
const multer = require('multer');
const md5 = require('md5');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, './public/uploads/foods');
    },
    filename: function (req,file,cb) {
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`);
    }
});
const upload = multer({storage: storage});

router.post('/add', upload.single('image'), FoodControllers.createOne)
router.get('/all', FoodControllers.getAll)
router.get('/getName/:name', FoodControllers.getName)
router.get('/:id', FoodControllers.getOne)
router.delete('/:id',  FoodControllers.deleteOne)

module.exports = router;