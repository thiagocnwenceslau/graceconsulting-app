const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
let User = require('../models/userModel');
let Product = require('../models/productsModel')

const mongoose = require('mongoose');
const db = 'mongodb://localhost:27017/graceconsulting';
mongoose.connect(db, { useNewUrlParser: true }, error => {
    if (error) {
        console.error('ERROR!' + error)
    } else {
        console.log('Conectado ao mongodb.')
    }
})

router.get('/', (req, res) => {
    res.send('API route')
})

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registerUser) => {
        if (error) {
            console.error('ERROR!' + error);
        } else {
            let payload = { subject: registerUser._id }
            let token = jwt.sign(payload, 'secretKey')
            res.status(201).send({ token });
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body;

    User.findOne({ email: userData.email }, (error, user) => {
        if (error) {
            console.error('ERROR!' + error);
        } else {
            if (!user) {
                res.status(401).send('Invalid e-mail.');
            } else {
                if (user.password !== userData.password) {
                    res.status(401).send('Invalid password.');
                } else {
                    let payload = { subject: user._id }
                    let token = jwt.sign(payload, 'secretKey')
                    res.status(200).send({ token });
                }
            }
        }
    })
})

router.post('/products', (req, res) => {
    let productData = req.body;
    let product = new Product(productData);
    product.save((error, registerProduct) => {
        if (error) {
            console.error('ERROR!' + error);
        } else {
            res.status(200).send(registerProduct);
        }
    })

})

router.get('/details', (req, res) => {
    Product.find({}, (error, product) => {
        if (error) {
            console.error('ERROR!' + error);
        } else {
            res.status(200).send(product);
        }
    })
})

module.exports = router;