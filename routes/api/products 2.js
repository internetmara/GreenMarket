const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const Product = require('../../models/Product')
const jwt = require('jsonwebtoken');
// const keys = require('../../config/keys');
const passport = require('passport');
require('../../config/passport')(passport)
const validateProductInput = require('../../validation/products')


router.get("/test", (req, res) => res.json({ msg: "This is the product route" }));

router.post('/',
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        const {errors, isValid} = validateProductInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newProduct = new Product({
            category: req.body.category,
            rate: req.body.rate,
            description: req.body.description,
            address: req.body.address,
            user: req.user.id
        })
        newProduct.save().then(product => res.json(product));
    });


module.exports = router;