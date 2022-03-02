var elForm = document.querySelector(".form");
var elFormInput = document.querySelector(".form__input");
var elFormResult = document.querySelector(".form__result");

elForm.addEventListener("submit", function(evt){

  evt.preventDefault();

  var elInputVal = elFormInput.value;

  if(elInputVal % 2 == 0 ){

    elFormResult.textContent = "Juft Son";
    elFormResult.classList.add("result-success");
    even = evenNumbers.push(elInputVal);
    console.log(evenNumbers);
  }

  else{
    elFormResult.textContent= "Toq son";
    elFormResult.classList.add("result-error");
    odd = oddNumber.push(elInputVal);
    console.log(oddNumber);
  }

  elInput.value = null;

})

var oddNumber =[1 , 3, 5, 7, 9 ,];
var evenNumbers = [2 , 4 , 6 , 8 , 10 ,];