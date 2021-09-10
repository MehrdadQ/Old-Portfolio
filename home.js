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
var width = document.documentElement.clientWidth;
if (width < 980) {
  document.getElementById("projects").style["scroll-margin-top"] = "250px";
  document.getElementById("contact").style["scroll-margin-top"] = "250px";
}

if (width < 557) {
  smalls = document.querySelectorAll(".project");
  for (var i = 0, element; (element = smalls[i]); i++) {
    element.style["height"] = "700px";
  }
}

if (width < 400) {
  smalls = document.querySelectorAll(".project");
  for (var i = 0, element; (element = smalls[i]); i++) {
    element.style["height"] = "1000px";
  }
}

if (width < 400) {
  links = document.querySelectorAll(".link-container");
  for (var i = 0, element; (element = links[i]); i++) {
    element.style["flex-direction"] = "column";
  }
}

function sendEmail() {
  msg = document.getElementById("msg").value;
  subject = document.getElementById("subject").value;
  to = "mehrdad.ghannad@mail.utoronto.ca";
  window.open("mailto:" + to + "?subject=" + subject + "&body=" + msg);
}

document.getElementById("msg-submit").addEventListener("click", sendEmail);
