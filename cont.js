var countries = require('@credo/countries');
var us = countries.find('us');

var countryArr = [];
countries.forEach(function (country) {
    countryArr.push({
        id:country.alpha2.toUpperCase()
    });
})

var fs = require("fs")

fs.writeFile("./list.json",JSON.stringify(countryArr),function (err) {
    if(!err){
        console.log("success");
    }
})