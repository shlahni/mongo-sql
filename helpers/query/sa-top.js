var helpers = require('../../lib/query-helpers');

helpers.register('top', function(top, values){
  if ( typeof top === 'number' )
    //return " top $" + values.push(top);
    return " top " + top.toString() + ' ';
  else
    throw new Error('Invalid limit type `' + typeof limit  + '` for query helper `limit`. Limit must be number or \'all\'');
});