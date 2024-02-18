const express = require('express');
const diveController = require('./../controllers/diveController')


const router = express.Router();


router
  .route('/')
  .get(diveController.getAllDives)
  .post(diveController.createDive);


module.exports = router;
