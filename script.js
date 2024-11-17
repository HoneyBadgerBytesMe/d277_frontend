document.getElementById("contact-form").addEventListener("submit", function(event) {
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirm-email").value;

    if (email !== confirmEmail) {
        alert("Emails do not match.");
        event.preventDefault();
    }
});
