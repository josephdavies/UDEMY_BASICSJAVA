
const circle = {
  radius : 1,
  draw(){
    console.log('draw');
  }
};

//const another={};

//for(let key in circle)
  //another[key] = circle[key]; this ia older method

//console.log(another);

//this is second method
//const another = Object.assign({
 // color : 'yellow'
//},circle); this is second method

//console.log(another);

//third method
const another = { ...circle};
console.log(another);
