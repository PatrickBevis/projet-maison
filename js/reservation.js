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
    validEmail = telValidRgx.test(telValue);
  
    if(validNum) {
        telNum.style.borderColor = "green";
    }
    else {
        telNum.style.borderColor = "red";
    }
});

// --------------------------------------------------------------------------------------

const resaButton = document.querySelector("#buttonVerif");

function onClick (event) {
    event.preventDefault();
    if(validNom && validEmail && validNum){
        alert('paiement accepté');
    }
    else{ 
        alert('paiement refusé');
    }
}

resaButton.addEventListener('click', onClick);

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

// disaButton.classList.add("disabled");

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
