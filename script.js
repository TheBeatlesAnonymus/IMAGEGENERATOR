var defaultUrl = "https://image.pollinations.ai/prompt/";
var promptInput = document.getElementById('ThePrompt');
var defaultParams = "?width=500&height=500&nologo=true";
var image = document.getElementById('log')
function generate() {
    var replacedValue = replaceSpaces(promptInput);
    if (replacedValue) {
        console.log(defaultUrl + replacedValue + defaultParams);
        image.src = defaultUrl + replacedValue + defaultParams
    }
    
}

function replaceSpaces(input) {
    var inputValue = input.value;
    var replacedValue = inputValue.replace(/ /g, "%20");
    return replacedValue;
}

document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("myImage");
    var loadingIcon = document.getElementById("loadingIcon");

    // Show loading icon while image is loading
    image.addEventListener("load", function() {
        loadingIcon.style.display = "none";
    });

    // Show loading icon if image fails to load
    image.addEventListener("error", function() {
        loadingIcon.classList.remove("fa-spinner", "fa-spin");
        loadingIcon.classList.add("fa-exclamation-circle");
    });

    // Show loading icon if image is still loading after a timeout (optional)
    setTimeout(function() {
        if (!image.complete) {
            loadingIcon.style.display = "block";
        }
    }, 1000); // Adjust the timeout duration as needed
});