function distanceFromHqInBlocks(x){
    return Math.abs(x-42);
}

function distanceFromHqInFeet(x) {
    let disInBlocks = (distanceFromHqInBlocks(x))*264;
    return disInBlocks;
}


function distanceTravelledInFeet(start, finish){
    return Math.abs(start-finish)*264; //distance inch  
}

function calculatesFarePrice(start, finish) {
    let dis = distanceTravelledInFeet (start, finish)
    if (dis < 400) {
        return 0;
    } else if (dis >= 400 && dis <=2000) {
        return (dis-400) * 0.02;
    } else if (dis>2000 && dis<2500) {
        return 25 //flat fare
    } else { //whenever is greater than 400
        return 'cannot travel that far'
    }

}