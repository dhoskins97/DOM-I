const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const headerImage = document.getElementById("cta-img");
headerImage.setAttribute('src', siteContent["cta"]["img-src"]);

const longImage = document.getElementById("middle-img");
longImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const nav = document.querySelector("nav");
const navItem = document.querySelectorAll("a");

navItem[0].textContent = siteContent["nav"]["nav-item-1"];
navItem[1].textContent = siteContent["nav"]["nav-item-2"];
navItem[2].textContent = siteContent["nav"]["nav-item-3"];
navItem[3].textContent = siteContent["nav"]["nav-item-4"];
navItem[4].textContent = siteContent["nav"]["nav-item-5"];
navItem[5].textContent = siteContent["nav"]["nav-item-6"];

navItem.forEach(function(elem){
elem.style.color = "green";
});

const bigText = document.querySelector("h1");

bigText.textContent = siteContent["cta"]["h1"];

const buttonText = document.querySelector("button");
buttonText.textContent = siteContent["cta"]["button"];

const subHeader = document.querySelectorAll("h4");
const pTag = document.querySelectorAll("p");

subHeader[0].textContent = siteContent["main-content"]["features-h4"];
pTag[0].textContent = siteContent["main-content"]["features-content"];

subHeader[1].textContent = siteContent["main-content"]["about-h4"];
pTag[1].textContent = siteContent["main-content"]["about-content"];

subHeader[2].textContent = siteContent["main-content"]["services-h4"];
pTag[2].textContent = siteContent["main-content"]["services-content"];

subHeader[3].textContent = siteContent["main-content"]["product-h4"];
pTag[3].textContent = siteContent["main-content"]["product-content"];

subHeader[4].textContent = siteContent["main-content"]["vision-h4"];
pTag[4].textContent = siteContent["main-content"]["vision-content"];

subHeader[5].textContent = siteContent["contact"]["contact-h4"];
pTag[5].textContent = siteContent["contact"]["address"];
pTag[6].textContent = siteContent["contact"]["phone"];
pTag[7].textContent = siteContent["contact"]["email"];

pTag[8].textContent = siteContent["footer"]["copyright"];