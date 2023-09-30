// ================Password-eye-validation====================================//
document.addEventListener("DOMContentLoaded", function () {
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("exampleInputPassword1");

  togglePassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePassword.classList.remove("fa-eye");
      togglePassword.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      togglePassword.classList.remove("fa-eye-slash");
      togglePassword.classList.add("fa-eye");
    }
  });
});
// ================Counter-js====================================//

function animateCounters() {
  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 1500,
          easing: "linear",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
}

animateCounters();

setInterval(animateCounters, 2000);

// ==================My account-setting page===========================//

// Function to show content//
function showContent(contentId) {
  // Hide all content sections
  document.querySelectorAll(".hidden").forEach(function (el) {
    el.style.display = "none";
  });

  // Show the selected content section
  document.getElementById(contentId).style.display = "block";
}

// By default, show the "Account Settings" content
showContent("account-setting");
//  ======================End===========================================//

