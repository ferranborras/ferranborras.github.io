const WHATSAPP_1 = "34 634 67 79 13";
const WHATSAPP_2 = "34 634 67 79 13";
const WHATSAPP_3 = "34 634 67 79 13";
const EMAIL = "example@gmail.com";
const EMAIL_SUBJECT = "Contacto web";
const EMAIL_BODY = "Hola, quisiera hacer una consulta sobre el siguiente asunto.";
const INSTAGRAM = "disseny.amb.pedra";

// Main variables
let initButton;
let projectsButton;
let catalogueButton;
let findUsButton;

// Previe variables
let previewBackground;
let imagePreview;
let exitCross;

// Init variables
let numImages = 6;
let welcome;
let imagesContainer;
let viewMore;

// Projects variables
let onProjects;
let projectsContainer;
let kitchensTitle;
let bathsTitle;
let floorsTitle;
let othersTitle;
let dotsContainer;
let kitchensDot;
let bathsDot;
let floorsDot;
let othersDot;
let kitchensContainer;
let bathsContainer;
let floorsContainer;
let othersContainer;
let newMid;
let newMidDot;
let onTimeout;
let titleContainerDisplayed;
let onAnimation;

// Catalogue variables
let catalogueTitle;
let settingsContainer;
let filtersSettings;
let sortSettings;
let filtersButton;
let sortButton;
let catalogueSection;
let catalogueContainer;
let nameList;
let colorList;
let brandsList;
let saturationList;
let stoneList;
let catalogueList = [];
let onSortSettings;
let onSortButton;
let sortFixed;
let onFiltersSettings;
let onFiltersButton;
let filtersFixed;

// FindUs variables
let questionsContainer;
let locationContainer;

function printArray(array) {
    let print = "No se han encontrado resultados.";
    if (array.length > 0) {
        print = "[[";
        for (let i = 0; i < array.length-1; i++) {
            for (let j = 0; j < array[0].length-1; j++) {
                print += array[i][j]+", ";
            }
            print += array[i][array[i].length-1]+"],\n[";
        }
        for (let j = 0; j < array[0].length-1; j++) {
            print += array[array.length-1][j]+", ";
        }
        print += array[array.length-1][array[0].length-1]+"]]\nSize: "+array.length;
    }
}

function copy(array) {
    let copy = [];
    let row;
    for (let i = 0; i < array.length; i++) {
        row = [];
        for (let j = 0; j < array[0].length; j++) {
            row.push(array[i][j]);
        }
        copy.push(row);
    }
    return copy;
}

window.onload = start();

function start() {
    excel_file = document.createElement("input")
    let att;

    // Banner
    let banner = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "banner";
    banner.setAttributeNode(att);

    let logo = document.createElement("img");
    att = document.createAttribute("id");
    att.value = "logo";
    logo.setAttributeNode(att);
    att = document.createAttribute("src");
    att.value = "images/init/logo.png";
    logo.setAttributeNode(att);
    banner.appendChild(logo);

    let iconHidden = document.createElement("img");
    att = document.createAttribute("id");
    att.value = "menuIconHidden";
    iconHidden.setAttributeNode(att);
    att = document.createAttribute("src");
    att.value = "images/menu/icon.png";
    iconHidden.setAttributeNode(att);

    banner.appendChild(iconHidden);
    document.body.appendChild(banner);

    // Menu
    let menuContainer = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "menuContainer";
    menuContainer.setAttributeNode(att);

    let icon = document.createElement("img");
    att = document.createAttribute("id");
    att.value = "menuIcon";
    icon.setAttributeNode(att);
    att = document.createAttribute("src");
    att.value = "images/menu/icon.png";
    icon.setAttributeNode(att);
    menuContainer.appendChild(icon);

    let menu = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "menuInit";
    menu.setAttributeNode(att);

    // Init button
    initButton = document.createElement("button");
    att = document.createAttribute("id");
    att.value = "initButton";
    initButton.setAttributeNode(att);
    att = document.createAttribute("class");
    att.value = "menuButton";
    initButton.setAttributeNode(att);
    att = document.createAttribute("type");
    att.value = "button";
    initButton.setAttributeNode(att);
    att = document.createAttribute("onclick");
    att.value = "showInit()";
    initButton.setAttributeNode(att);

    let backMenuButton = document.createElement("div");
    att = document.createAttribute("class");
    att.value = "backMenuButton";
    backMenuButton.setAttributeNode(att);

    let menuIcon = document.createElement("img");
    att = document.createAttribute("class");
    att.value = "menuIcon";
    menuIcon.setAttributeNode(att);
    att = document.createAttribute("src");
    att.value = "images/menu/initIcon.png";
    menuIcon.setAttributeNode(att);
    backMenuButton.appendChild(menuIcon);

    let menuText = document.createElement("p");
    att = document.createAttribute("class");
    att.value = "menuText";
    menuText.setAttributeNode(att);
    menuText.innerHTML = "INICIO";

    backMenuButton.appendChild(menuText);
    initButton.appendChild(backMenuButton);
    menu.appendChild(initButton);

    // Projects button
    projectsButton = document.createElement("button");
    att = document.createAttribute("id");
    att.value = "projectsButton";
    projectsButton.setAttributeNode(att);
    att = document.createAttribute("class");
    att.value = "menuButton";
    projectsButton.setAttributeNode(att);
    att = document.createAttribute("type");
    att.value = "button";
    projectsButton.setAttributeNode(att);
    att = document.createAttribute("onclick");
    att.value = "showProjects()";
    projectsButton.setAttributeNode(att);

    backMenuButton = document.createElement("div");
    att = document.createAttribute("class");
    att.value = "backMenuButton";
    backMenuButton.setAttributeNode(att);

    menuIcon = document.createElement("img");
    att = document.createAttribute("class");
    att.value = "menuIcon";
    menuIcon.setAttributeNode(att);
    att = document.createAttribute("src");
    att.value = "images/menu/projectsIcon.png";
    menuIcon.setAttributeNode(att);
    backMenuButton.appendChild(menuIcon);

    menuText = document.createElement("p");
    att = document.createAttribute("class");
    att.value = "menuText";
    menuText.setAttributeNode(att);
    menuText.innerHTML = "PROYECTOS";
    
    backMenuButton.appendChild(menuText);
    projectsButton.appendChild(backMenuButton);
    menu.appendChild(projectsButton);

    // Catalogue button
    catalogueButton = document.createElement("button");
    att = document.createAttribute("id");
    att.value = "catalogueButton";
    catalogueButton.setAttributeNode(att);
    att = document.createAttribute("class");
    att.value = "menuButton";
    catalogueButton.setAttributeNode(att);
    att = document.createAttribute("type");
    att.value = "button";
    catalogueButton.setAttributeNode(att);
    att = document.createAttribute("onclick");
    att.value = "showCatalogue()";
    catalogueButton.setAttributeNode(att);

    backMenuButton = document.createElement("div");
    att = document.createAttribute("class");
    att.value = "backMenuButton";
    backMenuButton.setAttributeNode(att);

    backMenuButton = document.createElement("div");
    att = document.createAttribute("class");
    att.value = "backMenuButton";
    backMenuButton.setAttributeNode(att);

    menuIcon = document.createElement("img");
    att = document.createAttribute("class");
    att.value = "menuIcon";
    menuIcon.setAttributeNode(att);
    att = document.createAttribute("src");
    att.value = "images/menu/catalogueIcon.png";
    menuIcon.setAttributeNode(att);
    backMenuButton.appendChild(menuIcon);

    menuText = document.createElement("p");
    att = document.createAttribute("class");
    att.value = "menuText";
    menuText.setAttributeNode(att);
    menuText.innerHTML = "CAT&AacuteLOGO";
    
    backMenuButton.appendChild(menuText);
    catalogueButton.appendChild(backMenuButton);
    menu.appendChild(catalogueButton);

    // FindUs button
    findUsButton = document.createElement("button");
    att = document.createAttribute("id");
    att.value = "findUsButton";
    findUsButton.setAttributeNode(att);
    att = document.createAttribute("class");
    att.value = "menuButton";
    findUsButton.setAttributeNode(att);
    att = document.createAttribute("type");
    att.value = "button";
    findUsButton.setAttributeNode(att);
    att = document.createAttribute("onclick");
    att.value = "showFindUs()";
    findUsButton.setAttributeNode(att);

    backMenuButton = document.createElement("div");
    att = document.createAttribute("class");
    att.value = "backMenuButton";
    backMenuButton.setAttributeNode(att);

    menuIcon = document.createElement("img");
    att = document.createAttribute("class");
    att.value = "menuIcon";
    menuIcon.setAttributeNode(att);
    att = document.createAttribute("src");
    att.value = "images/menu/findUsIcon.png";
    menuIcon.setAttributeNode(att);
    backMenuButton.appendChild(menuIcon);

    menuText = document.createElement("p");
    att = document.createAttribute("class");
    att.value = "menuText";
    menuText.setAttributeNode(att);
    menuText.innerHTML = "ENCU&EacuteNTRANOS";
    
    backMenuButton.appendChild(menuText);
    findUsButton.appendChild(backMenuButton);
    menu.appendChild(findUsButton);
    menuContainer.appendChild(menu);
    document.body.appendChild(menuContainer);

    createPreview();
    createInit();
    createProjects();
    createCatalogue();
    createFindUs();
    showInit();
    hidePreview();
}

// Init functions
function createInit() {
    let att;

    // Welcome
    welcome = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "welcome";
    welcome.setAttributeNode(att);

    let title = document.createElement("h3");
    att = document.createAttribute("id");
    att.value = "title";
    title.setAttributeNode(att);
    title.innerHTML = "¡BIENVENIDO!";
    welcome.appendChild(title);

    let menuText = document.createElement("p");
    att = document.createAttribute("id");
    att.value = "menuText";
    menuText.setAttributeNode(att);
    menuText.innerHTML = "Lorem ipsum dolor sit amet consectetur adipiscing, "+
    "elit imperdiet massa ornare ante sociosqu, mattis risus ad egestas torquent. "+
    "Hendrerit nullam habitasse lacus sollicitudin libero urna torquent cras proin "+
    "eget montes massa porta, scelerisque platea feugiat fringilla nascetur egestas ";
    welcome.appendChild(menuText);
    document.body.appendChild(welcome);

    // Images
    imagesContainer = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "imagesContainer";
    imagesContainer.setAttributeNode(att);

    let initImages = [
        "images/projects/kitchens/img5.png",
        "images/projects/kitchens/img6.png",
        "images/projects/kitchens/img1.png",
        "images/projects/kitchens/img4.png",
        "images/projects/kitchens/img12.png",
        "images/projects/others/img5.png",
    ]
    let imageProjects;
    for (let img of initImages) {
        imageProjects = document.createElement("button");
        att = document.createAttribute("class");
        att.value = "imageProjects";
        imageProjects.setAttributeNode(att);
        att = document.createAttribute("type");
        att.value = "button";
        imageProjects.setAttributeNode(att);
        att = document.createAttribute("onclick");
        att.value = "showPreview('"+img+"')";
        imageProjects.setAttributeNode(att);
        imageProjects.style.backgroundImage = "url('"+img+"')";
        imagesContainer.appendChild(imageProjects);
    }
    document.body.appendChild(imagesContainer);

    // View more
    viewMore = document.createElement("button");
    att = document.createAttribute("id");
    att.value = "viewMore";
    viewMore.setAttributeNode(att);
    att = document.createAttribute("onclick");
    att.value = "showProjects()";
    viewMore.setAttributeNode(att);

    let viewMoreText = document.createElement("p");
    att = document.createAttribute("id");
    att.value = "viewMoreText";
    viewMoreText.setAttributeNode(att);
    viewMoreText.innerHTML = "Ver m&aacutes";
    viewMore.appendChild(viewMoreText);
    document.body.appendChild(viewMore);

    createFooter("Init");
}

function showInit() {
    hideProjects();
    hideCatalogue();
    hideFindUs();

    document.documentElement.scrollTop = 0;

    initButton.disabled = true;
    initButton.setAttribute("aria-disabled", true);

    welcome.style.display = "flex";
    imagesContainer.style.display = "flex";
    viewMore.style.display = "flex";

    showFooter("Init");
}

function hideInit() {
    hideFooter("Init");
    initButton.disabled = false;
    initButton.setAttribute("aria-disabled", false);

    welcome.style.display = "none";
    imagesContainer.style.display = "none";
    viewMore.style.display = "none";
}

// Projects function
function createProjects() {
    let att;
    let newImage;
    let kitchenImages = [
        "img1.png",
        "img2.png",
        "img3.png",
        "img4.png",
        "img5.png",
        "img6.png",
        "img7.png",
        "img8.png",
        "img9.png",
        "img10.png",
        "img11.png",
        "img12.png"
    ];
    let bathImages = [
        "img1.png",
        "img2.png"
    ];
    let floorImages = [
        "placeHolder.png",
        "placeHolder.png",
        "placeHolder.png",
        "placeHolder.png",
        "placeHolder.png",
        "placeHolder.png",
        "placeHolder.png",
        "placeHolder.png"
    ];
    let othersImages = [
        "img1.png",
        "img2.png",
        "img3.png",
        "img4.png",
        "img5.png",
        "img6.png",
    ];
    /*
    // Banners
    projectsContainer = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "projectsTitleContainer";
    projectsContainer.setAttributeNode(att);

    // Kitchen title
    kitchensTitle = document.createElement("div");
    att = document.createAttribute("class");
    att.value = "projectsTitle";
    kitchensTitle.setAttributeNode(att);
    kitchensTitle.style.backgroundImage = "url(/images/projects/title/img1.png)";

    let titleText = document.createElement("p");
    att = document.createAttribute("class");
    att.value = "titleText";
    titleText.setAttributeNode(att);
    titleText.innerHTML = "COCINAS";

    kitchensTitle.appendChild(titleText);
    projectsContainer.appendChild(kitchensTitle);

    // Baths title
    bathsTitle = document.createElement("div");
    att = document.createAttribute("class");
    att.value = "projectsTitle";
    bathsTitle.setAttributeNode(att);
    bathsTitle.style.backgroundImage = "url(/images/projects/title/img2.png)";

    titleText = document.createElement("p");
    att = document.createAttribute("class");
    att.value = "titleText";
    titleText.setAttributeNode(att);
    titleText.innerHTML = "BA&NtildeOS";

    bathsTitle.appendChild(titleText);
    projectsContainer.appendChild(bathsTitle);

    // Floors title
    floorsTitle = document.createElement("div");
    att = document.createAttribute("class");
    att.value = "projectsTitle";
    floorsTitle.setAttributeNode(att);
    floorsTitle.style.backgroundImage = "url(/images/projects/title/img3.png)";
    
    titleText = document.createElement("p");
    att = document.createAttribute("class");
    att.value = "titleText";
    titleText.setAttributeNode(att);
    titleText.innerHTML = "SUELOS";

    floorsTitle.appendChild(titleText);
    projectsContainer.appendChild(floorsTitle);

    // Others title
    othersTitle = document.createElement("div");
    att = document.createAttribute("class");
    att.value = "projectsTitle";
    othersTitle.setAttributeNode(att);
    othersTitle.style.backgroundImage = "url(/images/projects/title/img4.png)";
    
    titleText = document.createElement("p");
    att = document.createAttribute("class");
    att.value = "titleText";
    titleText.setAttributeNode(att);
    titleText.innerHTML = "OTROS";

    othersTitle.appendChild(titleText);
    projectsContainer.appendChild(othersTitle);
    document.body.appendChild(projectsContainer);

    // Dots container
    dotsContainer = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "dotsContainer";
    dotsContainer.setAttributeNode(att);

    // Kitchen dot
    kitchensDot = document.createElement("button");
    att = document.createAttribute("class");
    att.value = "projectsDot";
    kitchensDot.setAttributeNode(att);
    att = document.createAttribute("type");
    att.value = "button";
    kitchensDot.setAttributeNode(att);
    att = document.createAttribute("onclick");
    att.value = "showKitchens()";
    kitchensDot.setAttributeNode(att);
    kitchensDot.innerHTML = "Cocinas";
    dotsContainer.appendChild(kitchensDot);

    // Baths dot
    bathsDot = document.createElement("button");
    att = document.createAttribute("class");
    att.value = "projectsDot";
    bathsDot.setAttributeNode(att);
    att = document.createAttribute("type");
    att.value = "button";
    bathsDot.setAttributeNode(att);
    att = document.createAttribute("onclick");
    att.value = "showBaths()";
    bathsDot.setAttributeNode(att);
    bathsDot.innerHTML = "Ba&ntildeos";
    dotsContainer.appendChild(bathsDot);

    // Floors dot
    floorsDot = document.createElement("button");
    att = document.createAttribute("class");
    att.value = "projectsDot";
    floorsDot.setAttributeNode(att);
    att = document.createAttribute("type");
    att.value = "button";
    floorsDot.setAttributeNode(att);
    att = document.createAttribute("onclick");
    att.value = "showFloors()";
    floorsDot.setAttributeNode(att);
    floorsDot.innerHTML = "Suelos";
    dotsContainer.appendChild(floorsDot);

    // Others dot
    othersDot = document.createElement("button");
    att = document.createAttribute("class");
    att.value = "projectsDot";
    othersDot.setAttributeNode(att);
    att = document.createAttribute("type");
    att.value = "button";
    othersDot.setAttributeNode(att);
    att = document.createAttribute("onclick");
    att.value = "showOthers()";
    othersDot.setAttributeNode(att);
    othersDot.innerHTML = "Otros";
    dotsContainer.appendChild(othersDot);
    document.body.appendChild(dotsContainer);
    */

    // Kitchens container
    kitchensContainer = document.createElement("div");
    att = document.createAttribute("class");
    att.value = "projectsContainer";
    kitchensContainer.setAttributeNode(att);
    for (let i = 0; i < kitchenImages.length; i++) {
        newImage = document.createElement("button");
        att = document.createAttribute("class");
        att.value = "projectsImages";
        newImage.setAttributeNode(att);
        att = document.createAttribute("type");
        att.value = "button";
        newImage.setAttributeNode(att);
        att = document.createAttribute("onclick");
        att.value = "showPreview('images/projects/kitchens/"+kitchenImages[i]+"')";
        newImage.setAttributeNode(att);
        newImage.style.backgroundImage = "url('images/projects/kitchens/"+kitchenImages[i]+"')";
        kitchensContainer.appendChild(newImage);
    }
    document.body.appendChild(kitchensContainer);

    // Baths container
    bathsContainer = document.createElement("div");
    att = document.createAttribute("class");
    att.value = "projectsContainer";
    bathsContainer.setAttributeNode(att);
    for (let i = 0; i < bathImages.length; i++) {
        newImage = document.createElement("button");
        att = document.createAttribute("class");
        att.value = "projectsImages";
        newImage.setAttributeNode(att);
        att = document.createAttribute("type");
        att.value = "button";
        newImage.setAttributeNode(att);
        att = document.createAttribute("onclick");
        att.value = "showPreview('images/projects/baths/"+bathImages[i]+"')";
        newImage.setAttributeNode(att);
        newImage.style.backgroundImage = "url('images/projects/baths/"+bathImages[i]+"')";
        bathsContainer.appendChild(newImage);
    }
    document.body.appendChild(bathsContainer);

    // Floors container
    floorsContainer = document.createElement("div");
    att = document.createAttribute("class");
    att.value = "projectsContainer";
    floorsContainer.setAttributeNode(att);
    for (let i = 0; i < floorImages.length; i++) {
        newImage = document.createElement("button");
        att = document.createAttribute("class");
        att.value = "projectsImages";
        newImage.setAttributeNode(att);
        att = document.createAttribute("type");
        att.value = "button";
        newImage.setAttributeNode(att);
        att = document.createAttribute("onclick");
        att.value = "showPreview('images/projects/floors/"+floorImages[i]+"')";
        newImage.setAttributeNode(att);
        newImage.style.backgroundImage = "url('images/projects/floors/"+floorImages[i]+"')";
        floorsContainer.appendChild(newImage);
    }
    document.body.appendChild(floorsContainer);

    // Others container
    othersContainer = document.createElement("div");
    att = document.createAttribute("class");
    att.value = "projectsContainer";
    othersContainer.setAttributeNode(att);
    for (let i = 0; i < othersImages.length; i++) {
        newImage = document.createElement("button");
        att = document.createAttribute("class");
        att.value = "projectsImages";
        newImage.setAttributeNode(att);
        att = document.createAttribute("type");
        att.value = "button";
        newImage.setAttributeNode(att);
        att = document.createAttribute("onclick");
        att.value = "showPreview('images/projects/others/"+othersImages[i]+"')";
        newImage.setAttributeNode(att);
        newImage.style.backgroundImage = "url('images/projects/others/"+othersImages[i]+"')";
        othersContainer.appendChild(newImage);
    }
    document.body.appendChild(othersContainer);

    createFooter("Projects");
}

function showProjects() {
    hideInit();
    hideCatalogue();
    hideFindUs();

    document.documentElement.scrollTop = 0;

    onProjects = true;
    //titleContainerDisplayed = true;
    //onAnimation = true;
    //document.documentElement.scrollTop = 0;

    projectsButton.disabled = true;
    projectsButton.setAttribute("aria-disabled", true);
    //newMid = kitchensTitle;
    //newMidDot = kitchensDot;

    //kitchensTitle.style.right = "0%";
    //kitchensTitle.style.opacity = "1";
    //kitchensDot.setAttribute("aria-disabled", true);

    //bathsTitle.style.right = "0%";
    //bathsTitle.style.opacity = "0";
    //bathsDot.setAttribute("aria-disabled", false);

    //floorsTitle.style.right = "0%";
    //floorsTitle.style.opacity = "0";
    //floorsDot.setAttribute("aria-disabled", false);

    //othersTitle.style.right = "0%";
    //othersTitle.style.opacity = "0";
    //othersDot.setAttribute("aria-disabled", false);

/*
    setTimeout(function () {
        kitchensTitle.style.opacity = "1";
    }, 1000);
    kitchensTitle.style.animationName = "goMidTitleAnim";
    kitchensTitle.style.animationDuration = "0.5s";
    kitchensTitle.style.animationTimingFunction = "easy-in-out";
    kitchensTitle.style.animationIterationCount = "1";

    animProjectsTitle(kitchensTitle);

    projectsContainer.style.display = "block";
    //dotsContainer.style.display = "flex";
*/
    kitchensContainer.style.display = "flex";
    bathsContainer.style.display = "flex";
    floorsContainer.style.display = "flex";
    othersContainer.style.display = "flex";

    showFooter("Projects");
}

function hideProjects() {
    hideFooter("Projects");
    onProjects = false;
    //clearTimeout(onTimeout);
    projectsButton.disabled = false;
    projectsButton.setAttribute("aria-disabled", false);

    //kitchensTitle.style.animation = "none";
    //bathsTitle.style.animation = "none";
    //floorsTitle.style.animation = "none";
    //othersTitle.style.animation = "none";
    //projectsContainer.style.animation = "none";

    //projectsContainer.style.display = "none";
    //dotsContainer.style.display = "none";
    hideKitchens();
    hideBaths();
    hideFloors();
    hideOthers();
}

/*
window.onscroll = function () {
    if (onProjects && onAnimation) {
        if (document.documentElement.scrollTop > 0 && titleContainerDisplayed) {
            //projectsContainer.style.animationName = "hideTitleContainerAnim";
            //projectsContainer.style.animationDuration = "0.2s";
            //projectsContainer.style.animationIterationCount = "1";
            //projectsContainer.style.animationTimingFunction = "easy-in-out";
            setTimeout(function () {
                //projectsContainer.style.display = "none";
                dotsContainer.style.display = "none";
                titleContainerDisplayed = false;
            }, 200);
        }
        if (document.documentElement.scrollTop <= 0 && !titleContainerDisplayed) {
            //projectsContainer.style.display = "block";
            //dotsContainer.style.display = "flex";
            //projectsContainer.style.animationName = "showTitleContainerAnim";
            //projectsContainer.style.animationDuration = "0.2s";
            //projectsContainer.style.animationIterationCount = "1";
            //projectsContainer.style.animationTimingFunction = "easy-in-out";
            setTimeout(function () {
                titleContainerDisplayed = true;
            }, 200);
        }
    }
}
*/

function showKitchens() {
    hideBaths();
    hideFloors();
    hideOthers();

    //clearTimeout(onTimeout);
    //onAnimation = false;
    //kitchensDot.disabled = true;
    //kitchensDot.setAttribute("aria-disabled", true);
    //changeProjectsTitle(newMid, newMidDot, kitchensTitle, kitchensDot);
    kitchensContainer.style.display = "flex";
}

function hideKitchens() {
    kitchensContainer.style.display = "none";
}

function showBaths() {
    hideKitchens();
    hideFloors();
    hideOthers();

    //clearTimeout(onTimeout);
    //onAnimation = false;
    //bathsDot.disabled = true;
    //bathsDot.setAttribute("aria-disabled", true);
    //changeProjectsTitle(newMid, newMidDot, bathsTitle, bathsDot);
    bathsContainer.style.display = "flex";
}

function hideBaths() {
    bathsContainer.style.display = "none";
}

function showFloors() {
    hideKitchens();
    hideBaths();
    hideOthers();

    //clearTimeout(onTimeout);
    //onAnimation = false;
    //floorsDot.disabled = true;
    //floorsDot.setAttribute("aria-disabled", true);
    //changeProjectsTitle(newMid, newMidDot, floorsTitle, floorsDot);
    floorsContainer.style.display = "flex";
}

function hideFloors() {
   floorsContainer.style.display = "none";
}

function showOthers() {
    hideKitchens();
    hideBaths();
    hideFloors();

    //clearTimeout(onTimeout);
    //onAnimation = false;
    //othersDot.disabled = true;
    //othersDot.setAttribute("aria-disabled", true);
    //changeProjectsTitle(newMid, newMidDot, othersTitle, othersDot);
    othersContainer.style.display = "flex";
}

function hideOthers() {
    othersContainer.style.display = "none";
}

/*
function changeProjectsTitle(current, currentDot, goMid, goMidDot) {
    kitchensDot.disabled =      true;
    bathsDot.disabled =         true;
    floorsDot.disabled =        true;
    othersDot.disabled =    true;
    setTimeout(function () {
        kitchensDot.disabled =      false;
        bathsDot.disabled =         false;
        floorsDot.disabled =        false;
        othersDot.disabled =    false;
    }, 1000);
    setTimeout(function () {
        current.style.opacity = "0";
    }, 1000);
    currentDot.setAttribute("aria-disabled", false);
    current.style.animationName = "leaveMidTitleAnim";
    current.style.animationDuration = "1s";
    current.style.animationTimingFunction = "easy-in-out";
    current.style.animationIterationCount = "1";

    setTimeout(function () {
        goMid.style.opacity = "1";
    }, 1000);
    goMidDot.setAttribute("aria-disabled", true);
    goMid.style.opacity = "1";
    goMid.style.animationName = "goMidTitleAnim";
    goMid.style.animationDuration = "1s";
    goMid.style.animationTimingFunction = "easy-in-out";
    goMid.style.animationIterationCount = "1";
    newMid = goMid;
    newMidDot = goMidDot;
}

function animProjectsTitle(current) {
    onTimeout = setTimeout(function () {
        switch (current) {
            case kitchensTitle:
                changeProjectsTitle(current, kitchensDot, bathsTitle, bathsDot);
                break;
            case bathsTitle:
                changeProjectsTitle(current, bathsDot, floorsTitle, floorsDot);
                break;
            case floorsTitle:
                changeProjectsTitle(current, floorsDot, othersTitle, othersDot);
                break;
            case othersTitle:
                changeProjectsTitle(current, othersDot, kitchensTitle, kitchensDot);
                break;
        }
        animProjectsTitle(newMid);

    }, 3500);
}
*/

// Catalogue functions
function createCatalogue() {
    let att;

    nameList = [
        ["Nombre1",             0, 0, 0, 0],
        ["Nombre2",             0, 0, 0, 0],
        ["Nombre3",             0, 0, 0, 0],
        ["Nombre4",             0, 0, 0, 0],
        ["Nombre5",             0, 0, 0, 0],
        ["Nombre6",             0, 0, 0, 0],
        ["Nombre7",             0, 0, 0, 0],
        ["Nombre8",             0, 0, 0, 0],
        ["Nombre9",             0, 0, 0, 0],
        ["Nombre10",            0, 0, 0, 0],
        ["Nombre11",            0, 0, 0, 0],
        ["Nombre12",            0, 0, 0, 0],
        ["Nombre13",            0, 0, 0, 0],
        ["Nombre14",            0, 0, 0, 0],
        ["Nombre15",            0, 0, 0, 0],
        ["Nombre16",            0, 0, 0, 0],
        ["Nombre17",            0, 0, 0, 0],
        ["Nombre18",            0, 0, 0, 0],
        ["Nombre19",            0, 0, 0, 0],
        ["Nombre20",            0, 0, 0, 0],
        ["Nombre21",            0, 0, 0, 0],
        ["Nombre22",            0, 0, 0, 0],
        ["Nombre23",            0, 0, 0, 0],
        ["Nombre24",            0, 0, 0, 0],
        ["Nombre25",            0, 0, 0, 0],
        ["Nombre26",            0, 0, 0, 0],
        ["Nombre27",            0, 0, 0, 0],
        ["Nombre28",            0, 0, 0, 0],
        ["Nombre29",            0, 0, 0, 0],
        ["Nombre30",            0, 0, 0, 0],
        ["Nombre31",            0, 0, 0, 0],
        ["Nombre32",            0, 0, 0, 0],
        ["Nombre33",            0, 0, 0, 0],
        ["Nombre34",            0, 0, 0, 0],
        ["Nombre35",            0, 0, 0, 0],
        ["Nombre36",            0, 0, 0, 0],
        ["Nombre37",            0, 0, 0, 0],
        ["Nombre38",            0, 0, 0, 0],
        ["Nombre39",            0, 0, 0, 0],
        ["Nombre40",            0, 0, 0, 0],
        ["Nombre41",            0, 0, 0, 0],
        ["Nombre42",            0, 0, 0, 0],
        ["Nombre43",            0, 0, 0, 0],
        ["Nombre44",            0, 0, 0, 0],
        ["Nombre45",            0, 0, 0, 0],
        ["Nombre46",            0, 0, 0, 0],
        ["Nombre47",            0, 0, 0, 0],
        ["Nombre48",            0, 0, 0, 0],
        ["Nombre49",            0, 0, 0, 0],
        ["Nombre50",            0, 0, 0, 0],
        ["Nombre51",            0, 0, 0, 0],
        ["Nombre52",            0, 0, 0, 0],
        ["Nombre53",            0, 0, 0, 0],
        ["Nombre54",            0, 0, 0, 0],
        ["Nombre55",            0, 0, 0, 0],
        ["Nombre56",            0, 0, 0, 0],
        ["Nombre57",            0, 0, 0, 0],
        ["Nombre58",            0, 0, 0, 0],
        ["Nombre59",            0, 0, 0, 0],
        ["Nombre60",            0, 0, 0, 0],
        ["Nombre61",            0, 0, 0, 0],
        ["Nombre62",            0, 0, 0, 0],
        ["Nombre63",            0, 0, 0, 0],
        ["Nombre64",            0, 0, 0, 0],
        ["Nombre65",            0, 0, 0, 0]
    ];

    colorList = [
        ["Blanco",          false],
        ["Beige",           false],
        ["Amarillo",        false],
        ["Naranja",         false],
        ["Rosa",            false],
        ["Rojo",            false],
        ["Marr&oacuten",    false],
        ["Verde",           false],
        ["Azul",            false],
        ["Morado",          false],
        ["Negro",           false]
    ];

    saturationList = [
        ["Claro",           false],
        ["Saturado",        false],
        ["Desaturado",      false],
        ["Oscuro",          false]
    ];

    brandsList = [
        ["Marca1",           false],
        ["Marca2",           false],
        ["Marca3",           false],
        ["Marca4",           false],
        ["Marca5",           false]
    ];

    stoneList = [
        ["Piedra1",          false],
        ["Piedra2",          false],
        ["Piedra3",          false],
        ["Piedra4",          false],
        ["Piedra5",          false],
        ["Piedra6",          false],
        ["Piedra7",          false],
        ["Piedra8",          false],
        ["Piedra9",          false],
        ["Piedra10",         false]
    ];

    // Temporary randomize function
    randomizeSamples();

    // Title
    catalogueTitle = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "catalogueTitle";
    catalogueTitle.setAttributeNode(att);
    catalogueTitle.style.backgroundImage = "url(/images/catalogue/title/img1.png)";

    let titleText = document.createElement("p");
    att = document.createAttribute("class");
    att.value = "titleText";
    titleText.setAttributeNode(att);
    titleText.innerHTML = "CAT&AacuteLOGO";

    catalogueTitle.appendChild(titleText);
    document.body.appendChild(catalogueTitle);

    // Settings container
    settingsContainer = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "settingsContainer";
    settingsContainer.setAttributeNode(att);

    // Filters button
    filtersButton = document.createElement("button");
    att = document.createAttribute("onmouseover");
    att.value = "hoverFilters()";
    filtersButton.setAttributeNode(att);
    att = document.createAttribute("onmouseout");
    att.value = "outFilters()";
    filtersButton.setAttributeNode(att);
    att = document.createAttribute("class");
    att.value = "settings";
    filtersButton.setAttributeNode(att);
    att = document.createAttribute("type");
    att.value = "button";
    filtersButton.setAttributeNode(att);
    att = document.createAttribute("onclick");
    att.value = "toggleFilters()";
    filtersButton.setAttributeNode(att);

    let borderSettings = document.createElement("p");
    att = document.createAttribute("class");
    att.value = "borderSettings";
    borderSettings.setAttributeNode(att);
    borderSettings.innerHTML = "Filtros";

    let settingsArrow = document.createElement("img");
    att = document.createAttribute("id");
    att.value = "filtersArrow";
    settingsArrow.setAttributeNode(att);
    att = document.createAttribute("class");
    att.value = "settingsArrow";
    settingsArrow.setAttributeNode(att);
    att = document.createAttribute("src");
    att.value = "images/catalogue/arrow.png";
    settingsArrow.setAttributeNode(att);
    att = document.createAttribute("width");
    att.value = "10px";
    settingsArrow.setAttributeNode(att);
    att = document.createAttribute("height");
    att.value = "10px";
    settingsArrow.setAttributeNode(att);

    borderSettings.appendChild(settingsArrow);
    filtersButton.appendChild(borderSettings);
    settingsContainer.appendChild(filtersButton);

    // Sort button
    sortButton = document.createElement("button");
    att = document.createAttribute("onmouseover");
    att.value = "hoverSort()";
    sortButton.setAttributeNode(att);
    att = document.createAttribute("onmouseout");
    att.value = "outSort()";
    sortButton.setAttributeNode(att);
    att = document.createAttribute("class");
    att.value = "settings";
    sortButton.setAttributeNode(att);
    att = document.createAttribute("type");
    att.value = "button";
    sortButton.setAttributeNode(att);
    att = document.createAttribute("onclick");
    att.value = "toggleSort()";
    sortButton.setAttributeNode(att);

    borderSettings = document.createElement("p");
    att = document.createAttribute("class");
    att.value = "borderSettings";
    borderSettings.setAttributeNode(att);
    borderSettings.innerHTML = "Ordenar por";

    settingsArrow = document.createElement("img");
    att = document.createAttribute("id");
    att.value = "sortArrow";
    settingsArrow.setAttributeNode(att);
    att = document.createAttribute("class");
    att.value = "settingsArrow";
    settingsArrow.setAttributeNode(att);
    att = document.createAttribute("src");
    att.value = "images/catalogue/arrow.png";
    settingsArrow.setAttributeNode(att);
    att = document.createAttribute("width");
    att.value = "10px";
    settingsArrow.setAttributeNode(att);
    att = document.createAttribute("height");
    att.value = "10px";
    settingsArrow.setAttributeNode(att);

    borderSettings.appendChild(settingsArrow);
    sortButton.appendChild(borderSettings);
    settingsContainer.appendChild(sortButton);
    document.body.appendChild(settingsContainer);

    // Filters settings
    filtersSettings = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "filtersSettings";
    filtersSettings.setAttributeNode(att);
    att = document.createAttribute("onmouseover");
    att.value = "onFilters()";
    filtersSettings.setAttributeNode(att);
    att = document.createAttribute("onmouseout");
    att.value = "offFilters()";
    filtersSettings.setAttributeNode(att);

    // Filters sectors
    let filterSector;
    let sectorTitle;
    let optionsContainer;
    let checkboxContainer;
    let checkbox;
    let checkboxText;

    for (const sector of [colorList, saturationList, stoneList, brandsList]) {
        filterSector = document.createElement("div");
        att = document.createAttribute("class");
        att.value = "filterSector";
        filterSector.setAttributeNode(att);

        sectorTitle = document.createElement("p");
        att = document.createAttribute("class");
        att.value = "sectorTitle";
        sectorTitle.setAttributeNode(att);
        switch (sector) {
            case colorList:
                sectorTitle.innerHTML = "COLORES";
                break;
            case saturationList:
                sectorTitle.innerHTML = "SATURACI&OacuteN";
                break;
            case stoneList:
                sectorTitle.innerHTML = "PIEDRAS";
                break;
            case brandsList:
                sectorTitle.innerHTML = "MARCAS";
                break;
        }
        filterSector.appendChild(sectorTitle);

        optionsContainer = document.createElement("div");
        att = document.createAttribute("class");
        att.value = "optionsContainer";
        optionsContainer.setAttributeNode(att);

        for (let i = 0; i < sector.length; i++) {
            checkboxContainer = document.createElement("div");
            att = document.createAttribute("class");
            att.value = "checkboxContainer";
            checkboxContainer.setAttributeNode(att);

            checkbox = document.createElement("button");
            att = document.createAttribute("id");
            att.value = sector[i][0];
            checkbox.setAttributeNode(att);
            att = document.createAttribute("onclick");
            switch (sector) {
                case colorList:
                    att.value = "toggleCheck(colorList, "+i+", this)";
                    break;
                case saturationList:
                    att.value = "toggleCheck(saturationList, "+i+", this)";
                    break;
                case stoneList:
                    att.value = "toggleCheck(stoneList, "+i+", this)";
                    break;
                case brandsList:
                    att.value = "toggleCheck(brandsList, "+i+", this)";
                    break;
            }
            checkbox.setAttributeNode(att);
            att = document.createAttribute("class");
            att.value = "checkbox";
            checkbox.setAttributeNode(att);
            att = document.createAttribute("type");
            att.value = "button";
            checkbox.setAttributeNode(att);
            checkboxContainer.appendChild(checkbox);

            checkboxText = document.createElement("p");
            att = document.createAttribute("class");
            att.value = "checkboxText";
            checkboxText.setAttributeNode(att);
            checkboxText.innerHTML = sector[i][0];

            checkboxContainer.appendChild(checkboxText);
            optionsContainer.appendChild(checkboxContainer);
        }
        filterSector.appendChild(optionsContainer);
        filtersSettings.appendChild(filterSector);
    }

    // Auxiliary buttons
    let auxContainer = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "auxContainer";
    auxContainer.setAttributeNode(att);

    // Select & Deselect container
    let pairAuxContainer = document.createElement("div");
    att = document.createAttribute("class");
    att.value = "pairAuxContainer";
    pairAuxContainer.setAttributeNode(att);

    // Select all button
    let selButton = document.createElement("button");
    att = document.createAttribute("class");
    att.value = "auxButtons";
    selButton.setAttributeNode(att);
    att = document.createAttribute("type");
    att.value = "button";
    selButton.setAttributeNode(att);
    att = document.createAttribute("onclick");
    att.value = "selectFilters()";
    selButton.setAttributeNode(att);
    selButton.innerHTML = "Seleccionar todo";
    pairAuxContainer.appendChild(selButton);

    // Deselect all button
    let deselButton = document.createElement("button");
    att = document.createAttribute("class");
    att.value = "auxButtons";
    deselButton.setAttributeNode(att);
    att = document.createAttribute("type");
    att.value = "button";
    deselButton.setAttributeNode(att);
    att = document.createAttribute("onclick");
    att.value = "deselectFilters()";
    deselButton.setAttributeNode(att);
    deselButton.innerHTML = "Deseleccionar todo";
    pairAuxContainer.appendChild(deselButton);
    auxContainer.appendChild(pairAuxContainer);

    // Cancel & Apply container
    pairAuxContainer = document.createElement("div");
    att = document.createAttribute("class");
    att.value = "pairAuxContainer";
    pairAuxContainer.setAttributeNode(att);

    // Cancel button
    let cancelButton = document.createElement("button");
    att = document.createAttribute("class");
    att.value = "auxButtons";
    cancelButton.setAttributeNode(att);
    att = document.createAttribute("type");
    att.value = "button";
    cancelButton.setAttributeNode(att);
    att = document.createAttribute("onclick");
    att.value = "cancelFilters()";
    cancelButton.setAttributeNode(att);
    cancelButton.innerHTML = "Cancelar";
    pairAuxContainer.appendChild(cancelButton);

    // Apply button
    let applyButton = document.createElement("button");
    att = document.createAttribute("class");
    att.value = "auxButtons";
    applyButton.setAttributeNode(att);
    att = document.createAttribute("type");
    att.value = "button";
    applyButton.setAttributeNode(att);
    att = document.createAttribute("onclick");
    att.value = "applyFilters()";
    applyButton.setAttributeNode(att);
    applyButton.innerHTML = "Aceptar";
    pairAuxContainer.appendChild(applyButton);
    auxContainer.appendChild(pairAuxContainer);

    filtersSettings.appendChild(auxContainer);
    document.body.appendChild(filtersSettings);

    // Sort settings
    sortSettings = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "sortSettings";
    sortSettings.setAttributeNode(att);
    att = document.createAttribute("onmouseover");
    att.value = "onSort()";
    sortSettings.setAttributeNode(att);
    att = document.createAttribute("onmouseout");
    att.value = "offSort()";
    sortSettings.setAttributeNode(att);

    let sortText;
    let sortBorder;
    let i = 0;
    for (const text of [
        "A-Z",
        "Colores",
        "Saturaci&oacuten",
        "Piedras",
        "Marcas"
    ]) {
        sortText = document.createElement("button");
        att = document.createAttribute("class");
        att.value = "sortText";
        sortText.setAttributeNode(att);
        att = document.createAttribute("type");
        att.value = "button";
        sortText.setAttributeNode(att);
        att = document.createAttribute("onclick");
        att.value = "sortBy("+i+")";
        sortText.setAttributeNode(att);

        sortBorder = document.createElement("p");
        att = document.createAttribute("class");
        att.value = "sortBorder";
        sortBorder.setAttributeNode(att);
        sortBorder.innerHTML = text;

        sortText.appendChild(sortBorder);
        sortSettings.appendChild(sortText);
        i++;
    }
    document.body.appendChild(sortSettings);

    // Catalogue container section
    catalogueSection = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "catalogueSection";
    catalogueSection.setAttributeNode(att);
    // Catalogue images container
    catalogueContainer = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "catalogueContainer";
    catalogueContainer.setAttributeNode(att);

    /*
    let newImage;
    for (let i = 0; i < nameList.length; i++) {
        newImage = document.createElement("button");
        att = document.createAttribute("class");
        att.value = "catalogueImage";
        newImage.setAttributeNode(att);
        att = document.createAttribute("type");
        att.value = "button";
        newImage.setAttributeNode(att);
        att = document.createAttribute("onclick");
        att.value = "showImage(this)";
        newImage.setAttributeNode(att);
        newImage.style.backgroundImage = "url(/images/catalogue/samples/placeHolder.png)"; //"url(/images/catalogue/"+nameList[i][0]+")";
        catalogueContainer.appendChild(newImage);
    }
    document.body.appendChild(catalogueContainer);
    */

    // Imagenes auxiliares
    renderImages(nameList);
    document.body.appendChild(catalogueSection);
    catalogueList = copy(nameList);

    createFooter("Catalogue");
}

function hoverFilters() {
    if (!onFiltersButton) {
        onFiltersButton = true;
        if (!filtersFixed) {
            if (!sortFixed) {
                filtersButton.firstChild.style.width = "80%";
                filtersButton.firstChild.style.height = "80%";
            }
            filtersButton.firstChild.style.color = "rgba(0, 0, 0, 0.5)";
        }
        showFilters();
    }
}

function outFilters() {
    if (onFiltersButton) {
        onFiltersButton = false;
        if (!filtersFixed) {
            if (!sortFixed) {
                filtersButton.firstChild.style.width = "0%";
                filtersButton.firstChild.style.height = "80%";
            }
            filtersButton.firstChild.style.color = "black";
        }
        window.requestAnimationFrame( function () { hideFilters(); });
    }
}

function onFilters() {
    if (!onFiltersSettings) {
        onFiltersSettings = true;
    }
}

function offFilters() {
    if (onFiltersSettings) {
        onFiltersSettings = false;
        window.requestAnimationFrame( function () { hideFilters(); });
    }
}

function showFilters() {
    if (onFiltersButton && filtersSettings.style.display == "none" && !sortFixed) {
        let arrow = document.getElementById("filtersArrow");
        window.requestAnimationFrame(function() {
            filtersSettings.style.display = "flex";
            filtersSettings.style.height = "0px";
            arrow.style.transform = "rotateZ(0deg)";
            window.requestAnimationFrame(function() {
                filtersSettings.style.height = "332px";
                arrow.style.transform = "rotateZ(180deg)";
                setTimeout(function() {
                    filtersSettings.style.height = "max-content";
                }, 300);
            });
        });
    }
}

function hideFilters() {
    if (!(onFiltersSettings || onFiltersButton) && !filtersFixed) {
        let arrow = document.getElementById("filtersArrow");
        window.requestAnimationFrame(function() {
            filtersSettings.style.height = "0px";
            filtersSettings.style.display = "none";
            arrow.style.transform = "rotateZ(0deg)";
        });
    }
}

//--------------------------------------//

function hoverSort() {
    if (!onSortButton) {
        onSortButton = true;
        if (!sortFixed) {
            if (!filtersFixed) {
                sortButton.firstChild.style.width = "80%";
                sortButton.firstChild.style.height = "80%";
            }
            sortButton.firstChild.style.color = "rgba(0, 0, 0, 0.5)";
        }
        showSort();
    }
}

function outSort() {
    if (onSortButton) {
        onSortButton = false;
        if (!sortFixed) {
            if (!filtersFixed) {
                sortButton.firstChild.style.width = "0%";
                sortButton.firstChild.style.height = "80%";
            }
            sortButton.firstChild.style.color = "black";
        }
        window.requestAnimationFrame( function () { hideSort(); });
    }
}

function onSort() {
    if (!onSortSettings) {
        onSortSettings = true;
    }
}

function offSort() {
    if (onSortSettings) {
        onSortSettings = false;
        window.requestAnimationFrame( function () { hideSort(); });
    }
}

function showSort() {
    if (onSortButton && sortSettings.style.display == "none" && !filtersFixed) {
        let arrow = document.getElementById("sortArrow");
        window.requestAnimationFrame(function() {
            sortSettings.style.display = "block";
            sortSettings.style.height = "0px";
            arrow.style.transform = "rotateZ(0deg)";
            window.requestAnimationFrame(function() {
                sortSettings.style.height = "195px";
                arrow.style.transform = "rotateZ(180deg)";
            });
        });
    }
}

function hideSort() {
    if (!(onSortSettings || onSortButton) && !sortFixed) {
        let arrow = document.getElementById("sortArrow");
        window.requestAnimationFrame(function() {
            sortSettings.style.height = "0px";
            sortSettings.style.display = "none";
            arrow.style.transform = "rotateZ(0deg)";
        });
    }
}

// Temporary randomize function
function randomizeSamples() {
    for (let i = 0; i < nameList.length; i++) {
        nameList[i][1] = Math.floor(Math.random() * colorList.length);
        nameList[i][2] = Math.floor(Math.random() * saturationList.length);
        nameList[i][3] = Math.floor(Math.random() * stoneList.length);
        nameList[i][4] = Math.floor(Math.random() * brandsList.length);
    }
}

function showCatalogue() {
    hideInit();
    hideProjects();
    hideFindUs();

    sortFixed = false;
    onSortSettings = false;
    onSortButton = false;

    filtersFixed = false;
    onFiltersSettings = false;
    onFiltersButton = false;

    catalogueButton.disabled = true;
    catalogueButton.setAttribute("aria-disabled", true);
    document.documentElement.scrollTop = 0;

    //catalogueTitle.style.display = "flex";
    settingsContainer.style.display = "flex";
    catalogueSection.style.display = "block";

    showFooter("Catalogue");
}

function hideCatalogue() {
    hideFooter("Catalogue");
    sortButton.firstChild.style.width = "0%";
    sortButton.firstChild.style.height = "80%";
    sortButton.firstChild.style.color = "black";
    filtersButton.firstChild.style.width = "0%";
    filtersButton.firstChild.style.height = "80%";
    filtersButton.firstChild.style.color = "black";
    document.getElementById("filtersArrow").style.transform = "rotateZ(0deg)";
    document.getElementById("sortArrow").style.transform = "rotateZ(0deg)";

    catalogueButton.disabled = false;
    catalogueButton.setAttribute("aria-disabled", false);

    catalogueTitle.style.display = "none";
    settingsContainer.style.display = "none";
    filtersSettings.style.display = "none";
    sortSettings.style.display = "none";
    filtersButton.style.height = "100%";
    sortButton.style.height = "100%";
    catalogueSection.style.display = "none";
}

function toggleFilters() {
    if (sortFixed) {
        sortFixed = false;
        sortButton.firstChild.style.width = "0%";
        sortButton.firstChild.style.height = "80%";
        sortButton.firstChild.style.color = "black";
        window.requestAnimationFrame( function () { hideSort(); });
    }
    window.requestAnimationFrame( function () {
        if (!filtersFixed) {
            filtersFixed = true;
            filtersButton.firstChild.style.width = "100%";
            filtersButton.firstChild.style.height = "100%";
            filtersButton.firstChild.style.color = "rgba(0, 0, 0, 0.5)";
            window.requestAnimationFrame( function () { showFilters(); });
        }
        else {
                //filtersFixed = false;
            //filtersButton.firstChild.style.width = "80%";
            //filtersButton.firstChild.style.height = "80%";
            //filtersButton.firstChild.style.color = "black";
            //window.requestAnimationFrame( function () { hideFilters(); });
            filtersFixed = false;
            filtersButton.firstChild.style.width = "0%";
            filtersButton.firstChild.style.height = "80%";
            filtersButton.firstChild.style.color = "black";
            let arrow = document.getElementById("filtersArrow");
            window.requestAnimationFrame(function() {
                filtersSettings.style.height = "0px";
                filtersSettings.style.display = "none";
                arrow.style.transform = "rotateZ(0deg)";
            });
        }
    });
}

function toggleSort() {
    if (filtersFixed) {
        filtersFixed = false;
        filtersButton.firstChild.style.width = "0%";
        filtersButton.firstChild.style.height = "80%";
        filtersButton.firstChild.style.color = "black";
        window.requestAnimationFrame( function () { hideFilters(); });
    }
    window.requestAnimationFrame( function () {
        if (!sortFixed) {
            sortFixed = true;
            sortButton.firstChild.style.width = "100%";
            sortButton.firstChild.style.height = "100%";
            sortButton.firstChild.style.color = "rgba(0, 0, 0, 0.5)";
            window.requestAnimationFrame( function () { showSort(); });
        }
        else {
            //sortFixed = false;
            //sortButton.firstChild.style.width = "80%";
            //sortButton.firstChild.style.height = "80%";
            //sortButton.firstChild.style.color = "black";
            //window.requestAnimationFrame( function () { hideSort(); });
            sortFixed = false;
            sortButton.firstChild.style.width = "0%";
            sortButton.firstChild.style.height = "80%";
            sortButton.firstChild.style.color = "black";
            let arrow = document.getElementById("sortArrow");
            window.requestAnimationFrame(function() {
                sortSettings.style.height = "0px";
                sortSettings.style.display = "none";
                arrow.style.transform = "rotateZ(0deg)";
            });
        }
    });
}

function toggleCheck(array, i, check) {
    if (array[i][1]) {
        array[i][1] = false;
        check.style.border = "1px solid grey";
    }
    else {
        array[i][1] = true;
        check.style.border = "4px solid brown";
    }
}

function applyFilters() {
    filtersFixed = false;
    filtersButton.firstChild.style.width = "0%";
    filtersButton.firstChild.style.color = "black";
    document.getElementById("filtersArrow").style.transform = "rotateZ(0deg)";
    filtersSettings.style.display = "none";
    while (catalogueList.length > 0)
        catalogueList.pop();

    let allUnchecked;
    for (let array of [colorList, saturationList, stoneList, brandsList]) {
        allUnchecked = true;
        for (let i = 0; i < array.length; i++) {
            if (array[i][1])
                allUnchecked = false;
        }
        if (allUnchecked)
            for (let i = 0; i < array.length; i++)
                array[i][1] = true;
    }

    for (let i = 0; i < nameList.length; i++) {
        if (isValid(nameList[i]))
            catalogueList.push(nameList[i]);
    }

    for (const sector of [colorList, saturationList, stoneList, brandsList]) {
        for (let i = 0; i < sector.length; i++) {
            if (document.getElementById(sector[i][0]).style.border == "4px solid brown")
                sector[i][1] = true;
            else
                sector[i][1] = false;
        }
    }

    printArray(catalogueList);
    renderImages(catalogueList);
}

function isValid(elem) {
    let i = 1;
    for (const list of [colorList, saturationList, stoneList, brandsList]) {
        if (!list[elem[i]][1])
            return false;
        i++;
    }
    return true;
}

function renderImages(array) {
    let att;
    // Reset images
    if (document.getElementById("catalogueContainer") != null) {
        catalogueSection.removeChild(catalogueContainer);
        catalogueContainer = document.createElement("div");
        att = document.createAttribute("id");
        att.value = "catalogueContainer";
        catalogueContainer.setAttributeNode(att);
    }

    if (array.length == 0) {
        let notResults = document.createElement("p");
        att = document.createAttribute("id");
        att.value = "notResults";
        notResults.setAttributeNode(att);
        notResults.innerHTML = "No se han encontrado resultados.";
        catalogueContainer.appendChild(notResults);
    }
    else {
        // Imagenes auxiliares
        let newImage;
        let textContainer;
        let auxP;
        let j;
        for (let i = 0; i < array.length; i++) {
            j = 3;
            newImage = document.createElement("a");
            att = document.createAttribute("class");
            att.value = "catalogueImageAux";
            newImage.setAttributeNode(att);
            att = document.createAttribute("href");
            att.value = "palette.html?sampleIndex=" + encodeURIComponent(array[i][0]);
            newImage.setAttributeNode(att);
            att = document.createAttribute("target");
            att.value = "_self";
            newImage.setAttributeNode(att);
            newImage.style.backgroundImage = "url('images/catalogue/samples/"+array[i][0]+".png')";

            // Text container
            textContainer = document.createElement("div");
            att = document.createAttribute("class");
            att.value = "sampleTextContainer";
            textContainer.setAttributeNode(att);

            auxP =  document.createElement("p");
            att = document.createAttribute("class");
            att.value = "auxP";
            auxP.setAttributeNode(att);
            auxP.innerHTML = array[i][0];
            if (saturationList[array[i][2]][0] == "Claro" || saturationList[array[i][2]][0] == "Desaturado") {
                textContainer.style.backgroundColor = "rgba(255, 255, 255, 0.65)";
                auxP.style.color = "black";
            }
            else if (saturationList[array[i][2]][0] == "Oscuro" || saturationList[array[i][2]][0] == "Saturado") {
                textContainer.style.backgroundColor = "rgba(0, 0, 0, 0.65)";
                auxP.style.color = "white";
            }
            textContainer.appendChild(auxP);

            for (const text of [stoneList, brandsList]) {
                auxP =  document.createElement("p");
                att = document.createAttribute("class");
                att.value = "auxP";
                auxP.setAttributeNode(att);
                auxP.innerHTML = text[array[i][j]][0];
                if (saturationList[array[i][2]][0] == "Claro" || saturationList[array[i][2]][0] == "Desaturado") {
                    textContainer.style.backgroundColor = "rgba(255, 255, 255, 0.65)";
                    auxP.style.color = "black";
                }
                else if (saturationList[array[i][2]][0] == "Oscuro" || saturationList[array[i][2]][0] == "Saturado") {
                    textContainer.style.backgroundColor = "rgba(0, 0, 0, 0.65)";
                    auxP.style.color = "white";
                }
                textContainer.appendChild(auxP);
                j++;
            }
            newImage.appendChild(textContainer);
            catalogueContainer.appendChild(newImage);
        }
    }
    catalogueSection.appendChild(catalogueContainer);
}

function cancelFilters() {
    filtersFixed = false;
    filtersButton.firstChild.style.width = "0%";
    filtersButton.firstChild.style.color = "black";
    filtersSettings.style.display = "none";
    document.getElementById("filtersArrow").style.transform = "rotateZ(0deg)";
}

function selectFilters() {
    for (let array of [colorList, saturationList, stoneList, brandsList]) {
        for (let i = 0; i < array.length; i++) {
            if (!array[i][1])
                document.getElementById(array[i][0]).click();
        }
    }
}

function deselectFilters() {
    for (let array of [colorList, saturationList, stoneList, brandsList]) {
        for (let i = 0; i < array.length; i++) {
            if (array[i][1])
                document.getElementById(array[i][0]).click();
        }
    }
}

function sortBy(type) {
    if (catalogueList.length != 0) {
        if (type == 0) {
            printArray(catalogueList);
            renderImages(catalogueList);
        }
        else {
            let copyCatalogueList = copy(catalogueList);
            let catalogueSort = [];
            let minIndex;
            let i;
            while (copyCatalogueList.length > 0) {
                minIndex = 0;
                i = 1;
                while (i < copyCatalogueList.length){
                    if (copyCatalogueList[i][type] < copyCatalogueList[minIndex][type])
                        minIndex = i;
                    else if (copyCatalogueList[i][type] == copyCatalogueList[minIndex][type]) {
                        switch (type) {
                            case 1:
                                if (copyCatalogueList[i][2] < copyCatalogueList[minIndex][2])
                                    minIndex = i;
                                else if (copyCatalogueList[i][2] == copyCatalogueList[minIndex][2]) {
                                    if (copyCatalogueList[i][3] < copyCatalogueList[minIndex][3])
                                        minIndex = i;
                                    else if (copyCatalogueList[i][3] == copyCatalogueList[minIndex][3]) {
                                        if (copyCatalogueList[i][4] < copyCatalogueList[minIndex][4])
                                            minIndex = i;
                                    }
                                }
                                break;
                            case 2:
                                if (copyCatalogueList[i][1] < copyCatalogueList[minIndex][1])
                                    minIndex = i;
                                else if (copyCatalogueList[i][1] == copyCatalogueList[minIndex][1]) {
                                    if (copyCatalogueList[i][3] < copyCatalogueList[minIndex][3])
                                        minIndex = i;
                                    else if (copyCatalogueList[i][3] == copyCatalogueList[minIndex][3]) {
                                        if (copyCatalogueList[i][4] < copyCatalogueList[minIndex][4])
                                            minIndex = i;
                                    }
                                }
                                break;
                            case 3:
                                if (copyCatalogueList[i][1] < copyCatalogueList[minIndex][1])
                                    minIndex = i;
                                else if (copyCatalogueList[i][1] == copyCatalogueList[minIndex][1]) {
                                    if (copyCatalogueList[i][2] < copyCatalogueList[minIndex][2])
                                        minIndex = i;
                                    else if (copyCatalogueList[i][2] == copyCatalogueList[minIndex][2]) {
                                        if (copyCatalogueList[i][4] < copyCatalogueList[minIndex][4])
                                            minIndex = i;
                                    }
                                }
                                break;
                            case 4:
                                if (copyCatalogueList[i][1] < copyCatalogueList[minIndex][1])
                                    minIndex = i;
                                else if (copyCatalogueList[i][1] == copyCatalogueList[minIndex][1]) {
                                    if (copyCatalogueList[i][2] < copyCatalogueList[minIndex][2])
                                        minIndex = i;
                                    else if (copyCatalogueList[i][2] == copyCatalogueList[minIndex][2]) {
                                        if (copyCatalogueList[i][3] < copyCatalogueList[minIndex][3])
                                            minIndex = i;
                                    }
                                }
                                break;
                        }
                    }
                    i++;
                }
                catalogueSort.push(copyCatalogueList[minIndex]);
                copyCatalogueList.splice(minIndex, 1);
            }
            printArray(catalogueSort);
            renderImages(catalogueSort);
        }
    }
}

function showImage(image) {

}

// FindUs functions
function createFindUs() {
    let att;

    // Questions
    questionsContainer = document.createElement("id");
    att = document.createAttribute("id");
    att.value = "questionsContainer";
    questionsContainer.setAttributeNode(att);
    // Title
    let questionsTitle = document.createElement("h1");
    att = document.createAttribute("id");
    att.value = "questionsTitle";
    questionsTitle.setAttributeNode(att);
    questionsTitle.innerHTML = "¿Tienes alguna pregunta?";
    questionsContainer.appendChild(questionsTitle);
    // Text
    let questionsText = document.createElement("p");
    att = document.createAttribute("id");
    att.value = "questionsText";
    questionsText.setAttributeNode(att);
    questionsText.innerHTML = "Puedes preguntarnos lo que quieras a través de nuestro email o nuestros whatsapps.";
    questionsContainer.appendChild(questionsText);

    // Email container
    let emailContainer = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "emailContainer";
    emailContainer.setAttributeNode(att);
    // Email icon
    let emailIcon = document.createElement("img");
    att = document.createAttribute("id");
    att.value = "emailIcon";
    emailIcon.setAttributeNode(att);
    att = document.createAttribute("src");
    att.value = "images/findUs/emailIcon.png";
    emailIcon.setAttributeNode(att);
    emailContainer.appendChild(emailIcon);
    // Email text
    let emailText = document.createElement("a");
    att = document.createAttribute("id");
    att.value = "emailText";
    emailText.setAttributeNode(att);
    att = document.createAttribute("href");
    att.value = "mailto:"+EMAIL+"?subject="+EMAIL_SUBJECT+"&body="+EMAIL_BODY;
    emailText.setAttributeNode(att);
    att = document.createAttribute("target");
    att.value = "_blank";
    emailText.setAttributeNode(att);
    // Email border
    let findUsBorder = document.createElement("p");
    att = document.createAttribute("class");
    att.value = "findUsBorder";
    findUsBorder.setAttributeNode(att);
    findUsBorder.innerHTML = EMAIL;
    emailText.appendChild(findUsBorder);
    emailContainer.appendChild(emailText);
    questionsContainer.appendChild(emailContainer);

    // Whatsapp container
    let whatsappContainer = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "whatsappContainer";
    whatsappContainer.setAttributeNode(att);
    // Whatsapp icon
    whatsappIcon = document.createElement("img");
    att = document.createAttribute("id");
    att.value = "whatsappIcon";
    whatsappIcon.setAttributeNode(att);
    att = document.createAttribute("src");
    att.value = "images/findUs/whatsappIcon.png";
    whatsappIcon.setAttributeNode(att);
    whatsappContainer.appendChild(whatsappIcon);
    // Whatsapp text container
    whatsappText = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "whatsappText";
    whatsappText.setAttributeNode(att);
    // Whatsapp numbers
    let whatsappNum;
    for (const num of [WHATSAPP_1, WHATSAPP_2, WHATSAPP_3]) {
        whatsappNum = document.createElement("a");
        att = document.createAttribute("class");
        att.value = "whatsappNum";
        if (num != WHATSAPP_3)
            att.value += " rightBorder";
        whatsappNum.setAttributeNode(att);
        att = document.createAttribute("href");
        att.value = "https://wa.me/"+num.replace(/\s+/g, '');
        whatsappNum.setAttributeNode(att);
        att = document.createAttribute("target");
        att.value = "_blank";
        whatsappNum.setAttributeNode(att);
        // whatsapp border
        findUsBorder = document.createElement("p");
        att = document.createAttribute("class");
        att.value = "findUsBorder";
        findUsBorder.setAttributeNode(att);
        findUsBorder.innerHTML = "+"+num;

        whatsappNum.appendChild(findUsBorder);
        whatsappText.appendChild(whatsappNum);
    }
    whatsappContainer.appendChild(whatsappText);
    questionsContainer.appendChild(whatsappContainer);
    document.body.appendChild(questionsContainer);

    // Location
    locationContainer = document.createElement("id");
    att = document.createAttribute("id");
    att.value = "locationContainer";
    locationContainer.setAttributeNode(att);
    // Map
    let map = document.createElement("iframe");
    att = document.createAttribute("src");
    att.value = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8496.469396999328!2d-0.44329964606138833!3d39.19795083637626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd61b1d2eefb4b7b%3A0xcb795e9d4a2af9c3!2sMarmoles%20Alcaduf!5e0!3m2!1sca!2ses!4v1689005290122!5m2!1sca!2ses";
    map.setAttributeNode(att);
    att = document.createAttribute("width");
    att.value = "550";
    map.setAttributeNode(att);
    att = document.createAttribute("height");
    att.value = "450";
    map.setAttributeNode(att);
    att = document.createAttribute("id");
    att.value = "map";
    map.setAttributeNode(att);
    att = document.createAttribute("allowfullscreen");
    att.value = "";
    map.setAttributeNode(att);
    att = document.createAttribute("loading");
    att.value = "lazy";
    map.setAttributeNode(att);
    att = document.createAttribute("referrerpolicy");
    att.value = "no-referrer-when-downgrade";
    map.setAttributeNode(att);
    locationContainer.appendChild(map);
    // Text location Container
    let textLocationContainer = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "textLocationContainer";
    textLocationContainer.setAttributeNode(att);
    // Title
    let locationTitle = document.createElement("h1");
    att = document.createAttribute("id");
    att.value = "locationTitle";
    locationTitle.setAttributeNode(att);
    locationTitle.innerHTML = "Nuestra ubicaci&oacuten";
    textLocationContainer.appendChild(locationTitle);
    // Text
    let locationText = document.createElement("p");
    att = document.createAttribute("id");
    att.value = "locationText";
    locationText.setAttributeNode(att);
    locationText.innerHTML = "Av. Raval Carrascalet, 23, 46680 Algemesí, Valencia.";
    textLocationContainer.appendChild(locationText);
    // Schedule title
    let scheduleTitle = document.createElement("p");
    att = document.createAttribute("id");
    att.value = "scheduleTitle";
    scheduleTitle.setAttributeNode(att);
    scheduleTitle.innerHTML = "Horario";
    textLocationContainer.appendChild(scheduleTitle);
    // Schedule container
    scheduleContainer = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "scheduleContainer";
    scheduleContainer.setAttributeNode(att);
    let days;
    let hours;
    for (const day of ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]) {
        // Monday - Friday
        days = document.createElement("p");
        att = document.createAttribute("class");
        att.value = "days";
        days.setAttributeNode(att);
        days.innerHTML = day+":";
        scheduleContainer.appendChild(days);
        // Monday - Friday hours
        hours = document.createElement("p");
        att = document.createAttribute("class");
        att.value = "hours";
        hours.setAttributeNode(att);
        hours.innerHTML = "7:30 - 13:30, 15:00 - 19:00";
        scheduleContainer.appendChild(hours);
    }
    // Saturday
    days = document.createElement("p");
    att = document.createAttribute("class");
    att.value = "days";
    days.setAttributeNode(att);
    days.innerHTML = "S&aacutebado:";
    scheduleContainer.appendChild(days);
    // Saturday hours
    hours = document.createElement("p");
    att = document.createAttribute("class");
    att.value = "hours";
    hours.setAttributeNode(att);
    hours.innerHTML = "7:30 - 13:30";
    scheduleContainer.appendChild(hours);
    // Sunday
    days = document.createElement("p");
    att = document.createAttribute("class");
    att.value = "days";
    days.setAttributeNode(att);
    days.innerHTML = "Domingo:";
    scheduleContainer.appendChild(days);
    // Sunday hours
    hours = document.createElement("p");
    att = document.createAttribute("class");
    att.value = "hours closed";
    hours.setAttributeNode(att);
    hours.innerHTML = "cerrado";
    scheduleContainer.appendChild(hours);
    textLocationContainer.appendChild(scheduleContainer);
    locationContainer.appendChild(textLocationContainer);
    document.body.appendChild(locationContainer);

    createFooter("FindUs");
}

function showFindUs() {
    hideInit();
    hideProjects();
    hideCatalogue();

    findUsButton.disabled = true;
    findUsButton.setAttribute("aria-disabled", true);
    questionsContainer.style.display = "block";
    locationContainer.style.display = "flex";
    document.documentElement.scrollTop = 0;
    
    showFooter("FindUs");
}

function hideFindUs() {
    hideFooter("FindUs");
    findUsButton.disabled = false;
    findUsButton.setAttribute("aria-disabled", false);
    questionsContainer.style.display = "none";
    locationContainer.style.display = "none";
}

function createFooter(id) {
    let att;

    // Footer container
    let footerContainer = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "footerContainer"+id;
    footerContainer.setAttributeNode(att);
    att = document.createAttribute("class");
    att.value = "footerContainer";
    footerContainer.setAttributeNode(att);

    // Email footer
    let footerEmail = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "footerEmail";
    footerEmail.setAttributeNode(att);
    // Email icon
    footerIcon = document.createElement("img");
    att = document.createAttribute("class");
    att.value = "footerIcon";
    footerIcon.setAttributeNode(att);
    att = document.createAttribute("src");
    att.value = "images/findUs/emailIcon.png";
    footerIcon.setAttributeNode(att);
    footerEmail.appendChild(footerIcon);
    // Footer border Container
    let footerBorderContainer = document.createElement("a");
    att = document.createAttribute("class");
    att.value = "footerBorderContainer";
    footerBorderContainer.setAttributeNode(att);
    att = document.createAttribute("href");
    att.value = "mailto:"+EMAIL+"?subject="+EMAIL_SUBJECT+"&body="+EMAIL_BODY;
    footerBorderContainer.setAttributeNode(att);
    att = document.createAttribute("target");
    att.value = "_blank";
    footerBorderContainer.setAttributeNode(att);
    // Footer text border
    let footerBorder = document.createElement("p");
    att = document.createAttribute("class");
    att.value = "footerBorder";
    footerBorder.setAttributeNode(att);
    footerBorder.innerHTML = EMAIL;
    footerBorderContainer.appendChild(footerBorder);
    footerEmail.appendChild(footerBorderContainer);
    footerContainer.appendChild(footerEmail);

    // Whatsapp footer container
    let footerWhatsappContainer = document.createElement("p");
    att = document.createAttribute("id");
    att.value = "footerWhatsappContainer";
    footerWhatsappContainer.setAttributeNode(att);
    // Whatsapp icon
    footerIcon = document.createElement("img");
    att = document.createAttribute("class");
    att.value = "footerIcon";
    footerIcon.setAttributeNode(att);
    att = document.createAttribute("src");
    att.value = "images/findUs/whatsappIcon.png";
    footerIcon.setAttributeNode(att);
    footerWhatsappContainer.appendChild(footerIcon);
    for (const num of [WHATSAPP_1, WHATSAPP_2, WHATSAPP_3]) {
        // Footer border Container
        footerBorderContainer = document.createElement("a");
        att = document.createAttribute("class");
        att.value = "whatsappFooter";
        if (num != WHATSAPP_3)
            att.value += " whatsappFooterBorder";
        footerBorderContainer.setAttributeNode(att);
        att = document.createAttribute("href");
        att.value = "https://wa.me/"+num.replace(/\s+/g, '');
        footerBorderContainer.setAttributeNode(att);
        att = document.createAttribute("target");
        att.value = "_blank";
        footerBorderContainer.setAttributeNode(att);
        // Footer text border
        footerBorder = document.createElement("p");
        att = document.createAttribute("class");
        att.value = "footerBorder";
        footerBorder.setAttributeNode(att);
        footerBorder.innerHTML = "+"+num;

        footerBorderContainer.appendChild(footerBorder);
        footerWhatsappContainer.appendChild(footerBorderContainer);
    }
    footerContainer.appendChild(footerWhatsappContainer);

    // Phone number
    let footerPhone = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "footerPhone";
    footerPhone.setAttributeNode(att);
    // Instagram icon
    footerIcon = document.createElement("img");
    att = document.createAttribute("class");
    att.value = "footerIcon";
    footerIcon.setAttributeNode(att);
    att = document.createAttribute("src");
    att.value = "images/findUs/instagramIcon.png";
    footerIcon.setAttributeNode(att);
    footerPhone.appendChild(footerIcon);
    // Footer border Container
    footerBorderContainer = document.createElement("a");
    att = document.createAttribute("class");
    att.value = "footerBorderContainer";
    footerBorderContainer.setAttributeNode(att);
    att = document.createAttribute("href");
    att.value = "http://instagram.com/_u/"+INSTAGRAM+"/";
    footerBorderContainer.setAttributeNode(att);
    att = document.createAttribute("target");
    att.value = "_blank";
    footerBorderContainer.setAttributeNode(att);
    // Footer text border
    footerBorder = document.createElement("p");
    att = document.createAttribute("class");
    att.value = "footerBorder";
    footerBorder.setAttributeNode(att);
    footerBorder.innerHTML = "@"+INSTAGRAM;

    footerBorderContainer.appendChild(footerBorder);
    footerPhone.appendChild(footerBorderContainer);
    footerContainer.appendChild(footerPhone);
    document.body.appendChild(footerContainer);
}

function showFooter(id) {
    document.getElementById("footerContainer"+id).style.display = "flex";
}

function hideFooter(id) {
    document.getElementById("footerContainer"+id).style.display = "none";
}

function createPreview() {
    let att;
    
    // Container background
    previewBackground = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "previewBackground";
    previewBackground.setAttributeNode(att);
    att = document.createAttribute("onclick");
    att.value = "hidePreview()";
    previewBackground.setAttributeNode(att);
    // Image
    imagePreview = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "imagePreview";
    imagePreview.setAttributeNode(att);

    previewBackground.appendChild(imagePreview);
    document.body.appendChild(previewBackground);
}

function showPreview(url) {
    previewBackground.style.display = "block";
    imagePreview.style.backgroundImage = "url("+url+")";
    window.requestAnimationFrame( function () {
        previewBackground.style.opacity = "0";
        imagePreview.style.width = "0";
        window.requestAnimationFrame( function () {
            previewBackground.style.opacity = "1";
            imagePreview.style.width = "min(95%, 950px)";
        });
    });
}

function hidePreview() {
    previewBackground.style.display = "none";
    previewBackground.style.opacity = "0";
    imagePreview.style.width = "0";
}