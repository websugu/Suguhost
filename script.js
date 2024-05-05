// Sample template data (replace with your own data)
const templates = [
    { name: "Elixir - HTML5 Bootstrap 5...", price: "$10", image: "img_1.png", version:"4.0.0 & 2.1.0", download:"(10k)", update:"3 Months ago", category:"HTML-CSS-JS", frameworks:"Landing Page", descriptionh1:"🎊 Bootstrap 5 version is here! 🎊",preview:"https://fonts.google.com/", descriptionp:"🎁 1 This New Year, we present you the refurbished Elixir to you. Upgraded to Bootstrap 5, this responsive template can take your personal or commercial projects beyond the horizon. You will also get the Bootstrap 4 version as the cherry on top. Do you not want to try it?"},
    { name: "Template 2", price: "$15", image: "img_2.png" , version:"5.0.0 & 2.1.0", download:"(20k)", update:"1 Year ago", category:"HTML-CSS-JS-BOOSTRAP", frameworks:"Business Website", descriptionh1:"🎊 Bootstrap 6 version is here! 🎊",preview:"https://www.w3schools.com/",descriptionp:"🎁 2 This New Year, we present you the refurbished Elixir to you. Upgraded to Bootstrap 5, this responsive template can take your personal or commercial projects beyond the horizon. You will also get the Bootstrap 4 version as the cherry on top. Do you not want to try it?"},
    { name: "Template 3", price: "$20", image: "img_4.jpg", version:"6.0.0 & 2.1.0", download:"(30k)", update:"11 Months ago",category:"HTML-CSS-JS-REACT", frameworks:"Ecommerce Website", descriptionh1:"🎊 Bootstrap 7 version is here! 🎊", preview:"https://www.codingnepalweb.com/",descriptionp:"🎁 3 This New Year, we present you the refurbished Elixir to you. Upgraded to Bootstrap 5, this responsive template can take your personal or commercial projects beyond the horizon. You will also get the Bootstrap 4 version as the cherry on top. Do you not want to try it?"},
    // Add more templates as needed
];

// Function to display templates on the main page
function displayTemplates() {
    const templateContainer = document.getElementById("templateContainer");
    templates.forEach(template => {
        const templateCard = `
            <div class="template" onclick="showTemplateDetails('${template.name}', '${template.price}', '${template.image}','${template.version}','${template.download}', '${template.update}',  '${template.category}', '${template.frameworks}', '${template.descriptionh1}', '${template.descriptionp}', '${template.preview}')">
                <img src="${template.image}" alt="${template.name}">
                <h3>${template.name} <span style="float:right;padding-right:10px">${template.price}</span></h3>
                <small style="padding-left:10px;font-weight: 600;color:rgb(56, 55, 55)"><i class="fa-solid fa-download" style="color: #414244;"></i> ${template.download} download <span style="float:right;padding-right:10px"><a href="${template.preview}">Live Preview</a></span></small>   
            </div>
        `;
        templateContainer.innerHTML += templateCard;
    });
}

// Function to show template details on a separate page
function showTemplateDetails(name, price, image, version, download, update, category,frameworks,descriptionh1,descriptionp, preview) {
    localStorage.setItem("selectedTemplate", JSON.stringify({ name, price, image, version, download, update, category, frameworks, descriptionh1, descriptionp, preview}));
    window.location.href = "template-details.html";
}

// Function to load template details on the details page
function loadTemplateDetails() {
    const templateDetails = JSON.parse(localStorage.getItem("selectedTemplate"));
    if (templateDetails) {
        document.getElementById("templateImage").src = templateDetails.image;
        document.getElementById("templateName").textContent = templateDetails.name;
        document.getElementById("templatePrice").textContent = templateDetails.price;
        document.getElementById("templateVersion").textContent = templateDetails.version;
        document.getElementById("templateDownload").textContent = templateDetails.download;
        document.getElementById("templateUpdate").textContent = templateDetails.update;
        document.getElementById("templateFrameworks").textContent = templateDetails.frameworks;
        document.getElementById("templateCategory").textContent = templateDetails.category;
        document.getElementById("templateDescription").textContent = templateDetails.descriptionh1;
        document.getElementById("templateDescriptionp").textContent = templateDetails.descriptionp;
        document.getElementById("templatePreview").href = templateDetails.preview;
    }
}

// Load template details when the details page is loaded
if (window.location.pathname.includes("template-details.html")) {
    loadTemplateDetails();
} else {
    displayTemplates();
}
