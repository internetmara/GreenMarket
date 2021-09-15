const express = require("express");
const app = express();
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const products = require('./routes/api/products')
const services = require('./routes/api/services')
const reviews = require('./routes/api/reviews')
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

const keys = require("./config/keys").mongoURI;
mongoose
    .connect(keys, { useNewUrlParser: true })
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


// pre-existing setup here
const port = process.env.PORT || 5000;
app.listen( port, () => console.log(`Server is running on port ${port}`) );


// failed testing setup below
// const server = app.listen(process.env.PORT || 5000, () => {
//     const port = server.address().port;
//     console.log(`Server is running on port ${port}`)
// });