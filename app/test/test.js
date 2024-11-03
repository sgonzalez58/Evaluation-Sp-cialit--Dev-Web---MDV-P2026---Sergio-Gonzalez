const server = require('../app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('User Endpoints not logged in', () => {

    it('GET /user should respond 403 if not logged in', async () => {
        const res = await requestWithSupertest.get('/user');
        expect(res.status).toEqual(403);
        expect(res.type).toEqual("text/html");
    });
  
});

describe('Country Endpoints not logged in', () => {

    it('GET /user should respond 403 if not logged in', async () => {
        const res = await requestWithSupertest.get('/country');
        expect(res.status).toEqual(403);
        expect(res.type).toEqual("text/html");
    });
  
});

describe('Admin Endpoints not logged in', () => {

    it('GET /user should respond 403 if not logged in', async () => {
        const res = await requestWithSupertest.get('/admin');
        expect(res.status).toEqual(403);
        expect(res.type).toEqual("text/html");
    });
  
});

describe('Normal route', () => {

    it('GET /normal should return only "name", "cca2", "cca3", "currencies", "languages", "flag", "capital", "population" and "continents" properties', async () => {
        const res = await requestWithSupertest.get('/normal');
        console.log(res.body)
        expect(res.status).toEqual(200);
        expect(res.body).not.toHaveProperty("postalCode");
        expect(res.body).not.toHaveProperty("capitalInfo");
        expect(res.body).not.toHaveProperty("startOfWeek");
        expect(res.body).not.toHaveProperty("coatOfArms");
        expect(res.body).not.toHaveProperty("timezones");
        expect(res.body).not.toHaveProperty("car");
        expect(res.body).not.toHaveProperty("fifa");
        expect(res.body).not.toHaveProperty("gini");
        expect(res.body).not.toHaveProperty("maps");
        expect(res.body).not.toHaveProperty("flags");
        expect(res.body).not.toHaveProperty("demonyms");
        expect(res.body).not.toHaveProperty("area");
        expect(res.body).not.toHaveProperty("borders");
        expect(res.body).not.toHaveProperty("landlocked");
        expect(res.body).not.toHaveProperty("latlng");
        expect(res.body).not.toHaveProperty("translations");
        expect(res.body).not.toHaveProperty("subregion");
        expect(res.body).not.toHaveProperty("region");
        expect(res.body).not.toHaveProperty("altSpellings");
        expect(res.body).not.toHaveProperty("idd");
        expect(res.body).not.toHaveProperty("unMember");
        expect(res.body).not.toHaveProperty("status");
        expect(res.body).not.toHaveProperty("independent");
        expect(res.body).not.toHaveProperty("cioc");
        expect(res.body).not.toHaveProperty("ccn3");
        expect(res.body).not.toHaveProperty("tld");
    });
  
});

describe('Short route', () => {

    it('GET /short should return only "name", "cca2", "cca3" and "flag" properties', async () => {
        const res = await requestWithSupertest.get('/normal');
        console.log(res.body)
        expect(res.status).toEqual(200);
        expect(res.body).not.toHaveProperty("postalCode");
        expect(res.body).not.toHaveProperty("capitalInfo");
        expect(res.body).not.toHaveProperty("startOfWeek");
        expect(res.body).not.toHaveProperty("coatOfArms");
        expect(res.body).not.toHaveProperty("timezones");
        expect(res.body).not.toHaveProperty("car");
        expect(res.body).not.toHaveProperty("fifa");
        expect(res.body).not.toHaveProperty("gini");
        expect(res.body).not.toHaveProperty("maps");
        expect(res.body).not.toHaveProperty("flags");
        expect(res.body).not.toHaveProperty("demonyms");
        expect(res.body).not.toHaveProperty("area");
        expect(res.body).not.toHaveProperty("borders");
        expect(res.body).not.toHaveProperty("landlocked");
        expect(res.body).not.toHaveProperty("latlng");
        expect(res.body).not.toHaveProperty("translations");
        expect(res.body).not.toHaveProperty("subregion");
        expect(res.body).not.toHaveProperty("region");
        expect(res.body).not.toHaveProperty("altSpellings");
        expect(res.body).not.toHaveProperty("idd");
        expect(res.body).not.toHaveProperty("unMember");
        expect(res.body).not.toHaveProperty("status");
        expect(res.body).not.toHaveProperty("independent");
        expect(res.body).not.toHaveProperty("cioc");
        expect(res.body).not.toHaveProperty("ccn3");
        expect(res.body).not.toHaveProperty("tld");
        expect(res.body).not.toHaveProperty("currencies");
        expect(res.body).not.toHaveProperty("languages");
        expect(res.body).not.toHaveProperty("capital");
        expect(res.body).not.toHaveProperty("population");
        expect(res.body).not.toHaveProperty("continents");
    });
  
});