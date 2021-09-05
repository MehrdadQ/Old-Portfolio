// Fade in effect
const appearOptions = {
  threshold: 0,
};
const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

// Collapse navbar on touch on mobile view
$(document).ready(function () {
  $(document).click(function (event) {
    var clickover = $(event.target);
    if (!clickover.hasClass("navbar-toggle")) {
      $(".navbar-collapse").collapse("hide");
    }
  });
});

// Fix scroll margin for anchor link when on mobile view
var height = document.documentElement.clientWidth;
if (height < 980) {
  document.getElementById("projects").style["scroll-margin-top"] = "250px";
  document.getElementById("contact").style["scroll-margin-top"] = "250px";
}

function sendEmail() {
  msg = document.getElementById("msg").value;
  subject = document.getElementById("subject").value;
  to = "mehrdad.ghannad@mail.utoronto.ca";
  console.log("llmao");
  window.open("mailto:" + to + "?subject=" + subject + "&body=" + msg);
}

document.getElementById("msg-submit").addEventListener("click", sendEmail);
