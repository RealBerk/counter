let btn = document.getElementsByClassName('btn');
let number = document.getElementById('number');
let i = 0;
let feel = ["click","keypress"];


/* Click Function */
btn[0].addEventListener(feel[0],()=>{
    number.innerText = --i;
});
  
btn[1].addEventListener(feel[0],()=>{
    number.innerText = ++i;
});

/* Keypress Function */
btn[0].addEventListener(feel[1],()=>{
    number.innerText = --i;
});
  
btn[1].addEventListener(feel[1],()=>{
    number.innerText = ++i;
});
