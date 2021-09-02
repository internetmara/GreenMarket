const express = require("express");
const router = express.Router();
const Product = require('../../models/Product')
const User = require('../../models/User')
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateProductInput = require('../../validation/products')

const keys = require('../../config/keys');

router.get('/', (req, res) => {
    Product.find()
        .sort({ date: -1 })
        .then(products => res.json(products))
        .catch(err => res.status(404).json({noproductsfound: 'No products found'}))
})

router.post('/create',
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        const {errors, isValid} = validateProductInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newProduct = new Product({
                name: req.body.name,
                category: req.body.category,
                rate: req.body.rate,
                description: req.body.description,
                address: req.body.address,
                coordsLat: req.body.coordsLat,
                coordsLng: req.body.coordsLng,
                picture: req.body.picture,
                user: req.user.id
            })
        
        newProduct.save()
            .then(product => 
                User.findByIdAndUpdate(
                    req.user.id,
                    { $addToSet: {products: product._id}},
                    { new: true },
                    function(err, success) {
                        if(err) {
                            console.log(err);
                        } else {
                            return success;
                        }
                    }
                ).then(userUpdated => 
                    Product.findById(userUpdated.products[userUpdated.products.length - 1]._id))
                    .then(newProduct => res.json(newProduct))
            );
    }
);

router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => 
            res.status(404).json({ noproductfound: 'Could not find product'}))
})

router.patch('/:id/update',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        
        const { errors, isValid } = validateProductInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        Product.findByIdAndUpdate(
            req.params.id,
            {
            name: req.body.name,
            category: req.body.category,
            rate: req.body.rate,
            description: req.body.description,
            coordsLat: req.body.coordsLat,
            coordsLng: req.body.coordsLng,
            picture: req.body.picture,
            address: req.body.address},
            { new: true },
            function (err, success) {
                if (err) {
                    console.log(err);
                } else {
                    return success;
                }
            }
            ).then(complete => res.json(complete))
    }
)

router.delete('/delete/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const productId = req.params.id

        Product.findById(productId)
            .then(product => User.updateOne(
                { _id: req.user.id },
                {
                    $pull: {
                        'products': product._id
                    }
                }
            ).then(() => Product.findByIdAndDelete(
                productId,
                (err, product) => {
                    if (err) {
                        return res.json(err)
                    }
                }
            ).then(() => res.json({msg: 'Product deleted'}))
            .catch(err => console.log(err))
        ))
    }
)


module.exports = router;
