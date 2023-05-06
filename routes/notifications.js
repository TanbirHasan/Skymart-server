const express = require('express');
const { addNotification, getAllNotifications, deleteSingleNotification, clearAllNotifications } = require('../controllers/notifications');
const router = express.Router();

router.route('/').get(getAllNotifications);
router.route('/').post(addNotification);
router.route('/:id').delete(deleteSingleNotification);
router.route('/delete/notifications').delete(clearAllNotifications);

module.exports = router;
