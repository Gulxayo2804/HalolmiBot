  
const express = require('express')
const router = express.Router()
const ActionControllers = require('../controllers/actionController')
const multer = require('multer');
const md5 = require('md5');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, './public/uploads/action');
    },
    filename: function (req,file,cb) {
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`);
    }
});
const upload = multer({storage: storage});

router.post('/add', upload.single('image'), ActionControllers.createOne)
router.get('/all', ActionControllers.getAll)
router.get('/:id', ActionControllers.getOne)
router.get('/getName/:name', ActionControllers.getName)
router.delete('/:id',  ActionControllers.deleteOne)

module.exports = router;