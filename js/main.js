var elForm = document.querySelector(".form");
var elFormInput = document.querySelector(".form__input");
var elFormResult = document.querySelector(".form__result");

elForm.addEventListener("submit", function(evt){

  evt.preventDefault();

  var elInputVal = elFormInput.value;
  var oddNumber =[11 , 33, 55,];
  var evenNumbers = [12 , 34 , 56 ,];

  if(elInputVal % 2 == 0 ){

    elFormResult.textContent = "Juft Son";
    elFormResult.classList.add("result-success");
    evenNumbers.push(elInputVal);
    console.log(evenNumbers);
  } else{
    elFormResult.textContent= "Toq son";
    elFormResult.classList.add("result-error");
    oddNumber.push(elInputVal);
    console.log(oddNumber);
  }

})
