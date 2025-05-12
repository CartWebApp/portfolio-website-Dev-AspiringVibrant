let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  changeText();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  changeText();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let desc = [
  "I learned how to stylize better with the CSS code on Visual Studio Code from how to layout website to make it look professional. After I coded this website, I understand better about the function of display: flex.",
  "I learned more about media queries such as hiding content for print queries in CSS and how to code a print function in JavaScript.",
  "I did a budget calculator on saving budget. It has a 50/30/20 rule after the user submitted in their answer. When typing in the number, my code runs through each function to get the result. At the end, it shows a pie chart on the max the user can spend to not be in debt.",
  "In this project, I worked in a team of five. Three being programmers and other two focus on UX design. I realized why teamwork was important when creating a big project. Each of us have a different way to direct the project. When pushing and pulling commits from Github repository, there is a great chance that a functionality can break.",
]

function changeText() {
  if (slideIndex === 1) {
    document.getElementById("takeaway").innerHTML = `${desc[0]}`
  } else if (slideIndex === 2) {
    document.getElementById("takeaway").innerHTML = `${desc[1]}`
  } else if (slideIndex === 3) {
    document.getElementById("takeaway").innerHTML = `${desc[2]}`
  } else if (slideIndex === 4) {
    document.getElementById("takeaway").innerHTML = `${desc[3]}`
  }
}