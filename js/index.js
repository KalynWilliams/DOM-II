// Your code goes here

// mouseover
// set anchor text color on mouseover

const anchors = Array.from(document.querySelectorAll('.nav a'));
anchors.forEach(e => e.addEventListener('mouseover',(event) => {
    event.currentTarget.style.color = '#17a2b8';
}));

//keydown
//change body color on keypress
const body = document.querySelector('header');
document.addEventListener('keydown', (event) => {
    body.style.backgroundColor = '#FFEBCD';
    body.style.color = 'black';

 });

 //wheel
 // increase header text on scroll over
 const introHeader = document.querySelector('.intro h2');
 introHeader.addEventListener('wheel', (event)=> {
     event.preventDefault();
     event.currentTarget.style.fontSize = '10rem';
 });

// drag and drop
 const introImg = document.querySelector('.intro img');
 const goImg = document.querySelector('.img-content img');


  introImg.addEventListener('drag',(event) => {
     event.currentTarget.style.width = '400px';
 })
 introImg.addEventListener('dragend',(event) => {
     event.currentTarget.style.width = '800px';
 })
 introHeader.addEventListener('dragover',(event) => {
     event.preventDefault();
 });
 introHeader.addEventListener('drop',(event) => {
     body.style.backgroundColor = 'pink';
     body.style.color = 'white';
 });

 //focus
 // turn anchors white on focus
 anchors.forEach(e => e.addEventListener('focus',(event) => {
     event.currentTarget.style.color = 'white';
 }));

 //resize
// turn nav bar and footer blue
window.addEventListener('resize', event => {
    body.style.backgroundColor = 'lightblue';
})

window.addEventListener("resize", event => {
  const footer = document.querySelector("footer");
  footer.style.backgroundColor = "lightblue";
});
// click
//boxes around anchors
const anchor = document.querySelectorAll("a");
anchor.forEach(a => (a.style.padding = "10px"));
anchor.forEach(a => {
  a.addEventListener("click", event => {
    event.target.style.backgroundColor = "#9eedcc";
  });
});

// Load
//load window
window.addEventListener("load", event => alert("Page loaded! Wowzers!"));


//double click click
//black border around bus img
const destinationImg = document.querySelector("img");
destinationImg.addEventListener( "dblclick", event => (destinationImg.style.border = "2px solid black")
);

//scroll
//change nav bar pink when scroll
window.addEventListener(
  "scroll",
  function() {
    const header = document.querySelector(".main-navigation");
    header.style.backgroundColor = " #ffc4c4";
    body.style.color = "white";
  },
);
