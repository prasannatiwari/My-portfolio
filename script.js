const progressBars = [
  { selector: ".html-css", valueSelector: ".html-progress", endValue: 90, color: "#fca61f" },
  { selector: ".javascript", valueSelector: ".javascript-progress", endValue: 75, color: "#7d2ae8" },
  { selector: ".php", valueSelector: ".php-progress", endValue: 80, color: "#20c997" },
  { selector: ".reactjs", valueSelector: ".reactjs-progress", endValue: 30, color: "#3f396d" }
];

progressBars.forEach(({ selector, valueSelector, endValue, color }) => {
  let progressElement = document.querySelector(selector);
  let valueElement = document.querySelector(valueSelector);
  let startValue = 0;
  let speed = 30;

  let progressInterval = setInterval(() => {
    startValue++;
    valueElement.textContent = `${startValue}%`;
    progressElement.style.background = `conic-gradient(${color} ${startValue * 3.6}deg, #ededed 0deg)`;
    
    if (startValue === endValue) clearInterval(progressInterval);
  }, speed);
});

// Filter functionality
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value === "all") {
      $(".post").show(1000);
    } else {
      $(".post").not("." + value).hide(1000);
      $(".post").filter("." + value).show(1000);
    }
  });
});

// Sticky navbar functionality
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar-top");
    if (window.scrollY > 50) {
      navbar.classList.add("fixed-top");
      document.body.style.paddingTop = document.querySelector(".navbar").offsetHeight + "px";
    } else {
      navbar.classList.remove("fixed-top");
      document.body.style.paddingTop = "0";
    }
  });

  // Resume section toggle functionality
  const resumeSection = document.getElementById("resume");
  const resumeLink = document.querySelector('a[href="#resume"]');
  const closeResume = document.getElementById("close-resume");

  // Initially hide the resume section
  resumeSection.style.display = "none";

  resumeLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Show the resume section
    resumeSection.style.display = "block";

    // Smoothly scroll to it
    resumeSection.scrollIntoView({ behavior: "smooth" });
  });

  // Close button functionality
  closeResume.addEventListener("click", function () {
    resumeSection.style.display = "none";
  });
});

// Back to top button functionality
const backToTopButton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  backToTopButton.style.display = (document.documentElement.scrollTop > 20) ? "block" : "none";
};

backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Theme toggle functionality
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

body.classList.add('light-mode');

toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        toggleButton.textContent = 'Switch to Dark Mode';
    }
});

// About section toggle
document.getElementById("about-link").addEventListener("click", function() {
  var aboutSection = document.getElementById("about");
  
  if (aboutSection.style.display === "none" || aboutSection.style.display === "") {
    aboutSection.style.display = "block"; 
  } else {
    aboutSection.style.display = "none";
  }

  aboutSection.scrollIntoView({ behavior: 'smooth' });
});
