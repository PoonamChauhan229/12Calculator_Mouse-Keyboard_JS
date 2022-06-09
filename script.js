let calculateDisplay = document.getElementById('screen');
let output = "", keypress, click;
console.log(calculateDisplay.value)
buttons = document.querySelectorAll('button');
let buttonsDiv = document.getElementById('buttonsDiv')

buttonsDiv.addEventListener('click', calculator)

buttonsDiv.addEventListener('keypress', calculator)

function calculator(e) {
    if (e.type == 'keypress') {
        console.log(e.key)
        var buttonkeyText = e.key
        display(buttonkeyText, e.type)
    } else {
        console.log(e.target.innerText)
        var buttonclickText = e.target.innerText
        display(buttonclickText, e.type)
    }

}

function display(buttonText, type) {
    if (buttonText == 'x') {
        buttonText = "*"
        output += buttonText
        calculateDisplay.value = output;
        console.log(calculateDisplay.value)
        console.log(calculateDisplay.innerText)
    }
    else if (buttonText == "C" || buttonText == "CE") {
        output = "";
        calculateDisplay.value = output;
        console.log(calculateDisplay.value)
        console.log(calculateDisplay.innerText)
    }
    else if (buttonText == "=" || buttonText == "Enter") {
        calculateDisplay.value = eval(output)
        console.log(calculateDisplay.value)
        console.log(output)
        console.log(calculateDisplay.innerText)
    }
    else {
        if (type === "keypress") {
            output += buttonText            
            console.log(output)
            console.log(calculateDisplay.innerHTML)
        }
        else {
            output += buttonText
            calculateDisplay.value = output
            console.log(calculateDisplay.innerText)
        }
    }
    console.log(calculateDisplay.value)
    console.log(calculateDisplay.innerText)
}
// buttonsDiv.addEventListener('click',function(e){
//     console.log(e.target.innerText)
//     var buttonText=e.target.innerText
//     if(buttonText=='x'){
//         buttonText="*"
//         output+=buttonText
//         calculateDisplay.value=output;
//     }
//     else if(buttonText=="C"||buttonText=="CE"){
//         output="";
//         calculateDisplay.value=output;
//     }
//     else if(buttonText == "="){
//         calculateDisplay.value=eval(output)
//     }
//     else{
//         output+=buttonText
//         calculateDisplay.value=output
//     }

// })

// buttonsDiv.addEventListener('keypress',function(e){
//     console.log(e.key)
//     var buttonText=e.key
//     if(buttonText=='x'){
//         buttonText="*"
//         output+=buttonText
//         calculateDisplay.value=output;
//     }
//     else if(buttonText=="C"||buttonText=="CE"){
//         output="";
//         calculateDisplay.value=output;
//     }
//     else if(buttonText == "="){
//         calculateDisplay.value=eval(output)
//     }
//     else{
//         output+=buttonText
//         // calculateDisplay.value=output
//     }

// })

