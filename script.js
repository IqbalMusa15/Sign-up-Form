let signBtn = document.getElementById("signBtn");
let inBtn = document.getElementById("inBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

inBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "sign In";
    signBtn.classList.add("disable");
    inBtn.classList.remove("disable");
}
signBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    title.innerHTML = "sign Up";
    signBtn.classList.remove("disable");
    inBtn.classList.add("disable");
}