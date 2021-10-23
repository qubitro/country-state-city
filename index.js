const express = require('express')
const cors = require('cors')
const Csc = require('country-state-city');

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


app.get('/countries/', function (req, res) {
    const list = Csc.Country.getAllCountries()
    return res.status(200).json(list)
});
app.get('/countries/:countryCode', function (req, res) {
    const list = Csc.Country.getCountryByCode(req.params.countryCode)
    return res.status(200).json(list)
});
app.get('/countries/:countryCode/states', function (req, res) {
    const list = Csc.State.getStatesOfCountry(req.params.countryCode)
    return res.status(200).json(list)
});
app.get('/countries/:countryCode/states/:stateId', function (req, res) {
    const list = Csc.City.getCitiesOfState(req.params.countryCode, req.params.stateId)
    return res.status(200).json(list)
});
module.exports = app