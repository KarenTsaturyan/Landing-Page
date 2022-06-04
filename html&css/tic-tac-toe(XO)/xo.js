const d = document;
let click = 1;//turn
xo = ["✕", "◯"]
let game = d.getElementById('game')
let place1 = d.getElementById('tic1')
let place2 = d.getElementById('tic2')
let place3 = d.getElementById('tic3')
let place4 = d.getElementById('tic4')
let place5 = d.getElementById('tic5')
let place6 = d.getElementById('tic6')
let place7 = d.getElementById('tic7')
let place8 = d.getElementById('tic8')
let place9 = d.getElementById('tic9')
let re_button = d.getElementById('ref')

function drawx(place){//main function
    if (click === 1) {
      place.innerText = xo[0];//draw X
      place.style.pointerEvents = 'none';
      clickCounter()
    }else if (click === 2) {
      place.innerText = xo[1];//draw ◯
      place.style.pointerEvents = 'none';//point events off
      clickCounter()
    }
    check(place)
    winner()
}
function check(place){
  if(place.innerText == xo[0]){
      place.value = 1 //X's value is 1
        return place.value;
    }else if(place.innerText == xo[1]){
      place.value = 2 //◯'s value is 2
      return place.value;
    }
}
function playAgain(){//restart page
  location.reload();
}
function winner(){//Win combinations
  if(place1.value + place2.value + place3.value == 3 ){
    re_button.value = "Player1 win";
    re_button.style.display = "block";
    place1.style.pointerEvents = 'none';
    place2.style.pointerEvents = 'none';
    place3.style.pointerEvents = 'none';
    place4.style.pointerEvents = 'none';
    place5.style.pointerEvents = 'none';
    place6.style.pointerEvents = 'none';
    place7.style.pointerEvents = 'none';
    place8.style.pointerEvents = 'none';
    place9.style.pointerEvents = 'none';
  }else if(place1.value + place2.value + place3.value == 6){
    re_button.value = "Player2 win";
    re_button.style.display = "block";
    place1.style.pointerEvents = 'none';
    place2.style.pointerEvents = 'none';
    place3.style.pointerEvents = 'none';
    place4.style.pointerEvents = 'none';
    place5.style.pointerEvents = 'none';
    place6.style.pointerEvents = 'none';
    place7.style.pointerEvents = 'none';
    place8.style.pointerEvents = 'none';
    place9.style.pointerEvents = 'none';
  }else if (place1.value + place4.value + place7.value == 6) {
    re_button.value = "Player2 win";
    re_button.style.display = "block";
    place1.style.pointerEvents = 'none';
    place2.style.pointerEvents = 'none';
    place3.style.pointerEvents = 'none';
    place4.style.pointerEvents = 'none';
    place5.style.pointerEvents = 'none';
    place6.style.pointerEvents = 'none';
    place7.style.pointerEvents = 'none';
    place8.style.pointerEvents = 'none';
    place9.style.pointerEvents = 'none';
  }else if (place1.value + place4.value + place7.value == 3) {
    re_button.value = "Player1 win";
    re_button.style.display = "block";
    place1.style.pointerEvents = 'none';
    place2.style.pointerEvents = 'none';
    place3.style.pointerEvents = 'none';
    place4.style.pointerEvents = 'none';
    place5.style.pointerEvents = 'none';
    place6.style.pointerEvents = 'none';
    place7.style.pointerEvents = 'none';
    place8.style.pointerEvents = 'none';
    place9.style.pointerEvents = 'none';
  }else if (place1.value + place5.value + place9.value == 3) {
    re_button.value = "Player1 win";
    re_button.style.display = "block";
    place2.style.pointerEvents = 'none';
    place3.style.pointerEvents = 'none';
    place4.style.pointerEvents = 'none';
    place6.style.pointerEvents = 'none';
    place7.style.pointerEvents = 'none';
    place8.style.pointerEvents = 'none';
  }else if (place1.value + place5.value + place9.value == 6) {
    re_button.value = "Player2 win";
    re_button.style.display = "block";
    place2.style.pointerEvents = 'none';
    place3.style.pointerEvents = 'none';
    place4.style.pointerEvents = 'none';
    place6.style.pointerEvents = 'none';
    place7.style.pointerEvents = 'none';
    place8.style.pointerEvents = 'none';
  }else if (place4.value + place5.value + place6.value == 3) {
    re_button.value = "Player1 win";
    re_button.style.display = "block";
    place1.style.pointerEvents = 'none';
    place2.style.pointerEvents = 'none';
    place3.style.pointerEvents = 'none';
    place7.style.pointerEvents = 'none';
    place8.style.pointerEvents = 'none';
    place9.style.pointerEvents = 'none';
  }else if (place4.value + place5.value + place6.value == 6) {
    re_button.value = "Player2 win";
    re_button.style.display = "block";
    place1.style.pointerEvents = 'none';
    place2.style.pointerEvents = 'none';
    place3.style.pointerEvents = 'none';
    place7.style.pointerEvents = 'none';
    place8.style.pointerEvents = 'none';
    place9.style.pointerEvents = 'none';
  }else if (place7.value + place8.value + place9.value == 3) {
    re_button.value = "Player1 win";
    re_button.style.display = "block";
    place1.style.pointerEvents = 'none';
    place2.style.pointerEvents = 'none';
    place3.style.pointerEvents = 'none';
    place4.style.pointerEvents = 'none';
    place5.style.pointerEvents = 'none';
    place6.style.pointerEvents = 'none';
  }else if (place7.value + place8.value + place9.value == 6) {
    re_button.value = "Player2 win";
    re_button.style.display = "block";
    place1.style.pointerEvents = 'none';
    place2.style.pointerEvents = 'none';
    place3.style.pointerEvents = 'none';
    place4.style.pointerEvents = 'none';
    place5.style.pointerEvents = 'none';
    place6.style.pointerEvents = 'none';
  }else if (place2.value + place5.value + place8.value == 3) {
    re_button.value = "Player1 win";
    re_button.style.display = "block";
    place1.style.pointerEvents = 'none';
    place3.style.pointerEvents = 'none';
    place4.style.pointerEvents = 'none';
    place6.style.pointerEvents = 'none';
    place7.style.pointerEvents = 'none';
    place9.style.pointerEvents = 'none';
  }else if (place2.value + place5.value + place8.value == 6) {
    re_button.value = "Player2 win";
    re_button.style.display = "block";
    place1.style.pointerEvents = 'none';
    place3.style.pointerEvents = 'none';
    place4.style.pointerEvents = 'none';
    place6.style.pointerEvents = 'none';
    place7.style.pointerEvents = 'none';
    place9.style.pointerEvents = 'none';
  }else if (place3.value + place5.value + place7.value == 3) {
    re_button.value = "Player1 win";
    place1.style.pointerEvents = 'none';
    place2.style.pointerEvents = 'none';
    place4.style.pointerEvents = 'none';
    place6.style.pointerEvents = 'none';
    place8.style.pointerEvents = 'none';
    place9.style.pointerEvents = 'none';
    re_button.style.display = "block";
  }else if (place3.value + place5.value + place7.value == 6) {
    re_button.value = "Player2 win";
    place1.style.pointerEvents = 'none';
    place2.style.pointerEvents = 'none';
    place4.style.pointerEvents = 'none';
    place6.style.pointerEvents = 'none';
    place8.style.pointerEvents = 'none';
    place9.style.pointerEvents = 'none';
    re_button.style.display = "block";
  }else if (place3.value + place6.value + place9.value == 3) {
    re_button.value = "Player1 win";
    re_button.style.display = "block";
    place1.style.pointerEvents = 'none';
    place2.style.pointerEvents = 'none';
    place4.style.pointerEvents = 'none';
    place5.style.pointerEvents = 'none';
    place7.style.pointerEvents = 'none';
    place8.style.pointerEvents = 'none';
  }else if (place3.value + place6.value + place9.value == 6) {
    re_button.value = "Player2 win";
    re_button.style.display = "block";
    place1.style.pointerEvents = 'none';
    place2.style.pointerEvents = 'none';
    place4.style.pointerEvents = 'none';
    place5.style.pointerEvents = 'none';
    place7.style.pointerEvents = 'none';
    place8.style.pointerEvents = 'none';
  }else if(place1.value + place2.value + place3.value + place4.value + place5.value + place6.value + place7.value + place8.value + place9.value >= 13){
  re_button.style.display = "block";
  re_button.value = "Try again";//if no one wins, button value changes.
  }
}
function clickCounter(){
  click++
  if (click > 2) {
    click = 1
  }
  console.log("CLICK"+"-"+click)
}
