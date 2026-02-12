// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Reveal Button Functionality
    const revealBtn = document.getElementById('revealBtn');
    const hiddenMessage = document.getElementById('hiddenMessage');
    
    revealBtn.addEventListener('click', function() {
        hiddenMessage.classList.toggle('show');
        
        if (hiddenMessage.classList.contains('show')) {
            revealBtn.textContent = 'Hide Message ❤️';
            createConfetti();
        } else {
            revealBtn.textContent = 'Click to Reveal ❤️';
        }
    });
    
    // Create Floating Hearts
    createFloatingHearts();
    
    // Add hover effects to reason cards
    addReasonCardEffects();
    
    // Animate photo frames on scroll
    animateOnScroll();
});

// Create Floating Hearts Background
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts-background');
    const heartCount = 15;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤️';
        
        // Random positioning
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        heart.style.opacity = Math.random() * 0.3 + 0.1;
        
        heartsContainer.appendChild(heart);
    }
    
    // Add CSS for floating hearts
    const style = document.createElement('style');
    style.textContent = `
        .floating-heart {
            position: absolute;
            bottom: -50px;
            animation: floatUp linear infinite;
            pointer-events: none;
        }
        
        @keyframes floatUp {
            0% {
                bottom: -50px;
                transform: translateX(0) rotate(0deg);
            }
            50% {
                transform: translateX(20px) rotate(180deg);
            }
            100% {
                bottom: 110vh;
                transform: translateX(-20px) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
}

// Create Confetti Effect
function createConfetti() {
    const confettiCount = 50;
    const colors = ['#ff6b9d', '#ffc1cc', '#ff385c', '#ffe5ec', '#ff1493'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
    
    // Add confetti CSS if not already added
    if (!document.querySelector('#confetti-style')) {
        const style = document.createElement('style');
        style.id = 'confetti-style';
        style.textContent = `
            .confetti {
                position: fixed;
                width: 10px;
                height: 10px;
                top: -10px;
                z-index: 9999;
                animation: confettiFall linear forwards;
                pointer-events: none;
            }
            
            @keyframes confettiFall {
                0% {
                    top: -10px;
                    transform: rotate(0deg);
                }
                100% {
                    top: 100vh;
                    transform: rotate(720deg);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Add Hover Effects to Reason Cards
function addReasonCardEffects() {
    const reasonCards = document.querySelectorAll('.reason-card');
    
    reasonCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #ffe5ec 0%, #ffc1cc 100%)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = '#ffffff';
        });
    });
}

// Animate Elements on Scroll
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    const photoFrames = document.querySelectorAll('.photo-frame');
    photoFrames.forEach(frame => {
        frame.style.opacity = '0';
        frame.style.transform = 'translateY(20px)';
        frame.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(frame);
    });
}

// Add Sparkle Effect on Click
document.addEventListener('click', function(e) {
    // Don't add sparkles if clicking on buttons
    if (e.target.tagName === 'BUTTON') return;
    
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = e.pageX + 'px';
    sparkle.style.top = e.pageY + 'px';
    sparkle.innerHTML = '✨';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
    
    // Add sparkle CSS if not already added
    if (!document.querySelector('#sparkle-style')) {
        const style = document.createElement('style');
        style.id = 'sparkle-style';
        style.textContent = `
            .sparkle {
                position: absolute;
                pointer-events: none;
                font-size: 20px;
                animation: sparkleAnimation 1s ease-out forwards;
                z-index: 9999;
            }
            
            @keyframes sparkleAnimation {
                0% {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(0);
                }
                50% {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1.5);
                }
                100% {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0.5);
                }
            }
        `;
        document.head.appendChild(style);
    }
});

// Add Typing Effect to Letter (Optional Enhancement)
function typeLetterEffect() {
    const letterContent = document.querySelector('.letter-content');
    const paragraphs = letterContent.querySelectorAll('p');
    
    paragraphs.forEach((p, index) => {
        const text = p.textContent;
        p.textContent = '';
        p.style.opacity = '0';
        
        setTimeout(() => {
            p.style.opacity = '1';
            let charIndex = 0;
            
            const typeInterval = setInterval(() => {
                if (charIndex < text.length) {
                    p.textContent += text.charAt(charIndex);
                    charIndex++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 30);
        }, index * 2000);
    });
}

// Uncomment the line below to enable typing effect
// setTimeout(typeLetterEffect, 1000);

// Add Heartbeat Effect to Main Title
const mainTitle = document.querySelector('.main-title');
if (mainTitle) {
    setInterval(() => {
        mainTitle.style.animation = 'none';
        setTimeout(() => {
            mainTitle.style.animation = 'pulse 0.5s ease';
        }, 10);
    }, 3000);
}

// Console Message
console.log('%c💖 Happy Valentine\'s Day! 💖', 'font-size: 24px; color: #ff6b9d; font-weight: bold;');
console.log('%cMade with love ❤️', 'font-size: 16px; color: #ff385c;');
