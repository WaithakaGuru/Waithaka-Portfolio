/* functions to create html elements */
export const Element = tag => document.createElement(tag);

export const decorator = (element, styles= [], ...vals) => {
    if(styles.length === 0) throw new console.error("No styles provided");
    for(let i =0; i<styles.length; i++){
        element.style[styles[i]] = vals[i];
    }
}

export const appender = (parent, ...children) => children
    .forEach(child => parent.appendChild(child));
    
export class ServiceComponent {
    constructor(iconPath, title, info, className="service", extra = ''){
        this.title = title;
        this.iconPath = iconPath;
        this.info = info;
        this.className = className;
        this.extra = extra;
    }

    build(){
        const component = Element("div");
            component.classList.add(this.className);
            const img = Element("img");
            img.src = this.iconPath;
            img.alt = "NO IMAGE";
        const title = Element("h3");
            title.innerText = this.title;
        const info = Element("p")
            info.innerText = this.info;
        appender(component, img, title, info);
        return component;
    }
}

export class ContactComponent {
    constructor(iconPath, title, info, className = "route") {
        this.icon =iconPath;
        this.t = title;
        this.info = info;
        this.cls = className;
    }    
    contact = () => new ServiceComponent(this.icon, this.t, this.info, this.cls).build();
}

export class EmailRouteComponent{
    constructor(title, iconPath, emailtxt, emailAddress, clsName="route"){
        this.title = title;
        this.iconPath = iconPath;
        this.emailtxt = emailtxt;
        this.emailAddress = emailAddress;
        this.clsName = clsName;
    }

    make(){
        const component = Element("div");
            component.classList.add(this.clsName);
        const img = Element("img");
            img.href = this.iconPath;
            img.alt = "NO IMAGE";
        const title = Element("h3");
            title.innerText = this.title;
        const email = Element("a");
            email.innerText = this.emailtxt;
            email.href = `mailto:${this.emailAddress}`;
            email.title = `Reach out to me via '${this.emailAddress}'`;
        appender(component, img, title, email);
        return component;
    }
}

export class FormComponent{
    constructor(formClassName, msgPlaceholder){
        this.clsname = formClassName;
        this.msgholder = msgPlaceholder;
    }

    makeForm (namePlaceholder="", emailPlaceholder="", btnInfo="submit", holderclsName ="nameEmail" ) {
        const form = Element("form");
            form.classList.add(this.clsname);
        const holder = Element("div");
            holder.classList.add(holderclsName);
        const nameInput = Element("input");
        const mailInput = Element("input");
             nameInput.placeholder = namePlaceholder; mailInput.placeholder = emailPlaceholder;
        const textInput = Element("textarea");
            textInput.placeholder = this.msgholder;
        const submitBtn = Element("button");
            submitBtn.innerText = btnInfo;
        const box = document.getElementById("formHolder");
        const formInfo = Element("div");
            formInfo.classList.add("form-info");
        const msg = Element("p");
            msg.innerText = "Write a Message:";
        const seeDocsBtn = Element("button");
            seeDocsBtn.innerText = "CV & Documents";

        appender(formInfo, msg, seeDocsBtn)
        appender(form, formInfo);
        appender(holder, nameInput, mailInput);
        appender(box, textInput, submitBtn)
        appender(form, holder, box);

        return form;
    }
}

export class ActionButton{
    constructor(btnInfo, linkPath){
        this.btnInfo = btnInfo;
        this.linkPath = linkPath;
    }

    makeButton () {
        const anchor = Element("a");
            anchor.href = this.linkPath;
        const btn = Element("button");
            anchor.innerText = this.btnInfo;
            btn.classList.add("anchor-btn");
        decorator(anchor, ["text-decoration", "color"], "none", "whitesmoke")
        appender(btn, anchor);
        return  btn;
    }
}


/* Handling the currently viewed section */

    /* match each link to it's respective section */
export function linkToSection(sections, links) {
    const linkSection = {}
    for(let i =0; i<links.length; i++){
        linkSection[links[i]] = sections[i]
    }
    return linkSection;
}

    /* show the first section at page reload */
export function loadFirstSection(sections, clsName){
    for(let i=1; i<sections.length; i++){
        sections[i].classList.add(clsName);
    }
} 

    /* function to clear all sections fron  the page */
export function clearSections(Sections, clsName) {
    Sections.forEach(section => section.classList.add(clsName));
}

    /* function to show a specific selected section */
export function showSection(section, clsName, animClass = ''){
    section.classList.remove(clsName);
    section.classList.add(animClass)
}

    /* Change the styling of the selected link Only */
export function addLinkClass(Links,selectedLink, clsName){
    Links.forEach(link => link.classList.remove(clsName));
    selectedLink.classList.add(clsName);
}

export class PhoneAndEmailComponent {
    constructor(phoneNo, emailAddress){
        this.phone = phoneNo;
        this.email = emailAddress;
    }

    build(){
        const component = Element("div");
            component.classList.add("contact-btns");
        const phoneBtn = Element("a");
            phoneBtn.href = `tel:${this.phone}`;
        const emailBtn = Element("a");
            emailBtn.href = `mailto:${this.email}`;
        appender(Element, phoneBtn, emailBtn);
        return component;
    }
}

export class SocialMediaLinks{
    constructor(){
        
    }
}
