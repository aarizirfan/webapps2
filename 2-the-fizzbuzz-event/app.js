// Your Code Here:
var number = Math.floor((Math.random() * 100) + 1);

function createCard(number){
  var suite;
  var value;
  switch(number%4){
    case 0:
      suite="Spades";
    case 1:
      suite="Hearts";
    case 2:
      suite="Clubs";
    case 3:
      suite="Diamonds";
  }
  switch((number%4)%13){
    
  }

}

// Any other functions your app requires
