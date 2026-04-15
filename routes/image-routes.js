const express = require('express');
const router = express.Router()
const authMiddleware = require('../middleware/auth-middleware');
const adminMiddleware = require('../middleware/admin-middleware');
const uploadMiddleware = require('../middleware/upload-middleware')
const {uploadImageController,fetchImagesController,deleteImageController} = require('../controller/image-controller')
// upload the image
router.post('/upload',authMiddleware,
    adminMiddleware, 
    uploadMiddleware.single('image'), uploadImageController)
// to get all the images 

router.get('/get',authMiddleware,fetchImagesController)
// 69c3ed311acfa79041eb5b02
// delete image route 
router.delete('/:id', authMiddleware,adminMiddleware, deleteImageController)
module.exports = router