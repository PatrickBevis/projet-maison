document.querySelector("#buttonVerif").onclick = (event) => {
    event.preventDefault();

    let disaButton=document.querySelector("#buttonVerif");
         disaButton.classList.add("disabled");

    let nameInput = document.querySelector(".nameInput").value;
    let nameRegex = /(.*?)\s([\wáâàãçéêíóôõúüÁÂÀÃÇÉÊÍÓÔÕÚÜ]+\-?\'?\w+\.*?$)/;
    let resultName = nameRegex.test(nameInput);
    if (resultName == false){
        document.querySelector("#nameMsg").innerText = "nom invalide";
    }

    
    let eMailInput=document.querySelector(".eMailInput").value;
    let eMailRegex = /^((\w[^\W]+)[\.\-]?){1,}\@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let resultEMail = eMailRegex.test(eMailInput);
    if (resultEMail == false){
        document.querySelector("#eMailMsg").innerText = "E-mail invalide";
    }
    let telNum=document.querySelector(".telNum").value;
    let telRegex = /^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
    let resultNum = telRegex.test(telNum);
    if (resultNum == false){
        document.querySelector("#telNumMsg").innerText = "Numéro invalide";
    }
    
    let entree=document.querySelector(".entree").value;
    let entreeRegex = /^((?:(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2}(?:\.\d+)?))(Z|[\+-]\d{2}:\d{2})?)$/;
    let resultEntree = entreeRegex.test(entree);
    if (resultEntree == false){
        document.querySelector("#entreeMsg").innerText = "Date invalide";
    }
    
    let sortie=document.querySelector(".sortie").value;
    let sortieRegex = /^((?:(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2}(?:\.\d+)?))(Z|[\+-]\d{2}:\d{2})?)$/;
    let resultSortie = sortieRegex.test(sortie);
    if (resultSortie == false){
        document.querySelector("#sortieMsg").innerText = "Date invalide";
    }

    if (resultSortie == true && resultEntree == true && resultNum == true && resultEMail == true && resultName == true){
            
        disaButton.classList.remove("disabled");
    }
  
    
}