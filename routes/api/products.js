const express = require("express");
const router = express.Router();
const Product = require('../../models/Product')
const User = require('../../models/User')
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateProductInput = require('../../validation/products')

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
            picture: req.body.picture,
            user: req.user.id
        })
        

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
                ).then(creation => res.json(creation)
            )
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
            ).then(updatedProduct => 
                User.findOneAndUpdate(
                    { _id: req.user.id},
                    { $set: {'products.$[el].name': updatedProduct.name,
                            'products.$[el].category': updatedProduct.category,
                            'products.$[el].rate': updatedProduct.rate,
                            'products.$[el].description': updatedProduct.description,
                            'products.$[el].address': updatedProduct.address,
                            'products.$[el].picture': updatedProduct.picture}},
                    { arrayFilters: [{ "el._id": updatedProduct._id }], new: true }
                )
                .then(complete => res.json(complete))
            )
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
                        'products': {_id: product._id}
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
