let button = document.getElementById("check");
button.addEventListener('click',function(){
    let polishedString = document.getElementById("textbox").value;
    let reversedString = polishedString.split('').reverse().join('');
    let result;
    if(polishedString == ""){
        result = "Please enter a Value"
        document.getElementById("result").style.color = "red";
    }
    else if(polishedString == reversedString ){
        result = "Yes... Its a Palindrome";
        document.getElementById("result").style.color = "green";
    }else{
        result = "Oops... Not a Palindrome";
        document.getElementById("result").style.color = "red";
    }
    document.getElementById("result").innerHTML = result;
    // document.getElementById("textbox").value = "";
    }  
    
 );
 