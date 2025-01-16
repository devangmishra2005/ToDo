let addbtn = document.querySelector("button");
let ul = document.querySelector("ul");
let li = document.querySelector("ul");
let inp = document.querySelector("input");
// let delbtn = document.querySelector("li button");



addbtn.addEventListener("click", function () {
let item = document.createElement("li");
item.innerText = inp.value;

let delbtn = document.createElement("button");
delbtn.innerText = "Delete";
delbtn.classList = "delete";

item.appendChild(delbtn);
ul.appendChild(item);
inp.value ="";
});

ul.addEventListener("click", function (event) {
    if(event.target.nodeName == "BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
    }

});
