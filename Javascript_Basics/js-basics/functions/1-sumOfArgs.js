
console.log(sum([1, 2, 3, 4]));

function sum(...items) { 
  if (items.length === 1 && Array.isArray(items[0]))
    items = [...items]; //if an array is passed then rest operator creates an array of arrays which should be converted into an array 

  return items.reduce((a, b) => a + b);
}