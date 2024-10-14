// Check number Even or Odd


const number = parseInt(prompt('Inter a number: '));

if(number%2===0){

    document.getElementById("Program-2").innerHTML = `'This number is Even'`;
}

else{
    document.getElementById("Program-2").innerHTML = `'This number is Odd'`;
    
}