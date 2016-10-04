var countries = require("./countries.json")

var countryObj = {}
countries.forEach(function (country) {
    if(country.defaultTimeZone==""){
        country.defaultTimeZone="+00:00"
    }
    countryObj[country.id] = country;
})

console.log(JSON.stringify(countryObj));