const express = require("express");
const router = express.Router();
const Service = require('../../models/Service')
const User = require('../../models/User')
const jwt = require('jsonwebtoken');
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
            name: req.body.name,
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
                ).then(creation => res.json(creation)
            )
        );
    }
);

router.get('/:id', (req, res) => {
    Service.findById(req.params.id)
        .then(service => res.json(service))
        .catch(err =>
            res.status(404).json({ noservicefound: 'Could not find service' }))
})

module.exports = router;