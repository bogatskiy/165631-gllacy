var link = document.querySelector(".adderess-block_btn");
var popup = document.querySelector(".feedback");
var overlay = document.querySelector(".feedback__overlay");

var userName = document.getElementById("feedback-name");
var userEmail = document.getElementById("feedback-email");
var userMessage = document.getElementById("feedback-message");

var close = popup.querySelector(".feedback__close");
var form = popup.querySelector("form");

link.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.add("feedback-show");
	overlay.classList.add("feedback__overlay-show");

	if (localStorage.getItem("name") && localStorage.getItem("email")) {
		userName.value = localStorage.getItem("name");
		userEmail.value = localStorage.getItem("email");
		userMessage.focus();
	}

});

form.addEventListener("submit", function (event) {

	if (!userName.value && !userEmail.value) {
		event.preventDefault();
	} else {
		localStorage.setItem("name", userName.value);
		localStorage.setItem("email", userEmail.value);
	}

});

close.addEventListener("click", function (event) {
	popup.classList.remove("feedback-show");
	overlay.classList.remove("feedback__overlay-show");

});

overlay.addEventListener("click", function (event) {
	popup.classList.remove("feedback-show");
	overlay.classList.remove("feedback__overlay-show");
});

window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("feedback-show")) {
			popup.classList.remove("feedback-show");
			overlay.classList.remove("feedback__overlay-show");
		}
	}
});
