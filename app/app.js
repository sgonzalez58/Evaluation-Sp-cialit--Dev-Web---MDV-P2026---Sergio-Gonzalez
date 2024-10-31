const express = require("express");
const path = require('path');
const app = express();
const { Liquid } = require("liquidjs");
const bcrypt = require('bcryptjs');
const session = require('express-session')
const appOptions = {
  port : 3000,
  session: {
    secret: 'verysecretcode',
  }
}

const engine = new Liquid();

app.engine("liquid", engine.express());
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'liquid');
app.use(express.json());
app.use(express.urlencoded())
app.use(session(appOptions.session));

const countries = require("./data/countries.json")

const users = require("./data/users.json")

const { customCountryProperties } = require('./service/country.js')

const { router } = require("./router/country.js")

app.use('/country', router)


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
});

app.get('/full', (req, res) => {
    res.send(countries)
});

app.get('/normal', (req, res) => {
    let properties = ["name", "cca2", "cca3", "currencies", "languages", "flag", "capital", "population", "continents"];
    const newArr = customCountryProperties(req, properties, countries);
    res.send(newArr);
});

app.get('/short', (req, res) => {
    let properties = ["name", "cca2", "cca3", "flag"];
    const newArr = customCountryProperties(req, properties, countries);
    res.send(newArr)
});

app.get('/login', (req, res) =>{
  res.sendFile(path.join(__dirname, './views/login.html'))
})

app.post('/login', (req, res) =>{
  const credentials = req.body;
  if(!credentials.username || !credentials.password){
    res.status(401).send('Login failed !')
    return;
  }
  for (const user of users){
    if(bcrypt.compareSync(credentials.password, user.password) && credentials.username === user.username){
      req.session.username = credentials.username;
      req.session.isLoggedIn = true;
      res.redirect('/')
      return;
    }
  }
  res.status(401).send('Login failed !')
})

app.get('/logout', (req, res) =>{
  if (req.session.isLoggedIn){
    req.session.destroy(() => {
      res.send("Logout Successful")
    })
  }else{
    res.send('not logged in')
  }
})

app.listen(appOptions.port, () => {
  console.log(`Example app listening at http://localhost:${appOptions.port}`);
});

module.exports = app