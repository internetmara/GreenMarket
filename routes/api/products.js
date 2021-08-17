const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const Product = require('../../models/Product')
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateProductInput = require('../../validation/products')

router.get("/test", (req, res) => res.json({ msg: "This is the product route" }));

module.exports = router;