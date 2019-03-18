// Code your solution in this file!
function distanceFromHqInBlocks(street){
  let distanceFromHqInBlocks = Math.abs(street - 42);
  return distanceFromHqInBlocks;
}

function distanceFromHqInFeet(street) {
  let distanceFromHqInFeet = Math.abs(street - 42) * 264;
  return distanceFromHqInFeet;
}

function distanceTravelledInFeet(street1, street2) {
  let distanceTravelledInFeet = Math.abs(street1 - street2) * 264;
  return distanceTravelledInFeet;
}

function calculatesFarePrice(start, destination) {
  let distanceTravelledInFeet = Math.abs(destination - start) * 264;
  let fare;
  if (distanceTravelledInFeet <= 400) {
    fare = 0;
  } else if (400 < distanceTravelledInFeet && distanceTravelledInFeet <=2000) {
    fare = (distanceTravelledInFeet-400)*0.02;
  } else if (2000 < distanceTravelledInFeet && distanceTravelledInFeet<= 2500){
    fare = 25;
  } else {
    return "cannot travel that far";
  }
  return fare;
}
