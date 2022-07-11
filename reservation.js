document.querySelector(".btn").onclick = (event) => {
    event.preventDefault();
let nameInput=document.querySelector(".nameInput");
let nameIsValid = /(.*?)\s([\wáâàãçéêíóôõúüÁÂÀÃÇÉÊÍÓÔÕÚÜ]+\-?\'?\w+\.*?$)/;
let resultName = nameIsValid.test(nameInput).value;
if (resultName == false){
    document.querySelector("#nameMsg").innerText = "nom invalide";
}

}

// let eMailInput=prompt(eMailInput.value);
// let eMailIsValid = /^[^\d]+$/;
// let resultEMail = nameIsValid.test(eMailIsValid);

// let telNum=prompt(telNum.value);
// let numIsValid = /^[^\d]+$/;
// let resultNum = numIsValid.test(telNum);

// let entree=prompt(entree.value);
// let entreeIsValid = /^[^\d]+$/;
// let resultEntree = nameIsValid.test(entree);

// let sortie=prompt(sortie.value);
// let sortieIsValid = /^[^\d]+$/;
// let resultSormtie = nameIsValid.test(sortie);


