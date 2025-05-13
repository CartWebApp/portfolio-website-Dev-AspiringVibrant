var about = document.getElementById("about");
var resume = document.getElementById("resume");
var portfolio = document.getElementById("portfolio");
var contact = document.getElementById("contact");
var title = document.getElementById("title");
var myName = document.querySelector("h2");

about.addEventListener("mouseover", changeAbout);
about.addEventListener("mouseout", oldTitle);
resume.addEventListener("mouseover", changeResume);
resume.addEventListener("mouseout", oldTitle);
portfolio.addEventListener("mouseover", changePortfolio);
portfolio.addEventListener("mouseout", oldTitle);
contact.addEventListener("mouseover", changeContact);
contact.addEventListener("mouseout", oldTitle);

function changeAbout() {
    title.innerHTML = "About";
    myName.innerHTML = "";
    paragraph.innerHTML = "In this page, it contains brief information about me for you to get to know me better."
}

function oldTitle() {
    title.innerHTML = "Greeting!";
    myName.innerHTML = "I'm Devin Silkeutsabay!"
    paragraph.innerHTML = "Welcome to my website! Feel free to explore and discover about me!"
}

function changeResume() {
    title.innerHTML = "Resume";
    myName.innerHTML = "";
    paragraph.innerHTML = "In this page, you can find all my skill that I have made throughout the years!"
}

function changePortfolio() {
    title.innerHTML = "Portfolio";
    myName.innerHTML = "";
    paragraph.innerHTML = "In this page, you can find all the work that I showcase to evaluate my skills!"
}

function changeContact() {
    title.innerHTML = "Contact";
    myName.innerHTML = "";
    paragraph.innerHTML = "In this page, you can find all ways to contact me if you need to hire someone to work on a project on!"
}