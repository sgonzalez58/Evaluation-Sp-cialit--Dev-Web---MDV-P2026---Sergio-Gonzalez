const express = require('express');
const router = express.Router();
const fs = require('node:fs');
const path = require('path');
var methodOverride = require('method-override')
const { isAdmin } = require("../service/admin.js")
const bcrypt = require('bcryptjs');

const users = require("../data/users.json")

router.use(function checkIfAdmin(req, res, next) {
    if(isAdmin(req, users)){
        next();
    }else{
        res.status(403).send('Unauthorized')
    }
})

router.use(methodOverride('_method'));

router.get('/', (req, res) => {
    res.send(users);
})

router.post('/', (req, res) =>{
    const credentials = req.body;
    let id = 0;
    for(const user of users){
        if(user.id > id){
            id = user.id;
        }
    }
    users.push({
        "id": id + 1,
        "username": credentials.username,
        "password": bcrypt.hashSync(credentials.password, 8)
    })
    fs.writeFile(path.join(__dirname, '../data/users.json'), JSON.stringify(users), err => {
        if (err) {
            res.status(501).send('Error when updating users : ' + err.message);
        }else{
            res.send("user aded");
        }
    })
})

router.delete('/', (req, res) => {
    const credentials = req.body;
    for(const [key, user] of Object.entries(users)){
        if(Number(credentials.id) === user.id || credentials.username === user.username){
            users.splice(key, 1);
            res.send("user deleted");
            return;
        }
    }
    fs.writeFile(path.join(__dirname, '/database/users.json'), JSON.stringify(users), err => {
        if (err) {
            res.status(501).send('Error when updating users : ' + err.message);
        }else{
            res.send("user deleted");
        }
    })
})

module.exports = router