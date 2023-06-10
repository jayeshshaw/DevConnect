const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');



//@route POST api/users
//@desc Register User
//@access Public

router.post('/',

[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Include a valid email').isEmail(),
    check('password', 'Password should be atleast 6 characters long').isLength({min: 6})

], 

(req,res) => {
    // console.log(req.body);
    
    const errors= validationResult(req);
    if(!errors.isEmpty()){ return res.status(400).json({errors: errors.array()})}


    res.send('User Route...')
});


module.exports= router;