window.addEventListener("load", () => {
    const sound = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');

    //creating colors array
    const colors = ['blue', 'blueviolet', 'brown', 'chocolate', 'darkgoldenrod', 'darkorchid'];


    // we have to select each pad on the pads div element
    // forEach is the loop to select each pad 
    // we have to use arrow function 
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sound[index].currentTime = 0;
            sound[index].play();
            createBubble(index);
        });
    });
    // creating function and pass index 
    const createBubble = index => {
        // Create Bubble
        const bubble = document.createElement("div"); //Here we have to create the div element
        visual.appendChild(bubble);
        // appling style to bubble
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener("animationend", function() {
            visual.removeChild(this);
        });
    }

})