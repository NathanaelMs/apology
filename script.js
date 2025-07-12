function revealPage() {
    const backgroundMusic = document.getElementById('backgroundMusic');
  
    if (backgroundMusic.paused) {
      backgroundMusic.play();
    } else {
      backgroundMusic.pause();
    }

    document.getElementById("intro-gate").style.display = "none";
    const content = document.getElementById("main-content");
    content.style.display = "block";

    // Allow time for layout to update before triggering animations
    setTimeout(() => {
      document.getElementById("main-header").classList.add("fade-in");
      document.querySelector(".decorative-images").classList.add("fade-in");
      document.querySelector(".apology-text").classList.add("fade-in-delay");
    }, 100);

}

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.gallery-img');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
      }
    });
  }, {threshold: 0.1});

  images.forEach(img => {
    img.style.opacity = 0;
    img.style.transition = 'opacity 0.5s ease';
    observer.observe(img);
  });
});

function fixHeart(response) {
  const apologyBox = document.querySelector('.apology-box');
  const buttons = document.querySelectorAll('.response-btn');
  
  // responsePrompt.style.display = 'none';

  // Disable both buttons after click
  buttons.forEach(btn => {
    btn.disabled = true;
    btn.style.opacity = '0.7';
    btn.style.cursor = 'not-allowed';
  });

  if (response === 'yes') {
    // Change apology box content
    apologyBox.style.backgroundColor = 'rgba(144, 238, 144, 0.3)'; // Light green
    apologyBox.innerHTML = `
      <div class="apology-text">
        <p>Thank you for giving me another chance ❤️<br>I promise to do better, I love you :D</p>
        <div class="gif-container">
          <img src="stuffs/Decorated Duo Wi.jpg" class="forgiveness-gif" alt="i love you">
        </div>
      </div>
    `;
    
  } else {
    // For "no" response
    apologyBox.style.backgroundColor = 'rgba(255, 182, 193, 0.3)'; // Light pink
    apologyBox.innerHTML = `
      <div class="apology-text">
        <p>I understand and respect your need for time :(</p>
        <div class="gif-container">
          <img src="stuffs/Sad Wi.png" class="forgiveness-gif" alt="i love you">
        </div>
      </div>
    `;
  }

  // Add fade-in effect to new content
  setTimeout(() => {
    document.querySelector('.apology-text').classList.add('fade-in');
  }, 100);
}

function createSmallHearts() {
  var smallHeartsContainer = document.getElementById('small-hearts-container');
  for (var i = 0; i < 20; i++) {
    var smallHeart = document.createElement('div');
    smallHeart.className = 'small-heart';
    smallHeartsContainer.appendChild(smallHeart);
    animateSmallHeart(smallHeart);
  }
}