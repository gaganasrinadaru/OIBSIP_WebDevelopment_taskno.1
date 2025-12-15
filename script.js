console.log("Landing page loaded successfully!");

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select all service boxes
    var boxes = document.querySelectorAll(".service-boxes .box");

    // Loop through each box and add hover effects
    boxes.forEach(function(box) {
        box.addEventListener("mouseover", function() {
            box.style.backgroundColor = "#007BFF"; // Blue background on hover
            box.style.color = "#fff";              // White text on hover
        });

        box.addEventListener("mouseout", function() {
            box.style.backgroundColor = "#fff";    // White background on mouse out
            box.style.color = "#333";              // Dark text on mouse out
        });
    });
});
