 /* Today as of 9th January 2025 - task must be completed - -- Portfolio frontEnd -- */
import {FormComponent, appender, ContactComponent, ServiceComponent, ActionButton, Element, EmailRouteComponent} from "./methods.mjs";

/* About me Section */
const aboutSection = document.getElementById("item2");

const hireBtn = new ActionButton("Hire me", "./").makeButton();
const docsBtn = new ActionButton("See Documents", "#item3").makeButton();
appender(aboutSection, hireBtn, docsBtn);


/* Services Section */
const serviceSection = document.getElementById("item3");

/* Various services provided */
const service1 = new ServiceComponent("./", "Web Development", 
    "I create proffessional dynamic websites", "service", "web-dev").build();
const service2 = new ServiceComponent("./Utilities/webDesign.svg", "Web Design", 
    "I design frontend layouts, wirefraes and mockups").build();
const service3 = new ServiceComponent("./", "Mobile App Development",
     "I am Growing in building native Apps using current technologies").build();
const service4 = new ServiceComponent("./", "Algorithm Analysis and Design", 
    "I optimize and develop algorithms ensuring best system's resources utilization").build();
const service5=  new ServiceComponent("./", "System Analysis and design", 
    "I use modern standards such and UML diagrams to create nice system repesentations").build();
const service6 = new ServiceComponent("./", "Networking", 
    "I am growing in learnig and developing computer networks").build();
const service7 = new ServiceComponent("./", "Artificial Intelligence", 
    "I am growing in learnig and developing neural networks and understanding the working of AI models").build();
const service8 = new ServiceComponent("./", "Artificial Intelligence", 
    "I am growing in learnig and developing neural networks and understanding the working of AI models").build();
appender(serviceSection, service1, service2, service3, service4, service5,service6, service7, service8);

 /* contact me Section */
const contactSection = document.getElementById("item5");
const routeHolder = document.querySelector(".contact-routes");

    /* contact routes */
const phone = new ContactComponent("./", "Phone No.", "Call: 0725676491").contact();
const location = new ContactComponent("./", "Location", "Murang'a Town, Kenya").contact();
const email = new EmailRouteComponent("Email", "./", "Click here to Email me", 
    "waithakaoffices@gmail.com").make();
appender(routeHolder, phone, location, email);

/* Send-message Form */
const formPlan = new FormComponent("contact-form","Type your message");
const form = formPlan.makeForm("Enter you name", "Enter your email address",
    "Send Message", "nameEmail");
appender(contactSection, form);

/* Handling section to be viewed */
import { loadFirstSection, clearSections, linkToSection, showSection, addLinkClass} from "./methods.mjs";

const Links = document.querySelectorAll(".link");
const Sections = document.querySelectorAll(".item");
const linkSections = linkToSection(Sections, Links);

    /* showing the first section asthe default on page load */
document.addEventListener("DOMContentLoaded", () => {
    loadFirstSection(Sections, "unselected-section");
    addLinkClass(Links, Links[0], "selected-link");
})  

    /* show Only the respective/corresponding section when a link is clicked */ 
Links.forEach(link => link.onclick = () =>{
    clearSections(Sections, "unselected-section");
    showSection(linkSections[link], "unselected-section", "selected-sectionAnim");
    window.location.href = `index.html#${linkSections[link].id}`;
    addLinkClass(Links,link, "selected-link");
});


