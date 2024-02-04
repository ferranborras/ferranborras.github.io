const WHATSAPP_1 = "34 634 67 79 12";
const WHATSAPP_2 = "34 634 67 79 13";
const WHATSAPP_3 = "34 634 67 79 14";
const EMAIL = "zucar.z.f@gmail.com";
const EMAIL_SUBJECT = "Contacto web";
const EMAIL_BODY = "Hola, quisiera hacer una consulta sobre el siguiente asunto.";
const INSTAGRAM = "disseny.amb.pedra";

const nameList = [
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

const colorList = [
    "Blanco",
    "Beige",
    "Amarillo",
    "Naranja",
    "Rosa",
    "Rojo",
    "Marr&oacuten",
    "Verde",
    "Azul",
    "Morado",
    "Negro"
];

const saturationList = [
    "Claro",
    "Saturado",
    "Desaturado",
    "Oscuro",
];

const brandsList = [
    "Marca1",
    "Marca2",
    "Marca3",
    "Marca4",
    "Marca5"
];

const stoneList = [
    "Piedra1",
    "Piedra2",
    "Piedra3",
    "Piedra4",
    "Piedra5",
    "Piedra6",
    "Piedra7",
    "Piedra8",
    "Piedra9",
    "Piedra10"
];

// Palette sample variables
let sampleIndex;
let sampleName;

window.onload = start();

function start() {
    let urlParams = new URLSearchParams(window.location.search);
    sampleName = urlParams.get('sampleIndex');
    let i = 0;
    while (i < nameList.length) {
        if (nameList[i][0] == sampleName) {
            sampleIndex = i;
            break;
        }
        i++;
    }
    let att;

    document.title = sampleName + " - Disseny amb pedra";

    // Banner
    let banner = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "bannerPalette";
    banner.setAttributeNode(att);

    let logo = document.createElement("img");
    att = document.createAttribute("id");
    att.value = "logoPalette";
    logo.setAttributeNode(att);
    att = document.createAttribute("src");
    att.value = "images/init/logo.png";
    logo.setAttributeNode(att);

    let logoIcon = document.createElement("img");
    att = document.createAttribute("id");
    att.value = "logoIconPalette";
    logoIcon.setAttributeNode(att);
    att = document.createAttribute("src");
    att.value = "images/menu/icon.png";
    logoIcon.setAttributeNode(att);

    banner.appendChild(logo);
    banner.appendChild(logoIcon);
    document.body.appendChild(banner);

    // Sample container
    let sampleContainer = document.createElement("id");
    att = document.createAttribute("id");
    att.value = "sampleContainer";
    sampleContainer.setAttributeNode(att);
    // Sample image
    let sampleImage = document.createElement("img");
    att = document.createAttribute("id");
    att.value = "sampleImage";
    sampleImage.setAttributeNode(att);
    att = document.createAttribute("src");
    att.value = "images/catalogue/samples/"+sampleName+".png";
    sampleImage.setAttributeNode(att);
    sampleContainer.appendChild(sampleImage);
    // Sample information Container
    let sampleInfoContainer = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "sampleInfoContainer";
    sampleInfoContainer.setAttributeNode(att);
    // Title
    let sampleTitle = document.createElement("h1");
    att = document.createAttribute("id");
    att.value = "sampleTitle";
    sampleTitle.setAttributeNode(att);
    sampleTitle.innerHTML = sampleName;
    sampleInfoContainer.appendChild(sampleTitle);
    // Description
    let sampleDescription = document.createElement("p");
    att = document.createAttribute("id");
    att.value = "sampleDescription";
    sampleDescription.setAttributeNode(att);
    sampleDescription.innerHTML = "Lorem ipsum dolor sit amet consectetur adipiscing, "+
    "elit imperdiet massa ornare ante sociosqu, mattis risus ad egestas torquent. "+
    "Hendrerit nullam habitasse lacus sollicitudin libero urna torquent cras proin "+
    "eget montes massa porta, scelerisque platea feugiat fringilla nascetur egestas ";
    sampleInfoContainer.appendChild(sampleDescription);

    let category;
    let categoryValue;
    i = 1;
    for (const array of [colorList, saturationList, stoneList, brandsList]) {
        // Information pair
        pairContainer = document.createElement("div");
        att = document.createAttribute("class");
        att.value = "pairContainer";
        pairContainer.setAttributeNode(att);
        // Monday - Friday
        category = document.createElement("p");
        att = document.createAttribute("class");
        att.value = "category";
        category.setAttributeNode(att);
        switch (array) {
            case colorList:
                category.innerHTML = "Color:";
                break;
            case saturationList:
                category.innerHTML = "Iluminación:";
                break;
            case stoneList:
                category.innerHTML = "Piedra:";
                break;
            case brandsList:
                category.innerHTML = "Marca:";
                break;
        }
        pairContainer.appendChild(category);
        // Monday - Friday hours
        categoryValue = document.createElement("p");
        att = document.createAttribute("class");
        att.value = "categoryValue";
        categoryValue.setAttributeNode(att);
        categoryValue.innerHTML = array[nameList[sampleIndex][i]];
        pairContainer.appendChild(categoryValue);
        sampleInfoContainer.appendChild(pairContainer);
        i++;
    }
    sampleContainer.appendChild(sampleInfoContainer);
    document.body.appendChild(sampleContainer);

    // Suggestions container
    let suggestionsContainer = document.createElement("div");
    att = document.createAttribute("id");
    att.value = "suggestionContainer";
    suggestionsContainer.setAttributeNode(att);
    i = sampleIndex+1;
    console.log(i);
    let count = 6;
    if (sampleIndex == nameList.length-1) {
        i = 0;
    }
    let suggestedImages;
    let suggestedBackground;
    while (i < nameList.length && count > 0) {
        // Suggested images
        suggestedImages = document.createElement("div");
        att = document.createAttribute("class");
        att.value = "suggestedImages";
        suggestedImages.setAttributeNode(att);
        //suggestedImages.style.backgroundImage = "url(/images/catalogue/samples/"+nameList[i][0]+".png)";
        suggestedImages.style.backgroundImage = "url(/images/catalogue/samples/placeHolder.png)";
        // Suggested background gradient
        suggestedBackground = document.createElement("a");
        att = document.createAttribute("class");
        att.value = "suggestedBackground";
        suggestedBackground.setAttributeNode(att);
        att = document.createAttribute("href");
        att.value = "palette.html?sampleIndex=" + encodeURIComponent(nameList[i][0]);
        suggestedBackground.setAttributeNode(att);
        att = document.createAttribute("target");
        att.value = "_self";
        suggestedBackground.setAttributeNode(att);
        suggestedBackground.innerHTML = nameList[i][0];
        suggestedImages.appendChild(suggestedBackground);
        suggestionsContainer.appendChild(suggestedImages);
        count--;
        if (i == nameList.length)
            i = 0;
        else
            i++;
    }
    document.body.appendChild(suggestionsContainer);

    // Footer container
    let footerContainer = document.createElement("div");
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