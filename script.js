var currentInput=document.getElementById('input')
var equation=document.getElementById('equation')
var equations=[];
var answers=[];

let output = "", keypress, click;

let buttonsDiv = document.getElementById('buttonsDiv')

buttonsDiv.addEventListener('click', calculator)

buttonsDiv.addEventListener('keypress', calculator)

function calculator(e) {
    if (e.type == 'keypress') {
        e.preventDefault(); 
        console.log(e.key)
        
        var keynum = e.key

        var letters=/[a-zA-Z]/
        if(keynum=="Enter"){
            ans(keynum) 
        }
        else if(keynum.match(letters)){
            alert("Enter Digits for Calculation")
        }
        else{
            ans(keynum) 
        }
                     
    } else{
        var clicknum = e.target.innerText
        ans(clicknum)
    }

}

function ans(buttonText) {

    if (buttonText == 'x') {
        buttonText = "*"
        currentInput.value += buttonText
    }
    else if (buttonText == "C" || buttonText == "CE") {        
        currentInput.value = 0;
        equation.value=" ";
    }
    else if (buttonText == "=" || buttonText == "Enter") {
        equation.value+=currentInput.value +" = ";
        currentInput.value = eval(currentInput.value)
        equations.push(equation.value)
        answers.push(currentInput.value)
        showHistory()
    }
    else if(currentInput.value==0){
        currentInput.value=buttonText
    }
    else{
        currentInput.value+=buttonText;
    }
       
    }

    var lastanswer=document.getElementById('lastAns')
    function showHistory(){
        document.getElementById('historyContainer').style.display = "block";
        for(i=0;i<equations.length;i++){
     
            var lastHistory=`
            <div class='historyBox mb-2 bg-dark'>
            <span>${equations[i]}</span><br><span>${answers[i]}</span>
            </div>        
            `
        }
        lastanswer.innerHTML+=lastHistory
    }
