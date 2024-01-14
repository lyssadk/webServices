const router = require('express').Router();
const nameController = require('../controllers/names')

router.get('/', (req,res)=>{
    res.send(nameController.getBrother())
});

router.get('/mom', (req,res)=>{
    res.send(nameController.getMom());
});


module.exports = router;