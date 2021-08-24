const express = require("express");
const app = express();
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const validateUserInput = require('../../validation/users')

const path = require('path');
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

const keys = require('../../config/keys');

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        username: req.user.username,
        coordsLat: req.user.coordsLat,
        coordsLng: req.user.coordsLng,
        email: req.user.email
    });
})

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    // Check to make sure nobody has already registered with a duplicate email
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                // Throw a 400 error if the email address already exists
                return res.status(400).json({ email: "A user has already registered with this address" })
            } else {
                // Otherwise create a new user
                const newUser = new User({
                    username: req.body.username,
                    email: req.body.email,
                    coordsLat: req.body.coordsLat,
                    coordsLng: req.body.coordsLng,
                    password: req.body.password,
                    address: req.body.address
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    })
                })
            }
        })
})


router.post('/login', (req, res) => {
    
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            
            if (!user) {
                return res.status(404).json({ email: 'This user does not exist' });
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = { 
                            id: user.id, 
                            email: user.email,
                            address: user.address,
                            coordsLat: user.coordsLat,
                            coordsLng: user.coordsLng,
                            username: user.username,
                            products: user.products,
                            services: user.services,
                            reviews: user.reviews
                        }
                        
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                });
                            });
                    } else {
                        return res.status(400).json({ password: 'Incorrect password' });
                    }
                })
        })
})


router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err =>
            res.status(404).json({ nouserfound: 'Could not find user' }))
})

router.patch('/:id/update',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateUserInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        User.findByIdAndUpdate(
            req.params.id,
            {
                username: req.body.username,
                email: req.body.email,
                coordsLat: req.body.coordsLat,
                coordsLng: req.body.coordsLng,
                address: req.body.address
            },
            { new: true },
            function (err, success) {
                if (err) {
                    console.log(err);
                } else {
                    return success;
                }
            }
        ).then(updatedUser => res.json(updatedUser))
    }
)

router.delete('/delete/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const userId = req.params.id

        User.findById(userId)
            .then(user => {
                if ((user.products.length !== 0) || (user.services.length !== 0) || (user.products.length !== 0)) {
                    return res.json({msg: 'Please delete all products, services, & reviews'})
                } else {
                    User.findByIdAndDelete(
                        userId,
                        (err, user) => {
                            if (err) {
                                return res.json(err)
                            }
                        }
                    ).then(() => res.json({msg: 'User deleted'}))
                    .catch(err => console.log(err))
                }
            }
        )
    }
)

module.exports = router;