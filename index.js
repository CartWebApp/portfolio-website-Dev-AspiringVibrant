var about = document.getElementById("about");
var resume = document.getElementById("resume");
var portfolio = document.getElementById("portfolio");
var contact = document.getElementById("contact");
var title = document.getElementById("title");

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
    paragraph.innerHTML = "In this page, it contains brief information about me for you to get to know me better."
}

function oldTitle() {
    title.innerHTML = "Greeting!";
    paragraph.innerHTML = "Hello! Welcome to my website!"
}

function changeResume() {
    title.innerHTML = "Resume";
    paragraph.innerHTML = "In this page, you can find all my skill that I have made throughout the years!"
}

function changePortfolio() {
    title.innerHTML = "Portfolio";
    paragraph.innerHTML = "In this page, you can find all the work that I showcase to evaluate my skills!"
}

function changeContact() {
    title.innerHTML = "Contact";
    paragraph.innerHTML = "In this page, you can find all ways to contact me if you need to hire someone to work on a project on!"
}