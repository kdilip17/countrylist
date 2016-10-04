/**
 * Created by dilip on 4/10/16.
 */

var countrylist = require("./countries.json")
var withoutArr = require("./unknownCurrencies.json")

var cc = require('currency-codes');
var worldCurrency = require("world-currencies")
var getSymbolFromCurrency = require('currency-symbol-map').getSymbolFromCurrency

//console.log(currencies.get('EUR'));
var currObj = {};
var currArr = [],withoutCurr=[];
countrylist.forEach(function (country) {
    var currId = country.defaultCurrency;
    var currencySymbol,currencyName;
    var currDetails = cc.code(currId);
    var currSymbol1 = getSymbolFromCurrency(currId)
    var currSymbol2 = worldCurrency[currId]
    if(currSymbol2){
        currencySymbol = currSymbol2.units.major.symbol
        currencyName = currSymbol2.units.major.name
    }else{
        currencySymbol = currSymbol1
        currencyName = currDetails.currency
    }
    currObj[currId] = {
        id:currId,
        symbol:currencySymbol,
        name:currencyName,
        countryName:country.name
    }
    var currTempObj = {
        id:currId,
        symbol:currencySymbol,
        name:currencyName,
        countryName:country.name
    }
    if(currTempObj.symbol) {
        currArr.push(currTempObj)
    }else{
        withoutCurr.push(currTempObj)
    }
})

console.log(currArr.length);

console.log(JSON.stringify(currArr));



//console.log(JSON.stringify(currObj));