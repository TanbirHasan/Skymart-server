const express = require('express');
const {
	addOrderHistory,
	getProductHistory,
	clearAllHistory,
	deleteSingleHistory,
} = require('../controllers/productHistory');
const router = express.Router();

router.route('/:productId').get(getProductHistory);
router.delete('/:productId', clearAllHistory);
router.delete('/singleHistory/:historyId', deleteSingleHistory);
router.route('/').post(addOrderHistory);



module.exports = router;
