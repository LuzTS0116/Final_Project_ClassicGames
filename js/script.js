//NAVBAR SCROLL
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    document.getElementById("logo").style.width = "20vw";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, 0.0)";
    document.getElementById("logo").style.width = "40vw";
  }
}

//TITLE ANIMATION
// var DynamicTitle = function(el, toRotate, period) {
//     this.toRotate = toRotate;
//     this.el = el;
//     this.loopNum = 0;
//     this.period = parseInt(period, 10) || 2000;
//     this.txt = '';
//     this.tick();
//     this.isDeleting = false;
//   };
  
//   DynamicTitle.prototype.tick = function() {
//     var i = this.loopNum % this.toRotate.length;
//     var fullTxt = this.toRotate[i];
  
//     if (this.isDeleting) {
//       this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//       this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }
  
//     this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
//     var that = this;
//     var delta = 300 - Math.random() * 100;
  
//     if (this.isDeleting) { delta /= 2; }
  
//     if (!this.isDeleting && this.txt === fullTxt) {
//       delta = this.period;
//       this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === '') {
//       this.isDeleting = false;
//       this.loopNum++;
//       delta = 500;
//     }
  
//     setTimeout(function() {
//       that.tick();
//     }, delta);
//   };
  
//   window.onload = function() {
//     var elements = document.getElementsByClassName('dynamic-title');
//     for (var i=0; i<elements.length; i++) {
//       var toRotate = elements[i].getAttribute('data-rotate');
//       var period = elements[i].getAttribute('data-period');
//       if (toRotate) {
//         new TxtRotate(elements[i], JSON.parse(toRotate), period);
//       }
//     }
//     // INJECT CSS
//     var css = document.createElement("style");
//     css.type = "text/css";
//     css.innerHTML = ".dynamic-title > .wrap { border-right: 0.08em solid #666 }";
//     document.body.appendChild(css);
//   };






// var text = ["TIC TAC TOE", "HANGMAN", "ROCK PAPER SCISSORS"];
// var counter = 0;
// var elem = document.getElementById("game-name");
// setInterval(change, 3000);
// function change() {
//  elem.innerHTML = text[counter];
//         counter++;
//         if(counter >= text.length) { counter = 0; }
// }


// var game = new Array("TIC TAC TOE", "HANGMAN", "ROCK PAPER SCISSORS");

// var counter = 0;
// document.getElementById('game-name').innerHTML = game[counter];

// Changegame1();
// function Changegame1(){
//   incrementIndex()
//   document.getElementById('game-name1').innerHTML = game[counter];

//   document.getElementById('game-name').style.opacity = 0;
 
//   document.getElementById('game-name1').style.opacity = 1;

//   setTimeout(Changegame, 2000);
// }
// function Changegame(){
//   incrementIndex();
//   document.getElementById('game-name').innerHTML = greet[counter];
 
//   document.getElementById('game-name').style.opacity = 1;
 
//   document.getElementById('game-name1').style.opacity = 0;
 
//   setTimeout(Changegame1, 2000);
// }
// function incrementIndex(){
//   if(counter < greet.length - 1 ){
//     counter++;
//   }else{
//     counter = 0;
//   }
// }



// //TITLE ANIMATION
// const text = document.querySelector(".dynamic");
// const typer = (str, target) => {
//   let newText = "";
//   let step = 1;
//   const element = target;
//   const tic = setInterval(() => {
//     if (step === str.length) clearInterval(tic);
//     newText += str.slice(step - 1, step);
//     step += 1;
//     element.innerHTML = newText;
//   }, 100);
// };

// const handler = (timer) => {
//   let counter = 0;
//   const arrayOfText = ["HANGMAN", "ROCK PAPER SCISSORS"];
//   const change = () => {
//     typer(arrayOfText[counter], text);
//     counter += 1;
//     if (counter >= arrayOfText.length) counter = 0;
//   };
//   setInterval(change, timer);
// };

// window.addEventListener("load", handler(2000));