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
    res.send(countries)
})

router.get('/:name', (req, res) => {
    let name = decodeURI(req.params.name).replace('+', ' ');
    let result = null;
    for (const country of countries){
        if ( country.name.common === name) {
            result = country;
        }
    }
    if(!result){
        res.send("Pays non trouvé")
        return
    }
    res.send(result)
})

router.patch('/:name', (req, res) => {
    let name = decodeURI(req.params.name).replace('+', ' ');
    let result = null;
    let result_key = null;
    for (const [key, country] of Object.entries(countries)){
        if ( country.name.common === name) {
            result = country;
            result_key = key;
        }
    }
    if(!result){
        res.send("Pays non trouvé")
        return
    }
    const changes = req.body;
    const allProperties = [
        "name",
        "tld",
        "cca2",
        "ccn3",
        "cca3",
        "cioc",
        "independent",
        "status",
        "unMember",
        "currencies",
        "idd",
        "capital",
        "altSpellings",
        "region",
        "subregion",
        "languages",
        "translations",
        "latlng",
        "landlocked",
        "borders",
        "area",
        "demonyms",
        "flag",
        "maps",
        "population",
        "gini",
        "fifa",
        "car",
        "timezones",
        "continents",
        "flags",
        "coatOfArms",
        "startOfWeek",
        "capitalInfo",
        "postalCode"
    ]
    for (const [key, attribute] of Object.entries(changes)) {
        if (allProperties.includes(key)) {
            result[key] = attribute;
        }
    }
    countries.splice(result_key, 1);
    countries.push(result)
    fs.writeFile(path.join(__dirname, '../data/countries.json'), JSON.stringify(countries), err => {
        if (err) {
            res.status(501).send('Error when updating countries : ' + err.message);
        }else{
            res.send("Countries updated")
        }
    })
})

module.exports = router