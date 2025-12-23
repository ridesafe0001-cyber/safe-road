/**
 * SafeRide - Contact Form Handler
 * Handles form submission and validation
 */

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Basic validation
            if (!name || !email || !message) {
                showMessage('Please fill in all fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission (in production, this would send to a server)
            // For demo purposes, we'll just show a success message
            showMessage('Thank you for your message! We will get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();

            // Optionally, you could open email client:
            // window.location.href = `mailto:contact@saferide.demo?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
        });
    }

    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';

        // Hide message after 5 seconds
        setTimeout(function() {
            formMessage.style.display = 'none';
        }, 5000);
    }
});

