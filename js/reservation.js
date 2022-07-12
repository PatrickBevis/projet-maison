const nameInput = document.querySelector(".nameInput");
const eMailInput = document.querySelector(".eMailInput");
const telNum = document.querySelector(".telNum");

// --------------------------------------------------------------------------------------------

let  validNom = false;
nameInput.addEventListener("input", function (evt) {
    evt.preventDefault();
    const nameValidRgx = /^([A-Za-z0-9]){4,20}$/;
    const inputValue = nameInput.value;
    console.log(nameValidRgx.test(inputValue));
    validNom = nameValidRgx.test(inputValue);
  
    if(validNom) {
        nameInput.style.borderColor = "green";
    }
    else {
        nameInput.style.borderColor = "red";
    }
});

// -------------------------------------------------------------------------------

let  validEmail = false;
eMailInput.addEventListener("input", function (evt) {
    evt.preventDefault();
    const eMailValidRgx = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    const emailValue = evt.target.value;
    console.log(eMailValidRgx.test(emailValue));
    validEmail = eMailValidRgx.test(emailValue);
  
    if(validEmail) {
        eMailInput.style.borderColor = "green";
    }
    else {
        eMailInput.style.borderColor = "red";
    }
});

// ---------------------------------------------------------------------------------------

let  validNum = false;
telNum.addEventListener("input", function (evt) {
    evt.preventDefault();
    const telValidRgx = /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/;    
    const telValue = evt.target.value;
    console.log(telValidRgx.test(telValue));
    validNum = telValidRgx.test(telValue);
  
    if(validNum) {
        telNum.style.borderColor = "green";
    }
    else {
        telNum.style.borderColor = "red";
    }
});

// --------------------------------- FONCTION DATE VALIDE ------------------------------------------------

let entreeInput = document.querySelector('#dateEntree');

entreeInput.addEventListener('input', function(evt) {
    evt.preventDefault();
    const dateValue = evt.target.value;
    console.log(dateValue);
});

// --------------------------------- EASEPICK EXEMPLE ----------------------------------------------------

// const DateTime = easepick.DateTime;
// const today = new DateTime();
// const tomorrow = today.clone().add(1, 'day');

// const dateEl = document.getElementById('dateTest');
// dateEl.innerHTML = `Today is: ${today.format('DD MMM YYYY')}<br/>Tomorrow is: ${tomorrow.format('DD MMM YYYY')}`;

// ------------------------------------ BOUTON PASSER AU PAIMENT -----------------------------------------

const resaButton = document.querySelector("#buttonVerif");
const verifButton = document.querySelector("#verif");

resaButton.classList.add("disabled");
function onClick(event) {
    event.preventDefault();
    if(validNom && validEmail && validNum) {
    resaButton.classList.remove("disabled");
    }
}

verifButton.addEventListener('click', onClick);

// ------------------------------------------------------------------------------------------

// function onClick (event){
//     event.preventDefault();
//     if (resultName == false){
//         document.querySelector("#nameMsg").innerText = "nom invalide";
        
//     }
//     if (resultEMail == false){
//         document.querySelector("#eMailMsg").innerText = "E-mail invalide";
        
//     }
//     if (resultNum == false){
//         document.querySelector("#telNumMsg").innerText = "Numéro invalide";
        
//     }
// }

// resaButton.addEventListener('click', onClick);


// resaButton.classList.remove("disabled");

// document.querySelector("#buttonVerif").onclick = (event) => {
//     event.preventDefault();

//     let entree=document.querySelector(".entree").value;
//     let entreeRegex = /^((?:(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2}(?:\.\d+)?))(Z|[\+-]\d{2}:\d{2})?)$/;
//     let resultEntree = entreeRegex.test(entree);
//     if (resultEntree == false){
//         document.querySelector("#entreeMsg").innerText = "Date invalide";
//     }
    
//     let sortie=document.querySelector(".sortie").value;
//     let sortieRegex = /^((?:(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2}(?:\.\d+)?))(Z|[\+-]\d{2}:\d{2})?)$/;
//     let resultSortie = sortieRegex.test(sortie);
//     if (resultSortie == false){
//         document.querySelector("#sortieMsg").innerText = "Date invalide";
//     }
    
// };

// if ( resultNum == true && resultEMail == true && resultName == true){
        
//     disaButton.classList.remove(disabled);
// }
