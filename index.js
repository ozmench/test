const db = require('./data-base.js');

function printNames(array){
  array.forEach(el => console.log(el.name));
}

printNames(db);

