let openModal = document.querySelector(".header-start");
let closeModalBtn = document.querySelector(".close-content");
let modal = document.querySelector("#modal-burger");
openModal.onclick = function () {
  document.querySelector("#modal-burger").style.display = "flex";
};
closeModalBtn.onclick = function () {
  document.querySelector("#modal-burger").style.display = "none";
};
window.onclick = function (e) {
  if (e.target === modal) {
    document.querySelector("#modal-burger").style.display = "none";
  }
};

let openMainModal = document.querySelector(".modal-open");
let closeMainModal = document.querySelector(".modal-header-btn");
let closeMain = document.querySelector("#hero");

openMainModal.onclick = function(){
    document.querySelector("#modal").style.display = "block";
};
closeMainModal.onclick = function (){
    document.querySelector("#modal").style.display = "none";
};
closeMain.onclick = function (e) {
    if (e.target === closeMain) {
        document.querySelector("#modal").style.display = "none"
    }
}