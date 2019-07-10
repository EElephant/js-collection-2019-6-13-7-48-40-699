'use strict';

function grouping_count(collection) {
  let result = new Map();
  collection.forEach(element => {
    let count = (result.get(element)==undefined)?1:result.get(element)+=1;
    result.set(element,count)
  })
  console.log(result)
}

module.exports = grouping_count;
