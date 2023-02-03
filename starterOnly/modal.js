function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const submitBtn = document.querySelector(".btn-submit");
const formBody = document.getElementsByName("reserve"); 

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fermer la modale
const closeModalBtn = document.querySelector(".close");

closeModalBtn.addEventListener("click", function(){
  modalbg.style.display = "none";
});

//Confirmation après envoi réussi   
function displayThanks(){

  formBody[0].style.display = "none";
  const modalBody = document.getElementsByClassName("modal-body");
  const confirmMsg = document.createElement("div");
  const confirmBtn = document.createElement("div");
  modalBody[0].appendChild(confirmMsg);
  modalBody[0].appendChild(confirmBtn);
  confirmMsg.setAttribute("class", "confirmation");
  confirmMsg.innerHTML = "Merci pour <br> votre inscription";
  confirmBtn.className = "btn-close";
  confirmBtn.innerHTML = "Fermer";
  confirmBtn.addEventListener("click", function(){
    validate();
  });

}


// Evenement qui va afficher le message de confirmation après avoir rempli le formulaire
submitBtn.addEventListener("click", function(event){
  event.preventDefault();
  displayThanks();
});

//Fermer le formulaire
function validate(){
  formBody[0].submit();
  return true;
}
