
// Event Management
export function trackPageEvents() {

    var buttons = document.getElementsByTagName('button');
    // Attach a click event listener to each button
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', logButtonClick);
    }
}

// Event listener function to log the button click
function logButtonClick(event) {
    // Retrieve the button element that was clicked
    var button = event.target;

    // Log the button click information
    console.log('Button Clicked:', button.innerText);
}
