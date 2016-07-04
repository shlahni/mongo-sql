
var moment = require('moment-jalaali')

module.exports.getDateRange = function() {
    
    var m= moment();
    
    var from = m;
    var to = m.add(1,'days');
    
    return {
        from:from,
        to:to
    };
}