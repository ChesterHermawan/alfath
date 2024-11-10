// Select the image container
const imageContainer = document.getElementById("projectImageContainer");
const description = imageContainer.querySelector(".description");

// Add mouseenter and mouseleave events
imageContainer.addEventListener("mouseenter", () => {
  description.style.opacity = "1"; // Show the description
});

imageContainer.addEventListener("mouseleave", () => {
  description.style.opacity = "0"; // Hide the description
});
