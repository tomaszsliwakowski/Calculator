let afternumber = document.querySelector(".numberD");
let mSign = document.querySelector(".mathSign");
let currentNumber = document.querySelector(".currentNumber");

let clear = document.querySelector(".clear");
let operator = document.querySelectorAll(".operator");
let number = document.querySelectorAll(".number");
let equals = document.querySelector(".equals");
let calcpanel = document.querySelector(".calc__panel");
let fa = document.querySelector('.fas');
let calcDis = document.querySelector('.calc__display');

let result = '';


function displayNumbers(){
    if(this.textContent === "." && currentNumber.innerHTML.includes('.')) return;
    if(this.textContent === "." && currentNumber.innerHTML === "") return currentNumber.innerHTML ='.0'

    currentNumber.innerHTML += this.textContent;
};
function operate(){
    if(currentNumber.innerHTML ==='' && this.textContent ==='-'){
     currentNumber.innerHTML = '-';
     return;
    } else if(currentNumber.innerHTML ===''){
        return;
    }
    if(mSign.innerHTML !== ''){
        showResult();
    }
    afternumber.innerHTML = currentNumber.innerHTML;
    mSign.innerHTML = this.textContent;
    currentNumber.innerHTML='';
};
function showResult(){
    if(afternumber.innerHTML ==='' || currentNumber.innerHTML ==='') return;

    let a = Number(currentNumber.innerHTML);
    let b =Number(afternumber.innerHTML);
    let operator = mSign.innerHTML;

    switch(operator){
        case '+':
            result = a + b ;
            break;
        case '-':
            result = a - b;
            break;
        case 'x':
            result = a * b;
            break;
        case ':':
            result = a / b;
            break;
        case '2^':
            result = a ** b;
            break;
    }
   currentNumber.innerHTML = result;
   afternumber.innerHTML = "";
   mSign.innerHTML = "";
};
function clearScreen(){
    result = "";
    currentNumber.innerHTML = "";
    afternumber.innerHTML = "";
    mSign.innerHTML = "";
    fa.style.display = 'flex';
    calcDis.style.justifyContent = 'flex-center';
};


number.forEach((button) => {
    button.addEventListener('click', () => {
        fa.style.display = 'none';
        calcDis.style.justifyContent = 'flex-end';
    })
})

operator.forEach((button) => button.addEventListener('click', () => {
    fa.style.display = 'none';
    calcDis.style.justifyContent = 'flex-end';
})
)

function fontchang(){
    currentNumber.style.fontSize = '40px';
}

operator.forEach((button) => button.addEventListener('click', operate));
operator.forEach((button) => button.addEventListener('click',fontchang));

equals.addEventListener('click', showResult);
equals.addEventListener('click', () =>{
    currentNumber.style.fontSize = '60px';
});


clear.addEventListener('click', clearScreen);
clear.addEventListener('click', fontchang);

number.forEach((button) => {
    button.addEventListener('click', displayNumbers)
})

number.forEach((button) => {
    button.addEventListener('click', fontchang)
})