// var m = prompt("hey");
function assignment(){
    var popUp = prompt("Type in an adjective")
    message = document.createElement("h2");
    text = document.createTextNode("You are a slightly " + popUp + " person");
    console.log(text);
    message.appendChild(text);
    document.querySelector("#final-message").appendChild(text);
}

// Form
function jobApplication(){
    let applicantData = document.querySelectorAll("input")
    console.log(applicantData);
}