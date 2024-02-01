document.addEventListener("DOMContentLoaded", function() {
    var skillsElements = document.querySelectorAll(".skills");

    skillsElements.forEach(function(element) {
        var percent = element.getAttribute("data-percent");
        element.style.width = percent + "%";
    });
});

function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // You can perform further actions here with the form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Optionally, you can reset the form
    document.getElementById('contactForm').reset();
}

document.addEventListener("DOMContentLoaded", function() {
    // Simulate a delay (you can replace this with actual loading logic)
    setTimeout(function() {
        // Hide the loading animation
        document.querySelector('.loading-container').style.display = 'none';

        // Show the main content
        document.querySelector('.main-content').style.display = 'block';

        // Allow scrolling by removing the 'overflow: hidden;' style
        document.body.style.overflow = 'auto';
        window.onload = hideLoading;
    }, 2000); // Change the duration as needed
});
