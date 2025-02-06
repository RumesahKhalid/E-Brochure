// Select the brochure element
const brochure = document.getElementById('brochure');

// Add click event listener
brochure.addEventListener('click', () => {
    // Toggle the 'flip' class on click
    brochure.classList.toggle('flip');
});