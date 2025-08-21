document.addEventListener('DOMContentLoaded', () => {
    // Initialize buttons
    initializeButtons();
    
    // Make the cake glow when hovering
    const cake = document.querySelector('.birthday-cake');
    cake.addEventListener('mouseenter', () => {
        cake.style.filter = 'brightness(1.2)';
    });
    cake.addEventListener('mouseleave', () => {
        cake.style.filter = 'brightness(1)';
    });
});

function createSparkle(e) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = e.pageX + 'px';
    sparkle.style.top = e.pageY + 'px';
    document.body.appendChild(sparkle);
    
    // Remove sparkle after animation
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Add confetti effect
setInterval(() => {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    confetti.style.opacity = Math.random();
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    document.body.appendChild(confetti);
    
    // Remove confetti after animation
    setTimeout(() => {
        confetti.remove();
    }, 5000);
}, 200);

function initializeButtons() {
    const wishBtn = document.querySelector('.wish-btn');
    const musicBtn = document.querySelector('.music-btn');
    const surpriseBtn = document.querySelector('.surprise-btn');
    const birthdaySong = document.getElementById('birthday-song');

    wishBtn.addEventListener('click', () => showMessage(wishBtn.dataset.message));
    
    musicBtn.addEventListener('click', () => {
        if (birthdaySong.paused) {
            birthdaySong.play();
            musicBtn.classList.add('playing');
            musicBtn.textContent = 'Playing... 🎵';
            startMusicNotes();
        } else {
            birthdaySong.pause();
            birthdaySong.currentTime = 0;
            musicBtn.classList.remove('playing');
            musicBtn.textContent = 'Play Birthday Song 🎵';
        }
    });

    surpriseBtn.addEventListener('click', () => {
        showMessage(surpriseBtn.dataset.message);
        createMusicBurst();
    });
}

function showMessage(message) {
    const popup = document.createElement('div');
    popup.className = 'message-popup';
    popup.textContent = message;
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.style.opacity = '0';
        setTimeout(() => popup.remove(), 500);
    }, 2000);
}

function startMusicNotes() {
    const noteInterval = setInterval(() => {
        if (document.querySelector('.music-btn').classList.contains('playing')) {
            createMusicNote();
        } else {
            clearInterval(noteInterval);
        }
    }, 300);
}

function createMusicNote() {
    const notes = ['♪', '♫', '♬', '♩', '♭', '♮'];
    const note = document.createElement('div');
    note.className = 'music-note';
    note.textContent = notes[Math.floor(Math.random() * notes.length)];
    
    // Random position near the music button
    const musicBtn = document.querySelector('.music-btn');
    const rect = musicBtn.getBoundingClientRect();
    const x = rect.left + rect.width/2;
    const y = rect.top;
    
    note.style.left = `${x}px`;
    note.style.top = `${y}px`;
    note.style.setProperty('--tx', `${(Math.random() - 0.5) * 100}px`);
    note.style.setProperty('--rotate', `${(Math.random() - 0.5) * 50}deg`);
    
    document.body.appendChild(note);
    setTimeout(() => note.remove(), 2000);
}

function createMusicBurst() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const note = document.createElement('div');
            note.className = 'music-note';
            note.textContent = '♫';
            note.style.left = `${centerX}px`;
            note.style.top = `${centerY}px`;
            note.style.setProperty('--tx', `${Math.cos(i * 30 * Math.PI / 180) * 200}px`);
            note.style.setProperty('--rotate', `${i * 30}deg`);
            document.body.appendChild(note);
            setTimeout(() => note.remove(), 2000);
        }, i * 50);
    }
}
