const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber');
const {
    getSubscriber,
    getAllSubscriber,
    getOneSubscriber,
    createOneSubscriber,
    updateOneSubscriber,
    deleteOneSubscriber
} = require('../controller/subscribersControl');

router.use('/:id', getSubscriber);

router.route('/').get(getAllSubscriber)
    .post(createOneSubscriber);

router.route('/:id').get(getOneSubscriber)
    .patch(updateOneSubscriber) //we using patch method for updating just one attribut in the collection in not all the attribut (put) in our db 
    .delete(deleteOneSubscriber);


module.exports = router