function sound(){
    var nut = new Audio('assets/Nut.mp3')
    nut.play()

}


function nutDown() {
  document.getElementById("button").src = "assets/NutDown.png";

}


function clickCounterTotal() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("totalNumber").innerHTML = "The Nut Has Buttoned " + localStorage.clickcount + " Time(s) In Total";
    } else {
      document.getElementById("totalNumber").innerHTML = "Sorry, your browser does not support web storage, eat shit";
    }
  }


  var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
  })();
  
  function clickCounterNow(){
    document.getElementById("nowNumber").innerHTML = "The Nut Has Buttoned " + add() + " Time(s) This Session"

  }



  function upAgain(){
    document.getElementById("button").src = "assets/Nut.png";

  }