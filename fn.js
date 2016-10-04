/*
var currencyId = "AMD"

var currencies = require('currencies');
var worldCurrency = require("world-currencies")
console.log(currencies.get(currencyId))

var getSymbolFromCurrency = require('currency-symbol-map').getSymbolFromCurrency;
console.log(getSymbolFromCurrency(051));

console.log(worldCurrency[currencyId].units.major.symbol)

var cc = require('currency-codes');

var currDetails = cc.code(currencyId);

console.log(currDetails);*/


var currencyList = require("./totalCurrency.json")

var withOutObj ={}
currencyList.forEach(function (withoutCurr) {
    withOutObj[withoutCurr.id] = withoutCurr
    delete withoutCurr.countryName
})

console.log(JSON.stringify(withOutObj));
