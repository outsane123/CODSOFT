function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (e) {
        alert("Invalid expression");
    }
}
