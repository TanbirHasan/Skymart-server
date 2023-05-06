const express = require('express');
const { addOrdersInfo, getAllOrders, getOrdersForSingleUser, getTotalPrice } = require('../controllers/orders');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');

router.route('/').get(verifyToken, getAllOrders);
router.route('/:email').get(getOrdersForSingleUser);
router.route('/').post(addOrdersInfo);
router.route("/order/totalPrice").get(getTotalPrice)

module.exports = router;
