const express = require("express");
const app = express();
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const products = require('./routes/api/products')
const services = require('./routes/api/services')
const reviews = require('./routes/api/reviews')
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys');

const path = require('path');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

const db = require(keys).mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

mongoose.set('useFindAndModify', false);
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(passport.initialize())
require('./config/passport')(passport)

app.get("/", (req, res) => {
    res.send("Hello Word!")
})

app.use("/api/users", users)
app.use("/api/products", products)
app.use("/api/services", services)
app.use("/api/reviews", reviews)


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));