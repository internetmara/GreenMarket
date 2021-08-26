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
            coordsLat: req.body.coordsLat,
            coordsLng: req.body.coordsLng,
            address: req.body.address,
            picture: req.body.picture,
            user: req.user.id
        })
        

        newService.save()
            .then(service =>
                User.findByIdAndUpdate(
                    req.user.id,
                    { $addToSet: { services: service._id } },
                    { new: true },
                    function (err, success) {
                        if (err) {
                            console.log(err);
                        } else {
                            return success;
                        }
                    }
                ).then(userUpdated =>
                    Service.findById(userUpdated.services[userUpdated.services.length - 1]._id))
                    .then(newService => res.json(newService))
            
        );
    }
);

router.get('/:id', (req, res) => {
    Service.findById(req.params.id)
        .then(service => res.json(service))
        .catch(err =>
            res.status(404).json({ noservicefound: 'Could not find service' }))
})

router.patch('/:id/update',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateServiceInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        Service.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                category: req.body.category,
                rate: req.body.rate,
                rateIncrement: req.body.rateIncrement,
                description: req.body.description,
                coordsLat: req.body.coordsLat,
                coordsLng: req.body.coordsLng,
                address: req.body.address,
                picture: req.body.picture
            },
            { new: true },
            function (err, success) {
                if (err) {
                    console.log(err);
                } else {
                    return success;
                }
            }
        ).then(updatedService => {
            User.findOneAndUpdate(
                { _id: req.user.id },
                {
                    $set: {
                        'services.$[el].name': updatedService.name,
                        'services.$[el].category': updatedService.category,
                        'services.$[el].rate': updatedService.rate,
                        'services.$[el].rateIncrement': updatedService.rateIncrement,
                        'services.$[el].description': updatedService.description,
                        'products.$[el].coordsLat': updatedProduct.coordsLat,
                        'products.$[el].coordsLng': updatedProduct.coordsLng,
                        'services.$[el].address': updatedService.address,
                        'services.$[el].picture': updatedService.picture
                    }
                },
                { arrayFilters: [{ "el._id": updatedService._id }], new: true }
            )
                .then(complete => res.json(complete))
        }
        )
    }
)

router.delete('/delete/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const serviceId = req.params.id

        Service.findById(serviceId)
            .then(service => User.updateOne(
                { _id: req.user.id },
                {
                    $pull: {
                        'services': { _id: service._id }
                    }
                }
            ).then(() => Service.findByIdAndDelete(
                serviceId,
                (err, service) => {
                    if (err) {
                        return res.json(err)
                    }
                }
            ).then(() => res.json({ msg: 'Service deleted' }))
                .catch(err => console.log(err))
            ))
    }
)

module.exports = router;