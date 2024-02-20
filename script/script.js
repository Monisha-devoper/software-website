// Get a reference to the form
const myForm = document.getElementById('myForm');

// Add a submit event listener to the form
myForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Clear the form
    myForm.reset();
});
