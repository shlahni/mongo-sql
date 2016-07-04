
/**
 * Conditionals
 * TODO: update comments :/
 */

var conditionals = require('../lib/conditional-helpers');
var queryBuilder = require('../lib/query-builder');
var dateHelper = require('./sa-date-helper');


conditionals.add('$current_year', function(column, value, values, collection, original){
  
  var dateRange = dateHelper.getDteRange('current_year',original);  
  return column + " >= " +dateRange.from +" and " + column + " <= " + dateRange.to;
});