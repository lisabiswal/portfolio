// let l=document.getElementById("mess-el")
// let ll;
// function message(){
//     ll="Thank you  somuch  for paying  visit"
//     l.innerText=ll;
// }
let l = document.getElementById("mess-el");

function message() {
    if (l.innerText === "") {
        l.innerText = "Thank you so much for paying a visit";
    } else {
        l.innerText = "";
    }
}

