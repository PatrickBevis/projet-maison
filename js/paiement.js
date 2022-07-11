const cardName = document.getElementById("nom");
const cardNumbers = document.getElementById("card");
const cardDate = document.getElementById("date");
const cardCrypto = document.getElementById("crypto");

cardName.addEventListener("change", function (evt) {
  evt.preventDefault();

  const cardNamePattern = /^[A-Z]+[ ][A-Z]{1}[a-z]+/;
  const currentValue = evt.target.value;
  console.log(cardNamePattern.test(currentValue));

  const validName = cardNamePattern.test(currentValue);

  if (validName) {
  
    cardName.style.borderColor = "green";
  }
  else{
   
    cardName.style.borderColor = "red";
  }
});

cardNumbers.addEventListener("input", function (evt) {
  evt.preventDefault();

  const cardNumbersPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})/;
  const currentValue = evt.target.value;

  console.log(cardNumbersPattern.test(currentValue));

  const validCard = cardNumbersPattern.test(currentValue);

  if (validCard) {
    cardNumbers.style.borderColor = "green";
  }
  else {
    cardNumbers.style.borderColor = "red";
  }
});

cardDate.addEventListener("input", function (evt) {
  evt.preventDefault();

  const cardDatePattern = /^([0-9]{2}\/?(0[1-9]|1[0-2]))$/;
  const currentValue = evt.target.value;
  const dateMin = new Date("22/07")
  
  



  console.log(cardDatePattern.test(currentValue));

  const validDate = cardDatePattern.test(currentValue);
  
  if (validDate && dateMin < validDate) {
    cardDate.style.borderColor = "green";
  }
   else {
    cardDate.style.borderColor = "red";
  }
});

cardCrypto.addEventListener("input", function (evt) {
  evt.preventDefault();

  const cardCryptoPattern = /^[0-9]{3}$/;
  const currentValue = evt.target.value;
  console.log(cardCryptoPattern.test(currentValue));

  const validCrypto = cardCryptoPattern.test(currentValue);
  

  if (validCrypto) {
    cardCrypto.style.borderColor = "green";
  }
  else{
    cardCrypto.style.borderColor = "red";
  }
});
