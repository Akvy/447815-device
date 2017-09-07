var writebtn = document.querySelector(".contacts-button");
var feedback = document.querySelector(".modal-write-us");
var close = document.querySelector(".modal-close");
var fullname = document.querySelector("[name=fullname]");
var mail = document.querySelector("[name=email]");
var comments = document.querySelector("[name=comments]");
var form = feedback.querySelector("form");
var loginstorage = localStorage.getItem ("fullname");
var mailstorage = localStorage.getItem ("mail");
var mapbtn = document.querySelector(".map");
var map = document.querySelector(".modal-popup-map");
var mapClose = map.querySelector(".modal-close");
var inputForm = form.querySelector(".input-wrapper");
var inputMail = form.querySelector(".mail-wrapper");
var textareaForm = form.querySelector(".textarea-wrapper");

writebtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedback.classList.remove("modal-hide");
  feedback.classList.add("modal-show");
  if (loginstorage) {
    fullname.value = loginstorage;
    mail.focus();
  }
  if (mailstorage) {
    mail.value = mailstorage;
    comments.focus();
  } else {
    fullname.focus();
  }
});

mapbtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.remove("modal-hide");
  map.classList.add("modal-show");
});

form.addEventListener("submit", function(evt) {
  if (!fullname.value || !mail.value || !comments.value) {
    evt.preventDefault();
    feedback.classList.add("modal-error");
  } else {
    localStorage.setItem("fullname", fullname.value);
    localStorage.setItem("mail", mail.value);
  }
  if (!fullname.value) {
    inputForm.classList.add("modal-invalid");
  } else {
    inputForm.classList.remove("modal-invalid");
  }
  if (!mail.value) {
    inputMail.classList.add("modal-invalid");
  } else {
    inputMail.classList.remove("modal-invalid");
  }
  if (!comments.value) {
    textareaForm.classList.add("modal-invalid");
  } else {
    textareaForm.classList.remove("modal-invalid");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (feedback.classList.contains("modal-show")) {
      feedback.classList.remove("modal-show");
      feedback.classList.add("modal-hide");
      feedback.classList.remove("modal-error");
    }
    if (map.classList.contains("modal-show")) {
      map.classList.remove("modal-show");
      map.classList.add("modal-hide");
    }
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedback.classList.remove("modal-show");
  feedback.classList.add("modal-hide");
  feedback.classList.remove("modal-error");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.remove("modal-show");
  map.classList.add("modal-hide");
});
