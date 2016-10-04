var newCurrList = require("./finalcurrency.json")
var oldCurrList = require("./unicodelist.json")
var _ = require("underscore")

var newlistArr = [],oldListArr = []
_.each(oldCurrList,function (oldCurr) {
    oldListArr.push(oldCurr)
})

_.each(newCurrList,function (curr) {
    var findWhere = _.findWhere(oldListArr,function (oldlist) {
        return oldlist.id == curr.id;
    })
    if(findWhere){
        curr.unicode = findWhere.unicode;
    }
})

console.log(JSON.stringify(newCurrList));