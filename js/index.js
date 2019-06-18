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
