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
// Objet contenant les champs du formulaire
const form = {
  first: document.getElementById("first"),
  last: document.getElementById("last"),
  email: document.getElementById("email"),
  birthdate: document.getElementById("birthdate"),
  quantity: document.getElementById("quantity"),
  city: document.querySelectorAll("input[type=radio]"),
  terms: document.getElementById("checkbox1")
};
// Objet Regex pour valider l'email, le nom et la quantité
const regex = {
  mail: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  name: /^[a-zA-Z-]{1,}[^\d.+*/$%µ!§:;,?={}²&~"#()`@]$/,
  quantity: /^\d{1,}$/
};

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fermer la modale
const closeModalBtn = document.querySelector(".close");

closeModalBtn.addEventListener("click", function () {
  modalbg.style.display = "none";
});

// Validation d'un champ de texte avec le Regex
function validText(entry, regex) {
  if (entry.match(regex)) {
    return true
  } else {
    return false
  }
}

// Validation de la date de naissance
function isDateValid() {
  let date = new Date(form.birthdate.value).getTime();
  let year = form.birthdate.value.substring(0, 2);
  if (parseInt(year) < 19 || isNaN(date) || Date.now() < date) {
    return false;
  } else {
    return true;
  }
}

// Validation de la selection de la ville
function isCityValid() {
  for (let i = 0; i < form.city.length; i++) {
    if (form.city[i].checked) {
      return true;
    }
  }
  return false;
}

// Validation des conditions d'utilisation
function isTermsValid() {
  if (form.terms.checked) {
    return true;
  } else {
    return false;
  }
}

//Confirmation après envoi réussi   
function displayThanks() {

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
  confirmBtn.addEventListener("click", function () {
    validate();
  });

}


// Evenement qui va afficher le message de confirmation après avoir rempli le formulaire
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (validText(form.first.value, regex.name) && validText(form.last.value, regex.name) &&
    validText(form.email.value, regex.mail) && validText(form.quantity.value, regex.quantity) &&
    isDateValid() && isCityValid() && isTermsValid()) {
    displayThanks();
  }
});

//Fermer le formulaire
function validate() {
  formBody[0].submit();
  return true;
}
