
 function createCircle(radius){
    const circle = {
        radius,
        draw() {
            console.log('draw');
        }
    };
    return circle;
 }

 const circle1 = createCircle(5);
 console.log(circle1);

 const circle2=createCircle(10);
 console.log(circle2);

 circle1.draw();

 