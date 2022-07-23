checkSpeed(72);
function checkSpeed(speed){
    let speedlimit=70;
    let pointPerKm=5;
    if (speed<speedlimit+pointPerKm)
    console.log('ok');
    else{
        const point=Math.floor((speed-speedlimit)/pointPerKm);
        if(point>12)console.log('license suspended');
        else console.log('points',point);
    }
}