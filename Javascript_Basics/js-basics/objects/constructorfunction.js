
// FACTORY FUNCTION
function createCircle(radius){
  const circle = {
      radius,
      draw() {
          console.log('draw');
      }
  };
  return circle;
}

const another = createCircle(1);

//CONSTRUCTOR FUNCTION
function Circle(radius){
  this.radius =radius;
  this.draw=function(){
    console.log('draw');
  }
}

const circle = new Circle(1);

