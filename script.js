document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.querySelector('form');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah pengiriman form secara default
            alert('Terima kasih atas feedback Anda!');
            feedbackForm.reset(); // Mengosongkan form setelah pengiriman
        });
    }
});