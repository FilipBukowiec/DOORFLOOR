const ABOUTUS = document.getElementById("ABOUTUS");
const OFFER = document.getElementById("OFFER");
const WORKS = document.getElementById("WORKS");
const CONTACT = document.getElementById("CONTACT")



const aboutus_content = document.querySelector(".aboutus");
const offer_content = document.querySelector(".offer");
const works_content = document.querySelector(".works");
const contact_content = document.querySelector(".contact");


ABOUTUS.addEventListener("click", () => {
    aboutus_content.scrollIntoView({ behavior: 'smooth' });
})



OFFER.addEventListener("click", () => {
    offer_content.scrollIntoView({ behavior: 'smooth' });
})

WORKS.addEventListener("click", () => {
    works_content.scrollIntoView({ behavior: 'smooth' });
})
CONTACT.addEventListener("click", () => {
    contact_content.scrollIntoView({ behavior: 'smooth' });
})