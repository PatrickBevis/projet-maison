let resaButton = document.querySelector("#buttonVerif");

let nameInput = document.querySelector(".nameInput").value;
let nameValid = /(.*?)\s([\wáâàãçéêíóôõúüÁÂÀÃÇÉÊÍÓÔÕÚÜ]+\-?\'?\w+\.*?$)/;
let resultName = nameValid.test(nameInput);

let eMailInput = document.querySelector(".eMailInput").value;
let eMailValid = /^((\w[^\W]+)[\.\-]?){1,}\@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let resultEMail = eMailValid.test(eMailInput);

let telNum = document.querySelector(".telNum").value;
let telValid = /^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
let resultNum = telValid.test(telNum);

function onClick (event){
    event.preventDefault();
    if (resultName == false){
        document.querySelector("#nameMsg").innerText = "nom invalide";
        
    }
    if (resultEMail == false){
        document.querySelector("#eMailMsg").innerText = "E-mail invalide";
        
    }
    if (resultNum == false){
        document.querySelector("#telNumMsg").innerText = "Numéro invalide";
        
    }
}

resaButton.addEventListener('click', onClick);





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
