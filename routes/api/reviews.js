const express = require("express");
const router = express.Router();
const Review = require('../../models/Review')
const User = require('../../models/User')
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateReviewInput = require('../../validation/reviews')

router.post('/create',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateReviewInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }
        
        const newReview = new Review({
            type: req.body.type,
            rating: req.body.rating,
            description: req.body.description,
            user: req.user.id
        })
        newReview.save()
            .then(review =>
                User.findByIdAndUpdate(
                    req.user.id,
                    { $addToSet: { reviews: review } },
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
    Review.findById(req.params.id)
        .then(review => res.json(review))
        .catch(err =>
            res.status(404).json({ noreviewfound: 'Could not find review' }))
})

router.patch('/:id/update',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateReviewInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        Review.findByIdAndUpdate(
            req.params.id,
            {
                type: req.body.type,
                rating: req.body.rating,
                description: req.body.description
            },
            { new: true },
            function (err, success) {
                if (err) {
                    console.log(err);
                } else {
                    return success;
                }
            }
        ).then(updatedReview => {
            User.findOneAndUpdate(
                { _id: req.user.id },
                {
                    $set: {
                        'reviews.$[el].type': updatedReview.type,
                        'reviews.$[el].rating': updatedReview.rating,
                        'reviews.$[el].description': updatedReview.description
                    }
                },
                { arrayFilters: [{ "el._id": updatedReview._id }], new: true }
            )
                .then(complete => res.json(complete))
        }
        )
    }
)

module.exports = router;