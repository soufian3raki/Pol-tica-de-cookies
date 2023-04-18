// Inicializa "dataLayer" sólo una vez
window.dataLayer = window.dataLayer || [];

// Obtiene el elemento con ID #cookieConsent del DOM 
const cookieConsent = document.getElementById("cookieConsent");

// La función gtag() agrega los argumentos que recibe en el arreglo dataLayer
function gtag() {
    dataLayer.push(arguments);
}

// La función acceptCookies() es llamada cuando el usuario acepta las cookies
function acceptCookies() {
    // Llama a la función gtag() para agregar datos a dataLayer
    gtag('js', new Date());
    gtag('config', 'G-GN99JLLESQ');

    // Agregar la clase "hide" al elemento "#cookieConsent"
    cookieConsent.classList.add("hide");
}

// Si se encuentra alguna cookie relacionada con Google Analytics, oculta la ventana de consentimiento
if (document.cookie.indexOf("_ga") != -1 && document.cookie.indexOf("_ga_GN99JLLESQ") != -1) {
    cookieConsent.classList.add("hide");
}
