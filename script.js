function logOutIn(element) {
    if (element.innerText == "Login")
    {
        element.innerText = "Logout";
    }
    else
    {
        element.innerText = "Login";
    }
}

function remove(element) {
    element.remove();
}

function alertBox() {
    alert("Ninja was liked!");
}

function count() {
    count++;
}
