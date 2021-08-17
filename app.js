const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const products = require('./routes/api/products')
// const User = require('./models/User');
const bodyParser = require('body-parser');

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

// app.get("/", (req, res) => {
//     const user = new User({
//         username: 'jim',
//         email: 'jim@jim.jim',
//         password: 'jimisgreat123'
//     })
//     user.save()
//     res.send("Hello World!")
// });

app.get("/", (req, res) => {
    res.send("Hello Word!")
})

app.use("/api/users", users)
app.use('/api/products', products)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));