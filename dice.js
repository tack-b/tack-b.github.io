var path = '';

function generateRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function defineImgPath(result) {
  switch (result) {
    case 1:
      path = "https://openclipart.org/download/282127/Die";
      break;
    case 2:
      path = "https://openclipart.org/download/282128/Die";
      break;
    case 3:
      path = "https://openclipart.org/download/282129/Die";
      break;
    case 4:
      path = "https://openclipart.org/download/282130/Die";
      break;
    case 5:
      path = "https://openclipart.org/download/282131/Die";
      break;
    case 6:
      path = "https://openclipart.org/download/282132/Die";
      break;
  }
}

function changeDiceFace(result) {
  var dice = document.querySelector('#dice');
  dice.setAttribute("src", path + result + ".svg");
}

function rollDice() {
  var result = generateRandomNumber();
  defineImgPath(result);
  changeDiceFace(result);

  return false;
}
