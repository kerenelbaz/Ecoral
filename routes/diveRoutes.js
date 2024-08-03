const express = require('express');
const diveController = require('./../controllers/diveController')


const router = express.Router();


router
  .route('/')
  .get(diveController.getAllDives)
  .post(diveController.createDive);

router
  .route('/:id')
  .delete(diveController.deleteDive)
  .patch(diveController.updateDive);

router
  .route('/delete-image')
  .get(diveController.printSomething)
  .post(diveController.deleteImage);

module.exports = router;
