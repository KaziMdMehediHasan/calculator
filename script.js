const buttons = document.getElementsByClassName("btn");
const calcDisplay = document.getElementById("calc-display");
const equalBtn = document.getElementById("equal");
const clearBtn = document.getElementById("clear");


// Method 2 : Event Listener Method

let input;

for (btn of buttons) {
  btn.addEventListener("click", function (event) {
    // console.log("clicked");
    calcDisplay.innerText += event.target.innerText;
    input = calcDisplay.innerText;
    // console.log(input);
  });
}

equalBtn.addEventListener("click", function(){
      let calculate;
    //   console.log(input.includes("+"));
      if (input.includes("+")) {
        calculate = 0;
        let splitted = input.split("+");
        for (splitPart of splitted) {
          calculate += Number(splitPart);
        } 
      } else if (input.includes("-")) {
        let splitted = input.split("-");
        calculate = Number(splitted[0]);
        for (let i = 0; i < splitted.length - 1; i++) {
          calculate -= Number(splitted[i + 1]);
        }
      } else if (input.includes("*")) {
        calculate = 1;
        let splitted = input.split("*");
        for (splitPart of splitted) {
          calculate *= splitPart;
        }
      } else if (input.includes("/")) {
        let splitted = input.split("/");
        calculate = Number(splitted[0]);
        for (let i = 0; i < splitted.length - 1; i++) {
          calculate /= Number(splitted[i + 1]);
        }
      }
      
    calcDisplay.innerText = calculate.toString();
    // console.log(calculate);
})

//clear button 
clearBtn.addEventListener("click",function(){
  calcDisplay.innerText = "";
})

// Method : Onclick Method 

// use this inside every button 
// onclick="displayNum(this.textContent);


// console.log(buttons);
// calcDisplay.innerText = "";

// function displayNum(val) {
//   calcDisplay.innerText += val;
//   console.log(calcDisplay.innerText);
//   return calcDisplay.innerText;
// }

// // calculations after clicking the equal button 

// equalBtn.addEventListener("click", function(){
//     let input = calcDisplay.innerText;
//     let calculate;
//     if(input.includes("+")){
//         calculate = 0;
//         let splitted = input.split("+");
//         for(splitPart of splitted){
//           calculate += Number(splitPart);
//         }
//     }else if(input.includes("-")){
        
//         let splitted = input.split("-");
//         calculate = Number(splitted[0]);
//         for (let i = 0; i < splitted.length-1; i++) {
//             calculate -= Number(splitted[i+1]);
//         }
//     }else if(input.includes("*")){
//         calculate = 1;
//         let splitted = input.split("*");
//         for(splitPart of splitted){
//             calculate *= splitPart;
//         }
//     }else if(input.includes("/")){

//         let splitted = input.split("/");
//         calculate = Number(splitted[0]);
//         for (let i = 0; i < splitted.length - 1; i++) {
//             calculate /= Number(splitted[i + 1]);
//         }
//     }
//     calcDisplay.innerText = calculate.toinput();
// })



