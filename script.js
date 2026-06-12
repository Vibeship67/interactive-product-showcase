// Function to show message popup
function showMessage(message) {
    const popup = document.getElementById('messagePopup');
    const messageText = document.getElementById('messageText');
    messageText.textContent = message;
    popup.classList.add('active');
}

// Function to close message popup
function closeMessage() {
    const popup = document.getElementById('messagePopup');
    popup.classList.remove('active');
}

// Close popup when clicking outside
document.addEventListener('click', function(event) {
    const popup = document.getElementById('messagePopup');
    if (event.target === popup) {
        closeMessage();
    }
});

// Function to create confetti
function triggerConfetti() {
    const colors = ['#6c5ce7', '#a29bfe', '#fd79a8', '#ff7675', '#74b9ff'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.borderRadius = '50%';
        
        document.body.appendChild(confetti);

        // Animate confetti falling
        const duration = Math.random() * 2 + 2;
        const delay = Math.random() * 0.5;
        const xMove = (Math.random() - 0.5) * 400;
        
        confetti.style.animation = `fall ${duration}s linear ${delay}s forwards`;

        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, (duration + delay) * 1000);
    }
    
    showMessage('🎉 Thank you for your support! Your trust means everything to us! 🎉');
}

// Add CSS animation for confetti falling
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add some interactivity on page load
window.addEventListener('load', function() {
    console.log('Welcome to the interactive product demo!');
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature').forEach(el => observer.observe(el));
});

// Easter egg - press 'C' to trigger confetti
document.addEventListener('keydown', function(event) {
    if (event.key === 'c' || event.key === 'C') {
        triggerConfetti();
    }
});