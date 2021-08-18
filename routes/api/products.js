const express = require("express");
const router = express.Router();
const Product = require('../../models/Product')
const User = require('../../models/User')
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateProductInput = require('../../validation/products')


router.post('/create',
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        const {errors, isValid} = validateProductInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }
        console.log(req.user)
        const newProduct = new Product({
            category: req.body.category,
            rate: req.body.rate,
            description: req.body.description,
            address: req.body.address,
            user: req.user.id
        })
        console.log(req.user.id)

        newProduct.save()
            .then(product => 
                User.findByIdAndUpdate(
                    req.user.id,
                    { $addToSet: {products: product}},
                    { new: true },
                    function(err, success) {
                        if(err) {
                            console.log(err);
                        } else {
                            return success;
                        }
                    }
                ).then(creation => res.json(creation)));
        
    });


module.exports = router;