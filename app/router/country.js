const express = require('express');
const router = express.Router();
const fs = require('node:fs');
const path = require('path');
var methodOverride = require('method-override')
const { isAdmin } = require("../service/admin.js")


const countries = require("../data/countries.json")

const users = require("../data/users.json")

const { customCountryProperties } = require('../service/country.js')

router.use(function checkIfAdmin(req, res, next) {
    if(isAdmin(req, users)){
        next();
    }else{
        res.status(403).send('Unauthorized')
    }
})

router.use(methodOverride('_method'));

router.get('/', (req, res) => {
    let properties = ["name"];
    const newArr = customCountryProperties(req, properties, countries);
    res.header("Content-Type: application/liquid").render('country/view', {'countries' : newArr})
})

router.get('/:name', (req, res) => {
    let name = decodeURI(req.params.name);
    let result = null;
    for (const country of countries){
        if ( country.name.common === name) {
            result = country;
        }
    }
    res.header("Content-Type: application/liquid").render('country/edit', {'country' : result})
})

module.exports = { router }