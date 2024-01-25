const router = require('express').Router();
const contactsController = require('../controllers/contacts');

router.get('/contacts', (req, res) => {
  res.send(contactsController.getContacts());
});

module.exports = router;
