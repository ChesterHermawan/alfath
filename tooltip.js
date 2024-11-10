document.addEventListener("DOMContentLoaded", function() {
    // Select the image and create the tooltip
    const bookImage = document.querySelector(".book-cover img");
    const tooltip = document.createElement("div");

    // Set tooltip text and style
    tooltip.textContent = `Graphic Standard Manual for a rebranding project titled "9 Naga." It includes elements like color palettes, typefaces, and the design of both the previous and rebranded logos. The manual provides guidelines for using the logo, secondary alternatives, and super graphics. The rebranding appears to aim for a fresh, cohesive look for "9 Naga," ensuring consistency across various visual assets and usage scenarios.`;
    tooltip.classList.add("tooltip");
    document.body.appendChild(tooltip);

    // Position the tooltip on hover
    bookImage.addEventListener("mouseenter", function(event) {
        console.log('kontol');
        tooltip.style.display = "block";
        tooltip.style.left = event.pageX + "px";
        tooltip.style.top = event.pageY + "px";
    });

    // Update tooltip position as the mouse moves
    bookImage.addEventListener("mousemove", function(event) {
        console.log('kontol hitam');
        tooltip.style.left = event.pageX + 15 + "px";
        tooltip.style.top = event.pageY + 15 + "px";
    });

    // Hide the tooltip when the mouse leaves the image
    bookImage.addEventListener("mouseleave", function() {
        console.log('pusy');
        tooltip.style.display = "none";
    });
});
