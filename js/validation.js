function validateForm() {
    var name = document.forms["form"]["name"];
    var adress = document.forms["form"]["adress"];
    var zip = document.forms["form"]["zip"];
    var city = document.forms["form"]["city"];

    var valid = true;

    if (!validateName(name)) valid = false;
    if (!validateAdress(adress)) valid = false;
    if (!validateZip(zip)) valid = false;
    if (!validateCity(city)) valid = false;

    if (valid) {
        showOverlay();
    }
}

function validateName(element) {
    var valid = false;
    if (validateEmpty(element)) {
        if (/^([A-Za-zäöüÄÖÜ-]+ ?[A-Za-zäöüÄÖÜ-]+)$/.test(element.value)) {
            valid = true;
        }
    }
    evaluateValidation(element, valid);
    return valid;
}

function validateAdress(element) {
    var valid = false;
    if (validateEmpty(element)) {
        if (/^([a-zA-ZäöüÄÖÜ \.]+ [0-9]+[a-zA-Z]?)$/.test(element.value)) {
            valid = true;
        }
    }
    evaluateValidation(element, valid);
    return valid;
}

function validateZip(element) {
    var valid = false;
    if (validateEmpty(element)) {
        if (/^(\d{5})$/.test(element.value)) {
            valid = true;
        }
    }
    evaluateValidation(element, valid);
    return valid;
}

function validateCity(element) {
    var valid = false;
    if (validateEmpty(element)) {
        if (/^([A-Za-z].+)$/.test(element.value)) {
            valid = true;
        }
    }
    evaluateValidation(element, valid);
    return valid;
}

function validateMotive(element) {
    var valid = false;
    if (validateEmpty(element)) {
        valid = true;
    }
    evaluateValidation(element, valid);
    return valid;
}

/**
 * Prüft das übergebene Elment ob eine Eingabe gemacht wurde oder nicht.
 * 
 * @param {*} element as Objekt
 */
function validateEmpty(element) {
    if (element.value !== "") {
        return true;
    } 
    return false;
}

/**
 * Ist die Validierung true, so wird der Rahmen des Elements grün gefärmbt, ansonsten rot.
 * 
 * @param {*} element 
 * @param {*} valid 
 */
function evaluateValidation(element, valid) {
    if(valid){
        element.style.borderColor = "green";
        element.nextElementSibling.style.visibility = "hidden";
    } else {
        element.style.borderColor = "red";
        element.nextElementSibling.style.visibility = "visible";
    }
}
