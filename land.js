const d = document;
let time = d.getElementById('time');
let greet = d.getElementById('greet');
let name = d.getElementById('name');
let focus = d.getElementById('focus');
let tesst = d.getElementsByClassName('link tic-img');
let counter = 0;
let quotes = [
'Do not give up, the beginning is always the hardest.',
"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
"Many of life's failures are people who did not realize how close they were to success when they gave up.",
"People wait all week for Friday, all year for summer, all life for happiness"
];
let descriptions = [
"A game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares; noughts and crosses.",
"A calculator is a device that performs arithmetic operations on numbers. The simplest calculators can do only addition, subtraction, multiplication, and division. More sophisticated calculators can handle exponent ial operations, roots, logarithm s, trigonometric functions, and hyperbolic functions.",
"A slider is a term that refers to a slideshow on a website. An example of a slider can be a revolving carousel that displays products or photos.",
"Music Player lets you manage all your music files quickly and easily . This audio player supports almost all types of mp3 , midi ,wav , flac raw aac files and other audio formats . Easily browse and play music songs by genres , albums , artists , songs and folder."
]
// Show Time
function showTime(){
	 let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
  // Output Time
     time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${
    addZero(sec)}`;
    theClockStrikes();
    greeting();
  setTimeout(showTime, 1000);
}
// Add Zeros to sec and min
function addZero(n){
	if(n<10){
		return '0' + n;
	}else{
		return '' + n;
	}
}
//greetings
function greeting(){
	let today = new Date(),
	hour = today.getHours();
	if(hour < 12 && hour > 4){
		d.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/88350.jpg')";
		greet.textContent = 'Good Morning, ';
		d.body.style.color = '#6a9e2e';
		name.style.color = '#bdffea';
	}else if(hour < 18 && hour > 12){
		d.body.style.backgroundImage = "url('https://papers.co/wallpaper/papers.co-mh02-peaceful-saturday-afternoon-mountain-scene-sun-36-3840x2400-4k-wallpaper.jpg')";
		greet.textContent = 'Good Afternoon, ';
		d.body.style.color = '#8e918f';
		name.style.color = '#bae0c4';
	}else{
		d.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/682419.jpg')";
		greet.textContent = 'Good Evening, ';
		d.body.style.color = '#0f3a95';
		name.style.color = '#bae0c4';
	}
		d.body.style.backgroundPosition = 'center';
  		d.body.style.backgroundRepeat = 'no-repeat';
 	 	d.body.style.backgroundSize = 'cover';
}
//every hour text's shadow bliks.
function theClockStrikes(){
	let today = new Date(),
	hour = today.getHours(),
	seconds = today.getSeconds(),
	minutes = today.getMinutes();
		if(seconds<1){
		focus.innerHTML = quotes[counter];
		counter+=1;
		start();
		}
		if(counter>=quotes.length){counter = 0;}
}
//Blink light for ClockStrikes
function turnOn(){
	focus.style.opacity = '1';
	focus.style.color = 'white';
	focus.style.textShadow = "0 0 10px #05d9e8,0 0 20px #005678,0 0 30px #d1f7ff,0 0 40px #ff2a6d";
}
function turnOff(){
	focus.style.opacity = '0.6';
	focus.style.color = 'white';
	focus.style.textShadow = '';
}
function start(){
	let on=setInterval(turnOn, 400);
	let off=setInterval(turnOff, 500);
	setTimeout(finish,6000,on,off);
}
function finish(first, second){
	clearInterval(first);
	clearInterval(second);
}
//pop up window всплывающее окно
//create <DIV><span><div> and insert it
function showName(num){
	let newDiv = document.createElement("div");
	newDiv.setAttribute("id", "popup");//content
	newDiv.setAttribute("class", "popup");
	
	newCont = d.createElement('span');
	newCont.setAttribute("id", "popuptext");
	newCont.setAttribute("class", "popuptext");
		//put description inside span
       newCont.innerHTML=descriptions[num];
       //put span in newdiv
       newDiv.appendChild(newCont);
       my_div = document.getElementById("div1");
  	document.body.insertBefore(newDiv, my_div);
   //console.log(newDiv)
   myFunction()
}
//turn on .show class
function myFunction(){
	 var popup = document.getElementById("popuptext");
    popup.classList.toggle("show");
}
//delete DIV
function delDiv(){
	let el = d.getElementById('popup');
	el.remove();
}
showTime();
