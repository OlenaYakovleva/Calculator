
let display = document.querySelector(".display"); //Selects the display element

let buttons = Array.from(document.querySelectorAll(".button")); //selects all button elements and converts them into an array.
function showResult() {
    let result = display.innerText;
    try {
        let finalResult = eval(result); // Evaluate the expression
        display.innerText = finalResult;
    } catch {
        alert('Invalid input');
    }
}
// add event listener to each button 
buttons.map((button) => { //Adds a click event listener to each button
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {

            //cleaning a display if user clicked C
            case "C":
                display.innerText = "0";
                break;
            case "=":
                showResult();
                return;

            default:
                if (display.innerText === "0" && e.target.innerText !== ".") {
                    display.innerText = e.target.innerText;
                } else {  //If the display already contains a number, the clicked button's value is appended to the current display conten
                    display.innerText += e.target.innerText;
                }

        }

    });

});








// let a = ""; // first number
// let b = ""; // second number
// let sign = ""; //operation
// let finish = false;
// const digit = ['1', '2', '3', '4', '5', '6','7', '8','9', '.'];
// const action = ['-', '/', 'X', '+'];

// const out = document.querySelector('.calc-screen');

// function clearAll (){
//     a = "";
//     b = "";
//     sign = "";
//     finish = false;
//     out.textContent = 0;
// }

// document.querySelector('.cancel').onclick = clearAll();
// document.querySelector('.buttons').onclick = (event) =>{
//     if(event. target.classList.contains ('cancel')) return; //clicked zero button

//     out.textContent = "";
//     const key = event.target.textContent; //get the clicked button
// //if you click 0-9
//     if (digit.includes(key)){

//     }

//         a+=key;
//         console.log(a,b, sign);
//         out.textContent = a;
//     } 
// // when you click on signes +,-,/,*
//     if (action.includes(key)){
//         sign =key;
//         console.log (sign);
//         out.textContent = sign;
//     }
// }

// let display = document.querySelector(".display");

// let buttons = Array.from(document.querySelectorAll(".button"));

// buttons.map((buttons) => {
//     buttons.addEventListener("click", (e) => {
//         switch (e.target.innerText) {
//             case "C":
//                 display.innerText = "0";
//                 break;
//             case "=":
//                 let result = eval(display.innerText);
//                 display.innerText = result;
//                 break;
//             case "+":
//                 display.innerText += "+";
//                 break;
//             case "-":
//                 display.innerText += "-";
//                 break;
//             case "*":
//                 display.innerText += "*";
//                 break;
//             case "/":
//                 display.innerText += "/";
//                 break;

//             default:
//                 if (display.innerText === "0" && e.target.innerText !== ".") {
//                     display.innerText = e.target.innerText;;
//                 } else {
//                     display.innerText += e.target.innerText;
//                 }
//         }
//     });
// });