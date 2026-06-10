
function compareCalc(){
let a=document.getElementById('a').value,b=document.getElementById('b').value;
document.getElementById('comp').innerHTML='Country A:'+a+' Country B:'+b;
}
function gravityCalc(){
let g1=+document.getElementById('g1').value||0,g2=+document.getElementById('g2').value||0,d=+document.getElementById('dist').value||1;
document.getElementById('grav').innerHTML='Trade Score: '+Math.round((g1*g2)/d);
}
function tariffCalc(){
let t=document.getElementById('tariff').value;
document.getElementById('tariffOut').innerHTML='Consumer prices increase as tariff rises to '+t+'%';
}
function setTheme(theme){

document.body.classList.remove(
'dark-theme',
'trade-theme'
);

if(theme === 'dark'){
document.body.classList.add('dark-theme');
}

if(theme === 'trade'){
document.body.classList.add('trade-theme');
}

localStorage.setItem('theme',theme);

}

window.addEventListener('load',function(){

const savedTheme = localStorage.getItem('theme');

if(savedTheme){
setTheme(savedTheme);
}

});
