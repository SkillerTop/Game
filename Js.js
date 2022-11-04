    var  computerWin=Number(0);
    var userWin=Number(0);
    var name1=document.getElementById("userName");
    var name2=prompt("Insert user name:","");
    name1.innerHTML=name2;
    function main(){
        var userWin1=document.getElementById("userWin");
        var computerWin1=document.getElementById("computerWin");
    
        var userNumber1=document.getElementById("userNumber");
        var userNumber=Number(0);

        var computerNumber1=document.getElementById("computerNumber");
        var computerNumber=Number(0);

        if(userWin<4||computerWin<4)
        userNumber=Math.round(Math.random()*(10-0)+10);
        userNumber1.innerText=userNumber;
        computerNumber=Math.round(Math.random()*(10-0)+10);
        computerNumber1.innerText=computerNumber;

        if(userNumber>computerNumber){userWin=userWin+1;userWin1.innerText=userWin;}
        else if(computerNumber>userNumber){computerWin=computerWin+1;computerWin1.innerText=computerWin;}
        if(userWin==3||computerWin==3){
            if(computerWin>userWin){alert("Computer win")}
            else if(computerWin<userWin){alert(name2+" Win")}
        }
    }