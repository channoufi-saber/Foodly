const userController = require('../controllers/userController');
const { verifyAndAuthorization } = require('../middleware/verifyToken');
const router=require('express').Router();


router.get('/',verifyAndAuthorization, userController.getUser)
router.delete('/',verifyAndAuthorization, userController.deleteUser)
router.put('/',verifyAndAuthorization, userController.updateUser)

module.exports=router;