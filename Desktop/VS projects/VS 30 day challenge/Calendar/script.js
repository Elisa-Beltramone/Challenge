function addTask() {
    let li = document.createElement("li");

    let hello = console.log("hola");
}
addNew();

function toggleDate() {
    let button = document.getElementById('show-date');
    if (button.innerHTML === "Date") {
        button.innerHTML = new Date().toDateString();
    } else {
        button.innerHTML = "Date";
    }
}

document.getElementById('show-date').addEventListener('click', toggleDate);
