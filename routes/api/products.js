const express = require('express')
const router = express.Router();
const productsCtrl = require("../../controllers/products");
const multer = require('multer');
const upload = multer();


/*---------- Public Routes ----------*/
router.get("/",  productsCtrl.index);

/*---------- Admin Routes ----------*/
router.post('/', upload.single('photo'), productsCtrl.requireAdmin, productsCtrl.create);
router.get('/:id', productsCtrl.requireAdmin, productsCtrl.show);
router.put('/:id', productsCtrl.requireAdmin, productsCtrl.update);
router.delete('/:id', productsCtrl.requireAdmin, productsCtrl.remove);

module.exports = router;