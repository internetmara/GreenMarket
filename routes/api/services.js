const express = require("express");
const router = express.Router();
const Service = require('../../models/Service')
const User = require('../../models/User')
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateServiceInput = require('../../validation/services')

router.get('/', (req, res) => {
    Service.find()
        .sort({ date: -1 })
        .then(services => res.json(services))
        .catch(err => res.status(404).json({ noservicesfound: 'No services found' }))
})


router.post('/create',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateServiceInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newService = new Service({
            category: req.body.category,
            rate: req.body.rate,
            rateIncrement: req.body.rateIncrement,
            description: req.body.description,
            address: req.body.address,
            user: req.user.id
        })
        

        newService.save()
            .then(service =>
                User.findByIdAndUpdate(
                    req.user.id,
                    { $addToSet: { services: service } },
                    { new: true },
                    function (err, success) {
                        if (err) {
                            console.log(err);
                        } else {
                            return success;
                        }
                    }
                ).then(creation => res.json(creation)));

    });


module.exports = router;