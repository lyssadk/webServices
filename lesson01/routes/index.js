const router = require('express').Router();
const nameController = require('../controllers/names')

router.get('/', (req,res)=>{
    res.send(nameController.getName())
});

router.get('/sue', (req,res)=>{
    res.send(nameController.getSusan());
});


module.exports = router;