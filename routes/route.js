const express = require('express');
const router = express.Router();///test-you
//importing a custom module
//const xyz = require('../Logger/logger')
//importing external package
//const underscore = require('underscore')
const abc = require('../logger/logger.2.js')
const pqr=require('../util/helper.js')
const valid=require('../validator/formater')
const validatom=require('../lodash/lodash.js')

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
   // console.log("Calling my function ",xyz.myFunction())
  //  console.log("The value of the constant is ",xyz.myUrl)
    //Trying to use an external package called underscore
  //  let myArray = ['Akash', 'Pritesh', 'Sabiha']
 //   let result = underscore.first(myArray)

  //  console.log("The result of underscores examples api is : ", result)
    console.log(abc.welcome())
    console.log(pqr.getBatchInfo())
    console.log(valid.anjali())
    console.log(validatom.lodash())
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

