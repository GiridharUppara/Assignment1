document.getElementById('bio-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const bioData = {
        name: document.getElementById('full-name').value,
        dob: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
    };

    // For now, just log the bio data in the console
    console.log(bioData);

    // You can use AJAX or PHP to send this data to a server or display it on the page
});
