function append(a) {
    let add = document.getElementById("input");
    add.value += a;
}

function clearInput() {
    input.value = "";
}

function calculate() {
    try {
        input.value = eval(input.value);
    } catch {
        input.value = "Error";
    }
}



