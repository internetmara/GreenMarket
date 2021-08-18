const express = require("express");
const router = express.Router();
const Service = require('../../models/Service')
const User = require('../../models/User')
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateServiceInput = require('../../validation/services')

router.post('/create',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateServiceInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        console.log(req.user)
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