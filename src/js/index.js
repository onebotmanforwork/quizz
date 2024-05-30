//botoes
var goToFirstQuest = document.querySelector('.start');

var acertouUm = document.querySelector('.certo1');
var acertouDois = document.querySelector('.certo2');
var acertouTreis = document.querySelector('.certo3');
var acertouQuatro = document.querySelector('.certo4');
var acertouCinco = document.querySelector('.certo5');
var acertouSeis = document.querySelector('.certo6');
var acertouSete = document.querySelector('.certo7');
var acertouOito = document.querySelector('.certo8');
var acertouNove = document.querySelector('.certo9');
var acertouDez = document.querySelector('.certo10');
var acertouOnze = document.querySelector('.certo11');
var acertouDoze = document.querySelector('.certo12');
var acertouTreze = document.querySelector('.certo13');
var acertouQuatorze = document.querySelector('.certo14');
var acertouQuinze = document.querySelector('.certo15');

var wrongAnswers = document.querySelectorAll('.errado');
var recomecar = document.querySelector('.restart');

var button_2 = document.querySelector('.instruction');
var button_3 = document.querySelector('.credits')

//paginas
var startPag = document.querySelector('.inicio');
var firstQuest = document.querySelector('.quest1');
var secondQuest = document.querySelector('.quest2');
var thirdQuest = document.querySelector('.quest3');
var fourthQuest = document.querySelector('.quest4');
var fifthQuest = document.querySelector('.quest5');
var sixthQuest = document.querySelector('.quest6');
var seventhQuest = document.querySelector('.quest7');
var eighthQuest = document.querySelector('.quest8');
var ninethQuest = document.querySelector('.quest9');
var tenthQuest = document.querySelector('.quest10');
var elevenstQuest = document.querySelector('.quest11');
var twelvendQuest = document.querySelector('.quest12');
var thirteenrdQuest = document.querySelector('.quest13');
var fourteenthQuest = document.querySelector('.quest14');
var fifteenthQuest = document.querySelector('.quest15');

var winPag = document.querySelector('.you-win');
var wrongPag = document.querySelector('.you-wrong');
//sumir
var sumirDivs = document.getElementsByClassName("errouvaisumir");
//comandos

goToFirstQuest.addEventListener('click', () =>{
    startPag.style.display = "none";
    firstQuest.style.display = "block";
})

acertouUm.addEventListener('click', () => {
    firstQuest.style.display = "none";
    secondQuest.style.display = "block";
})

acertouDois.addEventListener('click', () =>{
    secondQuest.style.display = "none";
    thirdQuest.style.display = "block";
})

acertouTreis.addEventListener('click', () =>{
    thirdQuest.style.display = "none";
    fourthQuest.style.display = "block";
})

acertouQuatro.addEventListener('click', () =>{
    fourthQuest.style.display = "none";
    fifthQuest.style.display = "block";
})

acertouCinco.addEventListener('click', () =>{
    fifthQuest.style.display = "none";
    sixthQuest.style.display = "block";
})

acertouSeis.addEventListener('click', () =>{
    sixthQuest.style.display = "none";
    seventhQuest.style.display = "block";
})

acertouSete.addEventListener('click', () =>{
    seventhQuest.style.display = "none";
    eighthQuest.style.display = "block";
})

acertouOito.addEventListener('click', () =>{
    eighthQuest.style.display = "none";
    ninethQuest.style.display = "block";
})

acertouNove.addEventListener('click', () =>{
    ninethQuest.style.display = "none";
    tenthQuest.style.display = "block";
})

acertouDez.addEventListener('click', () =>{
    tenthQuest.style.display = "none";
    winPag.style.display = "block";
})





//errou

wrongAnswers.forEach((errado) => {
    errado.addEventListener('click', () =>{
        some();
        wrongPag.style.display = "block";
    })
})

recomecar.addEventListener('click', () =>{
    wrongPag.style.display = "none";
    startPag.style.display = "block";
})

//funcoes
function some() {
    for (var i = sumirDivs.length - 1; i >= 0; i--){
        sumirDivs[i].style.display = "none";
    }
}

// outros butões

button_2.addEventListener('click', () =>{
    alert("not working")
})

button_3.addEventListener('click', () =>{
    alert("PESSOAS: SAMUEL, PEDRO, MATHEUS, ISABELLE, ESTHER, ")
})