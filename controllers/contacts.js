// contactsController.js
const Contact = require('../routes'); // assuming you have a Contact model

module.exports.index = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
