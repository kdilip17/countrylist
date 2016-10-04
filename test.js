var countries        = require('country-data').countries;
var countriesAndTimezones = require("countries-and-timezones")
var moment = require('moment');
var tz = require("moment-timezone")
var _ = require("underscore")
var countrylist = require("./list.json")

var countryArr = [];
countrylist.forEach(function (countr) {
    var country =countries[countr.id];
    var countryId=country.alpha2;
    var currencys=[],currencyStrArr=[];
    if(countries[countryId]){
        var inc=0;
        var isDefault=false;
        if(countries[countryId].currencies.length>0){
            _.each(countries[countryId].currencies, function (currencyId) {
                if(inc==0){
                    isDefault=true;
                }
                currencys.push({
                    id:currencyId,
                    name:currencyId,
                    isDefault:isDefault
                })
                currencyStrArr.push(currencyId)
                inc++;
            })
        }
    }
    var timezones,tzsArr=[],tzId;
    timezones = countriesAndTimezones.getTimezonesForCountry(countryId)

    if(timezones && timezones.length>0){
        var inc=0;
        var isDefault=false;
        _.each(timezones, function (tz) {
            if(countryId=="AU"){
                if(tz.name.toLowerCase()=="australia/melbourne"){
                    isDefault=true;
                    tzId=tz.name;
                }else{
                    isDefault=false;
                    tzId=tz.name;
                }
            }else{
                if(inc==0){
                    isDefault=true;
                    tzId=tz.name;
                }
            }
            tzsArr.push({
                id:tz.name,
                name:tz.name,
                isDefault:isDefault
            })
        })
    }
    var dialCode=countries[countryId]?countries[countryId].countryCallingCodes[0]:null
    var defaultCurrencyId = "USD"
    if(currencys.length>0){
        var defaultCurrency = _.find(currencys,function (currency) {
            return currency.isDefault==true;
        })
        if(defaultCurrency){
            defaultCurrencyId = defaultCurrency.id;
        }
    }

    var defaultTimeZone = "";
    if(tzsArr.length>0){
        var defaultzone = _.find(tzsArr,function (tzone) {
            return tzone.isDefault==true;
        })
        if(defaultzone){
            defaultTimeZone = moment().tz(defaultzone.id).format('Z');
        }
        _.each(tzsArr,function (tz) {
            defaultTimeZone = moment().tz(tz.id).format('Z');
            tz.value = defaultTimeZone ? defaultTimeZone : "+00:00"
        })
    }
    var countryObj = {};
    countryObj.id = country.alpha2;
    countryObj.code = country.alpha3;
    countryObj.dialCode=dialCode?dialCode.slice(1):null,
        countryObj.name = country.name;
    countryObj.isActive = true;
    countryObj.currencys = currencys;
    countryObj.currencies = currencyStrArr;
    countryObj.defaultCurrency = defaultCurrencyId;
    countryObj.bankCodeCaption = "Swift Code"
    countryObj.timezones = tzsArr;
    countryObj.defaultTimeZone = defaultTimeZone;
    countryArr.push(countryObj)
})

console.log(JSON.stringify(countryArr));

countries.all.forEach(function (country) {
    var countryId=country.alpha2;
    var currencys=[];
    if(countries[countryId]){
        var inc=0;
        var isDefault=false;
        if(countries[countryId].currencies.length>0){
            _.each(countries[countryId].currencies, function (currencyId) {
                if(inc==0){
                    isDefault=true;
                }
                currencys.push({
                    id:currencyId,
                    name:currencyId,
                    isDefault:isDefault
                })
                inc++;
            })
        }
    }
    var timezones,tzsArr=[],tzId;
    timezones = countriesAndTimezones.getTimezonesForCountry(countryId)

    if(timezones && timezones.length>0){
        var inc=0;
        var isDefault=false;
        _.each(timezones, function (tz) {
            if(countryId=="AU"){
                if(tz.name.toLowerCase()=="australia/melbourne"){
                    isDefault=true;
                    tzId=tz.name;
                }else{
                    isDefault=false;
                    tzId=tz.name;
                }
            }else{
                if(inc==0){
                    isDefault=true;
                    tzId=tz.name;
                }
            }
            tzsArr.push({
                id:tz.name,
                name:tz.name,
                isDefault:isDefault
            })
        })
    }
    var dialCode=countries[countryId]?countries[countryId].countryCallingCodes[0]:null
    var defaultCurrencyId = "USD"
    if(currencys.length>0){
        var defaultCurrency = _.find(currencys,function (currency) {
            return currency.isDefault==true;
        })
        if(defaultCurrency){
            defaultCurrencyId = defaultCurrency.id;
        }
    }

    var defaultTimeZone = "";
    if(tzsArr.length>0){
        var defaultzone = _.find(tzsArr,function (tzone) {
            return tzone.isDefault==true;
        })
        if(defaultzone){
            defaultTimeZone = moment().tz(defaultzone.id).format('Z');;
        }
    }

    var countryObj = {};
    countryObj.id = country.alpha2;
    countryObj.code = country.alpha3;
    countryObj.dialCode=dialCode?dialCode.slice(1):null,
    countryObj.name = country.name;
    countryObj.isActive = true;
    countryObj.currencys = currencys;
    countryObj.defaultCurrency = defaultCurrencyId;
    countryObj.bankCodeCaption = "Swift Code"
    countryObj.timezones = tzsArr;
    countryObj.defaultTimeZone = defaultTimeZone;
    countryArr.push(countryObj)
})

//console.log(JSON.stringify(countryArr));
