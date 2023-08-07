const express = require('express')
const router = express.Router();
const productsCtrl = require("../../controllers/products");
const multer = require('multer');
const upload = multer();


/*---------- Public Routes ----------*/
router.get('/', productsCtrl.index);
router.get('/:id', productsCtrl.show);

/*---------- Admin Routes ----------*/
router.post('/', upload.single('image'), productsCtrl.requireAdmin, productsCtrl.create);
router.put('/:id', productsCtrl.requireAdmin, productsCtrl.update);
router.delete('/:id', productsCtrl.requireAdmin, productsCtrl.remove);

module.exports = router;