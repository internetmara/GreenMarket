const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const products = require('./routes/api/products')
const services = require('./routes/api/services')
const reviews = require('./routes/api/reviews')
const bodyParser = require('body-parser');
const passport = require('passport');

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