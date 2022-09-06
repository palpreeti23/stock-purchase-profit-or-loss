const initialPrice = document.querySelector("#initial-price");
const quantityOfStocks = document.querySelector("#quantity-of-stocks");
const currentPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output-box");

const container = document.querySelector(".container");

function calculateProfitAndLoss(initial, quantity, current){

    if(initial < current){
       var profit = (current-initial)*quantity;
       var profitPercentage = ((profit/ initial)*100).toFixed(2);
       showMessage(`hey! The profite is ${profit} and the the profit percentage is ${profitPercentage} % 😀😀`);

       if(profitPercentage ){
        return changeColor("#ec4899");
       }
       
    }
    else if(initial > current){
        var loss = (initial-current)*quantity;
        var lossPercentage = ((loss/ initial)*100).toFixed(2);
        showMessage(`hey! The loss is ${loss} and the the loss percentage is ${lossPercentage} % 😔😔`); 
    
        if(lossPercentage ){
             changeColor("#f43f5e");
        }

    }
    else{
        showMessage(`No pain no gain and no gain no pain!! 😐😐`)

        if(profitPercentage === lossPercentage){
             changeColor("#64748b");
        }
    }

}

function showMessage(message){

    outputBox.innerText = message;
}



function clickHandler(){

    var ip = Number(initialPrice.value);
    var qyt =Number(quantityOfStocks.value);
    var curr =Number(currentPrice.value);

    calculateProfitAndLoss(ip, qyt, curr);
    

}

checkBtn.addEventListener("click", clickHandler);



function changeColor(color){
    
container.style.backgroundColor = color;

}
