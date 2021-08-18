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
                ).then(creation => res.json(creation)));

    });


module.exports = router;