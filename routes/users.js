const express = require('express');
const {
	addUser,
	getAllUsers,
	getAdminUsers,
	deleteUser,
	getAllUsersExceptAdmin,
	handleDeactivateUsers,
	handleActiveUsers,
} = require('../controllers/users');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();

router.route('/').get(verifyToken,getAllUsers);
router.route('/non-admin').get(getAllUsersExceptAdmin);
router.route('/:email').put(addUser);
router.route('/:id').delete(deleteUser);
router.get('/admin/:email', getAdminUsers);
// router.route('/admin/:email').get(getAdminUsers);
router.route('/user/activate/:id').put(handleActiveUsers);
router.route('/user/deactivate/:id').put(handleDeactivateUsers);

module.exports = router;
