const router = require('express').Router();
const teamController = require('../controllers/team');

router.get('/', (req,res)=>{
    res.json(teamController.getData())
});
