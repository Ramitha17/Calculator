let cd = "0";
let rd = false;

function appendToDisplay(val) {
    if (cd === "0" || rd)
    {
        cd = val;
    } 
    else {
        cd += val;
    }
    rd = false;
    updatedisplay();
}

function updatedisplay() {
    const displayelement = document.getElementById("display1").children[0];
    displayelement.textContent = cd;
}

function calculateResult() {
    try {
        const result = eval(cd);
        cd = result.toString();
        updatedisplay();
    } catch (error) {
        cd = "Error";
        updatedisplay();
    }
    rd = true;
}

function clearLastElement() {
    cd = cd.slice(0, -1);
    if (cd === "") {
        cd = "0";
    }
    updatedisplay();
}

function clearDisplay() {
    cd = "0";
    rd = false;
    updatedisplay();
}
