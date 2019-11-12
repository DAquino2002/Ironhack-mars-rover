let rover = {
  direction: 'N',
  xPosition: 0,
  yPosition: 0
}
// Rover Object Goes Here
// ======================

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");

  switch(rover.direction){
    case 'N':
      rover.direction = 'W';
      break;
    case 'W': 
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;

    
  }
  
}

function turnRight(rover){
  console.log("turnRight was called!");

  switch(rover.direction){
    case 'N':
      rover.direction = 'E';
      break;
    case 'E': 
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
}

function moveForward(rover){
  console.log("moveForward was called")

  switch(rover.xPosition()){
    case 'N':
      yPosition++;
      console.log("(" + xPosition + ", " + yPosition + ")");
      break;
    case 'E':
      xPosition++;
      console.log("(" + xPosition + ", " + yPosition + ")");
      break;
    case 'S':
      yPosition--;
      console.log("(" + xPosition + ", " + yPosition + ")");
      break;
    case 'W':
      xPostion--;
      console.log("(" + xPosition + ", " + yPosition + ")");
      break;
  }
}
