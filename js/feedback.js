
      var link = document.querySelector(".adderess-block_btn");
      var popup = document.querySelector(".feedback");
      var overlay = document.querySelector(".feedback__overlay");
      var name = document.querySelector(".feedback__user-name");
      var email = document.querySelector(".feedback__user-email");

      var close = popup.querySelector(".feedback__close");
      var form = popup.querySelector("form");

      var storage = localStorage.getItem("name");

      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("feedback-show");
        overlay.classList.add("feedback__overlay-show");

        if (storage) {
          name.value = storage;
          email.focus();
        } else {
          name.focus();
        }

      });

      close.addEventListener("click", function(event) {
        popup.classList.remove("feedback-show");
        overlay.classList.remove("feedback__overlay-show");

      });

      overlay.addEventListener("click", function(event) {
        popup.classList.remove("feedback-show");
        overlay.classList.remove("feedback__overlay-show");
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("feedback-show")) {
            popup.classList.remove("feedback-show");
            popup.classList.remove("feedback-error");
            overlay.classList.remove("feedback__overlay-show");
          }
        }
      });
