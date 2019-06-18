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
