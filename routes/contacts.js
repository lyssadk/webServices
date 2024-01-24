const router = require('express').Router();
const contactsController = require('../controllers/contacts');

router.get('/', contactsController.index);

module.exports = router;