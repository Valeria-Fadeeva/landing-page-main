const buttons = document.querySelectorAll("input.button");

for(i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {
        window.open(e.target.attributes["data-url"].value, "_blank");
    });
}
