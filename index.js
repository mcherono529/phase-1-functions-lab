// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    return Math.abs(block - 42);
}
function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // flat rate for over 2000 feet
    } else {
        return 'cannot travel that far'; // for distances over 2500 feet
    }
}
