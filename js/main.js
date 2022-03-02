var elForm = document.querySelector(".form");
var elFormInput = document.querySelector(".form__input");
var elFormResult = document.querySelector(".form__result");
var oddNumber =[11 , 33, 55,];
var evenNumbers = [12 , 34 , 56 ,];


elForm.addEventListener("submit", function(evt){

  evt.preventDefault();

  var elInputVal = elFormInput.value;

  if(elInputVal % 2 == 0 ){

    elFormResult.textContent = "Juft Son";
    elFormResult.classList.add("result-success");
    evenNumbers.push(elInputVal);
    console.log(evenNumbers);
    elFormInput.value = ""
    return;

  }


  else{
    elFormResult.textContent= "Toq son";
    elFormResult.classList.add("result-error");
    oddNumber.push(elInputVal);
    console.log(oddNumber);
    elFormInput.value = ""
    return;
  }

})
