
function Address(street,city,zipCode){
  this.street=street;
  this.city=city;
  this.zipCode=zipCode;
}

let address1 = new Address('a','b','c');
let address2 = new Address('a','b','c');

function areEqual(address1,address2){
  return address1.street === address2.street &&
  address1.city === address2.city &&
  address1.zipCode === address2.zipCode
}

function areSame(address1,address2){
  return address1 === address2;
}

console.log(areEqual(address1,address2));//equal properties
console.log(areSame(address1,address2));// but object not equal
let address3 =address2;
console.log(areSame(address3,address2));