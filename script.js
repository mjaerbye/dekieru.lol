    let isMusicPlaying = true;
    let backgroundRedTimer = null;
    let backgroundRedProgress = 0;
    let buttonClickCount = 0;
    let glitchesDisabled = false;
    
    function stopMusic() {
    const music = document.getElementById('bg-music');
    if (music) {
      music.pause();
      music.currentTime = 0;
    }
  }
    
    function toggleMusic() {
      const music = document.getElementById('bg-music');
      const toggleBtn = document.getElementById('music-toggle-btn');
      const volumeSlider = document.getElementById('volume-slider');
      
      if (music) {
        if (isMusicPlaying) {
          music.pause();
          toggleBtn.textContent = 'Play Music';
          if (volumeSlider) {
            volumeSlider.disabled = true;
            volumeSlider.style.opacity = '0.5';
          }
        } else {
          music.play();
          toggleBtn.textContent = 'Stop Music';
          if (volumeSlider) {
            volumeSlider.disabled = false;
            volumeSlider.style.opacity = '1';
          }
        }
        isMusicPlaying = !isMusicPlaying;
    }
  }
    // Content for each tab
    const contentMap = {
      about: `
  <div class="left-column">
    <img src="img/about_me.jpg" alt="Profile Image">
    <p>just call me <strong>dekieru</strong></p>
    <p><strong>info:</strong><br>19 y.o. | based in Zurich, Switzerland | RU / UA / ENG</p>
  </div>
  <div class="middle-column">
    <h2>dekieru.lol</h2>
    <p>Yevhen IRL, dekieru online. I'm trainwreck. I watch anime, dive into visual novels, and slowly rot away at home. I never leave my room, cover the walls with posters of my favorite shows, and decay in sleep.</p>
    <p><strong>smth else:</strong><br>worked almost 1 yr SMM <a href="https://cybershoke.net/cs2">CYBERSHOKE.NET</a><br>and 1.5 yrs editor <a href="https://t.me/retakenews">@retakenews</a><br>currently just studying at a Berufsschule</p>
    <p><strong>my go-tos</p>
    <a href="https://vndb.org/v2153" target="_blank"><img src="img/button.gif"></a><a href="https://vndb.org/v3144" target="_blank"><img src="img/button3.gif"></a><a href="https://madoka.fandom.com/wiki/Madoka_Magica_Wiki" target="_blank"><img src="img/button4.gif"></a><a href="https://codegeass.fandom.com/wiki/Code_Geass_Wiki" target="_blank"><img src="img/button5.gif"></a>
  </div>
<div class="right-column" style="display: flex; flex-direction: column; gap: 8px; align-items: center; justify-content: center;">
  <a href="https://t.me/dekieru" target="_blank" style="display: flex; align-items: center; justify-content: space-between; width: 100%; text-decoration: none; color: white;">
    <span style="text-align: right; flex: 1;">Telegram</span>
    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/telegram-white-icon.png" alt="Telegram" style="width: 32px; margin-left: 8px;">
  </a>
  <a href="https://steamcommunity.com/id/dekieru/" target="_blank" style="display: flex; align-items: center; justify-content: space-between; width: 100%; text-decoration: none; color: white;">
    <span style="text-align: right; flex: 1;">Steam</span>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/640px-Steam_icon_logo.svg.png" alt="Steam" style="width: 32px; margin-left: 8px;">
  </a>
  <a href="https://www.tiktok.com/@MS4wLjABAAAAtKRAcuguzspKORpl_0mwWWRhkMMAi-I6woXfYvyP0zeJpUjY066Kq6D2sQhzlFeW?_t=ZM-8z7zbtaGqJk&_r=1" target="_blank" style="display: flex; align-items: center; justify-content: space-between; width: 100%; text-decoration: none; color: white;">
    <span style="text-align: right; flex: 1;">Tik Tok</span>
    <img src="https://img.icons8.com/ios_filled/512/FFFFFF/tiktok.png" alt="TikTok" style="width: 32px; margin-left: 8px; filter: brightness(0) invert(1);">
  </a>
</div>

<!-- Music controls positioned in bottom right corner -->
<div style="position: absolute; bottom: 40px; right: 60px; display: flex; flex-direction: column; gap: 8px; align-items: center; z-index: 10;">
      <div style="display: flex; align-items: center; gap: 8px;">
      <span style="font-size: 12px; color: #ccc;">Volume:</span>
      <input type="range" id="volume-slider" min="0" max="100" value="7" style="width: 80px; height: 4px; background: #333; outline: none; border-radius: 2px; cursor: pointer;">
      <span id="volume-value" style="font-size: 12px; color: #ccc; min-width: 25px;">7%</span>
    </div>
  <button id="music-toggle-btn" onclick="toggleMusic()" style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px;">
    Stop Music
  </button>
</div>

`,

      vn: `
         <div style="display: flex; justify-content: center; width: 100%; height: 100%; gap: 50px;">
           <!-- Left column -->
           <div style="display: flex; flex-direction: column; gap: 10px;">
             <button onclick="handleButtonClick(event)" style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button onclick="handleButtonClick(event)" style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
        </div>
           
           <!-- Center column -->
           <div style="display: flex; flex-direction: column; gap: 10px;">
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
        </div>
           
           <!-- Right column -->
           <div style="display: flex; flex-direction: column; gap: 10px;">
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
             <button style="background: #333; color: white; border: 1px solid #555; padding: 6px 12px; font-family: 'MS Gothic', sans-serif; cursor: pointer; font-size: 12px; border-radius: 2px; white-space: nowrap; width: 280px;">
               Supress the source of the Black Surge
             </button>
        </div>
        </div>
      `,
             manga: `
         <div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 24px; color: #ccc;">
           coming soon
         </div>
       `,
       'coming-soon-2': `
         <div style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 24px; color: #ccc;">
           coming soon
         </div>
       `,
      myself: `
        <div class="left-column">
          <img src="https://upload.wikimedia.org/wikipedia/en/9/93/Myself_%3B_Yourself_limited_edition_game_cover.jpg" alt="Myself; Yourself Cover">
          <p><strong>Discovered on</strong> 21/10/2024</p>
          <p><strong>Medium</strong> DVD (Final Episode)</p>
        </div>
        <div class="middle-column">
          <h2>Myself; Yourself music video</h2>
          <iframe width="640" height="360" src="https://short.icu/RlVqIYmhl" frameborder="0" scrolling="0" allowfullscreen></iframe>
          <p>oh lord dont strike me with a lawsuit</p>
        </div>
        
      `,
      '123test': `
        <div class="left-column">
          <img src="https://via.placeholder.com/200x300/ff6b6b/ffffff?text=123" alt="123test Logo">
          <p class="glitch-text" data-text="Test Section: 123"><strong>Test Section:</strong> 123</p>
          <p class="glitch-text" data-text="Status: Active"><strong>Status:</strong> Active</p>
        </div>
        <div class="middle-column">
          <h2 class="glitch-text" data-text="123test - Experimental Zone">123test - Experimental Zone</h2>
          <p class="glitch-text" data-text="Welcome to the 123test section! This is a testing area where we experiment with new features and ideas. Here you can find various test content and experimental projects.">Welcome to the 123test section! This is a testing area where we experiment with new features and ideas. Here you can find various test content and experimental projects.</p>
          <h3 class="glitch-text" data-text="Current Experiments:">Current Experiments:</h3>
          <ul>
            <li class="glitch-text" data-text="UI/UX testing">UI/UX testing</li>
            <li class="glitch-text" data-text="New feature development">New feature development</li>
            <li class="glitch-text" data-text="Performance optimization">Performance optimization</li>
            <li class="glitch-text" data-text="Creative coding projects">Creative coding projects</li>
          </ul>
          <p class="glitch-text" data-text="Random Fact: Did you know that 123 is a Lucas number? It's also the concatenation of the first three positive integers!"><strong>Random Fact:</strong> Did you know that 123 is a Lucas number? It's also the concatenation of the first three positive integers!</p>
        </div>
        <div class="right-column">
          <img src="https://via.placeholder.com/300x200/ff6b6b/ffffff?text=Test+Image+1" alt="Test Image 1">
          <img src="https://via.placeholder.com/300x200/ff6b6b/ffffff?text=Test+Image+2" alt="Test Image 2">
        </div>
      `,
      '456test': `
        <div class="left-column">
          <img src="https://via.placeholder.com/200x300/4ecdc4/ffffff?text=456" alt="456test Logo">
          <p><strong>Test Section:</strong> 456</p>
          <p><strong>Status:</strong> Active</p>
        </div>
        <div class="middle-column">
          <h2>456test - Development Hub</h2>
          <p>This is the 456test development hub where we work on advanced projects and prototypes. Here you'll find cutting-edge developments and innovative solutions.</p>
          <h3>Development Projects:</h3>
          <ul>
            <li>Advanced algorithms</li>
            <li>Machine learning models</li>
            <li>Web application frameworks</li>
            <li>Data visualization tools</li>
          </ul>
          <p><strong>Tech Stack:</strong> JavaScript, Python, React, Node.js, and more!</p>
          <p><strong>Fun Fact:</strong> 456 is a triangular number and can be expressed as the sum of consecutive integers!</p>
        </div>
        <div class="right-column">
          <img src="https://via.placeholder.com/300x200/4ecdc4/ffffff?text=Dev+Image+1" alt="Development Image 1">
          <img src="https://via.placeholder.com/300x200/4ecdc4/ffffff?text=Dev+Image+2" alt="Development Image 2">
        </div>
      `
    };

    // switch tab functinoality
    function switchTab(type) {
      const windowContent = document.getElementById('window-content');
      windowContent.classList.remove('fade');
      void windowContent.offsetWidth; // trigger reflow
      windowContent.classList.add('fade');

      document.getElementById('title-label').textContent =
        type === 'about' ? "\\ about_me.hxp" :
        type === 'vn' ? '\\ black_surge.dat' :
        type === 'manga' ? '\\ coming_soon.psd':
        type === 'coming-soon-2' ? '\\ coming_soon_2.psd':
        type === 'myself' ? '\\ myself_yourself_amv.mp4' :
        type === '123test' ? '\\ 123test_experimental.txt' :
        type === '456test' ? '\\ 456test_development.log' : '';

      windowContent.innerHTML = contentMap[type];

      // Update active class on taskbar buttons
      document.querySelectorAll('.taskbar-button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === type);
      });
    }

    //  about tab
    switchTab('about');

    // taskbar button clicks
    document.querySelectorAll('.taskbar-button').forEach(btn => {
      btn.addEventListener('click', () => {
        switchTab(btn.dataset.tab);
      });
    });

    // Dragging
    const dragWindow = document.getElementById("draggable-window");
    const dragHandle = document.getElementById("drag-handle");
    let offsetX = 0, offsetY = 0, isDown = false;

    dragHandle.addEventListener("mousedown", e => {
      isDown = true;
      offsetX = e.clientX - dragWindow.offsetLeft;
      offsetY = e.clientY - dragWindow.offsetTop;
    });

    document.addEventListener("mouseup", () => {
      isDown = false;
    });

    document.addEventListener("mousemove", e => {
      if (!isDown) return;
      dragWindow.style.left = `${e.clientX - offsetX}px`;
      dragWindow.style.top = `${e.clientY - offsetY}px`;
    });

    // music autoplay
    document.getElementById('intro-overlay').addEventListener('click', () => {
    const overlay = document.getElementById('intro-overlay');
    overlay.style.opacity = '0';
    setTimeout(() => overlay.style.display = 'none', 800);

    const music = document.getElementById('bg-music');
    music.volume = 0.07; // 7% volume
    music.play().catch(err => {
    console.error("Autoplay failed:", err);
  });
  
  // Setup volume control after music starts
  setTimeout(() => {
    setupVolumeControl();
  }, 100);
});

// Particle system - Optimized version
const particlesContainer = document.getElementById('particles-container');
const symbols = ['👁️'];
const particles = [];
let animationId = null;
let lastTime = 0;
const targetFPS = 30; // Reduced from 60 to 30 FPS for better performance
const frameInterval = 1000 / targetFPS;

// Pre-create particle elements for reuse
const particlePool = [];
const POOL_SIZE = 30;

function createParticleElement() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.textContent = symbols[0];
  return particle;
}

// Initialize particle pool
for (let i = 0; i < POOL_SIZE; i++) {
  particlePool.push(createParticleElement());
}

function getParticleFromPool() {
  return particlePool.pop() || createParticleElement();
}

function returnParticleToPool(particle) {
  if (particlePool.length < POOL_SIZE) {
    particle.style.opacity = '0';
    particle.style.top = '-50px';
    particlePool.push(particle);
  }
}

function createParticle() {
  if (particles.length >= 20) return; // Reduced max particles
  
  const particleElement = getParticleFromPool();
  const x = Math.random() * window.innerWidth;
  const startY = -50;
  
  particleElement.style.left = x + 'px';
  particleElement.style.top = startY + 'px';
  particleElement.style.opacity = '0';
  
  if (!particleElement.parentNode) {
    particlesContainer.appendChild(particleElement);
  }
  
  const particleData = {
    element: particleElement,
    x: x,
    y: startY,
    speed: (36 + Math.random() * 60) * 1.2, // 20% faster: 43-115 pixels per second
    opacity: 0,
    lastUpdate: 0
  };
  
  particles.push(particleData);
  
  // Show particle
  setTimeout(() => {
    particleData.opacity = 0.7;
    particleElement.style.opacity = particleData.opacity;
  }, 100);
}

function updateParticles(currentTime) {
  if (currentTime - lastTime < frameInterval) return;
  lastTime = currentTime;
  
  const viewportHeight = window.innerHeight;
  const deltaTime = frameInterval / 1000; // Convert to seconds
  
  for (let i = particles.length - 1; i >= 0; i--) {
    const particle = particles[i];
    
    // Update position with delta time for consistent speed
    particle.y += particle.speed * deltaTime;
    
    // Calculate opacity based on position
    const progress = particle.y / viewportHeight;
    if (progress > 0.7) {
      const fadeProgress = (progress - 0.7) / 0.3;
      particle.opacity = Math.max(0, 0.7 * (1 - fadeProgress));
    }
    
    // Update element only if changed significantly
    const currentTop = parseFloat(particle.element.style.top) || 0;
    if (Math.abs(particle.y - currentTop) > 1) {
      particle.element.style.top = particle.y + 'px';
    }
    
    if (Math.abs(particle.opacity - parseFloat(particle.element.style.opacity)) > 0.01) {
      particle.element.style.opacity = particle.opacity;
    }
    
    // Remove if off screen
    if (particle.y > viewportHeight + 50) {
      returnParticleToPool(particle.element);
      particles.splice(i, 1);
    }
  }
}

function animate(currentTime) {
  updateParticles(currentTime);
  animationId = requestAnimationFrame(animate);
}

function startParticleSystem() {
  // Create initial particles
  for (let i = 0; i < 8; i++) { // Reduced initial particles
    setTimeout(() => createParticle(), Math.random() * 1000);
  }
  
  // Start animation loop
  animationId = requestAnimationFrame(animate);
  
  // Create new particles periodically
  setInterval(() => {
    if (particles.length < 20) { // Reduced max particles
      createParticle();
    }
  }, 500); // Increased interval
}

// Start particle system when page loads
document.addEventListener('DOMContentLoaded', () => {
  startParticleSystem();
  startBackgroundShake();
  startBackgroundRedChange();
  
  // Add click handlers to all buttons after a short delay
  setTimeout(() => {
    const buttons = document.querySelectorAll('button');
    console.log('Found buttons:', buttons.length);
    buttons.forEach(button => {
      if (button.textContent.includes('Supress the source of the Black Surge')) {
        // Add onclick attribute directly
        button.setAttribute('onclick', 'handleButtonClick(event)');
        button.addEventListener('click', handleButtonClick);
        console.log('Added click handler to button:', button.textContent);
      }
    });
  }, 100);
});

// Also add handlers when switching to VN tab
const originalSwitchTabForVN = switchTab;
switchTab = function(tabName) {
  originalSwitchTabForVN(tabName);
  
  if (tabName === 'vn') {
    setTimeout(() => {
      const buttons = document.querySelectorAll('button');
      buttons.forEach(button => {
        if (button.textContent.includes('Supress the source of the Black Surge')) {
          // Add onclick attribute directly
          button.setAttribute('onclick', 'handleButtonClick(event)');
          // Remove existing handlers to prevent duplicates
          button.removeEventListener('click', handleButtonClick);
          button.addEventListener('click', handleButtonClick);
          console.log('Added click handler to VN button:', button.textContent);
        }
      });
    }, 50);
  }
};

// Cleanup function for background red timer
function stopBackgroundRedChange() {
  if (backgroundRedTimer) {
    clearInterval(backgroundRedTimer);
    backgroundRedTimer = null;
  }
}

// Function to handle button clicks
function handleButtonClick(event) {
  // Add press animation to the clicked button
  const button = event.target;
  button.classList.add('button-press');
  
  // Remove animation class after animation completes
  setTimeout(() => {
    button.classList.remove('button-press');
  }, 150);
  
  console.log('Button clicked! Count:', buttonClickCount + 1);
  buttonClickCount++;
  
  if (buttonClickCount >= 16) {
    console.log('Disabling effects after 16 clicks');
    
    // Disable red background
    const redOverlay = document.getElementById('red-overlay');
    if (redOverlay) {
      redOverlay.style.backgroundColor = 'rgba(255, 0, 0, 0)';
      console.log('Red overlay disabled');
    }
    document.body.style.backgroundColor = '#000';
    stopBackgroundRedChange();
    
    // Disable glitches
    glitchesDisabled = true;
    console.log('Glitches disabled');
    
    // Remove glitch classes from body
    document.body.classList.remove('backgroundShake', 'backgroundRupture', 'schizophrenicGlitch');
    
    // Clear any ongoing glitch timers
    if (window.shakeTimer) clearTimeout(window.shakeTimer);
    if (window.ruptureTimer) clearTimeout(window.ruptureTimer);
    if (window.schizoTimer) clearTimeout(window.schizoTimer);
    
    // Stop all ongoing animations
    document.body.style.animation = 'none';
  }
}

// Global function for onclick attribute
window.handleButtonClick = handleButtonClick;

// Gradual background red change over 9 minutes
function startBackgroundRedChange() {
  const redOverlay = document.getElementById('red-overlay');
  const totalDuration = 540000; // 9 minutes in milliseconds
  const updateInterval = 1000; // Update every second
  const steps = totalDuration / updateInterval;
  
  backgroundRedTimer = setInterval(() => {
    backgroundRedProgress += 1 / steps;
    
    if (backgroundRedProgress >= 1) {
      backgroundRedProgress = 1;
      clearInterval(backgroundRedTimer);
    }
    
    const redIntensity = backgroundRedProgress * 0.8; // Max 80% red overlay
    redOverlay.style.backgroundColor = `rgba(255, 0, 0, ${redIntensity})`;
    
    // Also gradually change body background color
    const bodyRed = Math.floor(backgroundRedProgress * 50); // Max 50 red component
    document.body.style.backgroundColor = `rgb(${bodyRed}, 0, 0)`;
    
  }, updateInterval);
}

// Glitch sound effects using Web Audio API
function playGlitchSound(type) {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Create multiple oscillators for glitch effect
    const oscillators = [];
    const gainNodes = [];
    
    // Create noise generator for glitch effect
    const bufferSize = audioContext.sampleRate * 0.1;
    const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    
    const noiseSource = audioContext.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    
    // Different glitch sounds
    switch(type) {
      case 'shake':
        // Digital glitch - synchronized with 0.3s animation
        const shakeStartTime = audioContext.currentTime;
        const shakeDuration = 0.3; // Match CSS animation duration
        
        // Continuous digital glitch throughout animation
        for (let i = 0; i < 6; i++) {
          const osc = audioContext.createOscillator();
          const gain = audioContext.createGain();
          
          osc.type = 'square';
          osc.frequency.setValueAtTime(2000 + Math.random() * 3000, shakeStartTime + i * 0.05);
          osc.connect(gain);
          gain.connect(audioContext.destination);
          
          gain.gain.setValueAtTime(0.05, shakeStartTime + i * 0.05);
          gain.gain.exponentialRampToValueAtTime(0.001, shakeStartTime + i * 0.05 + 0.04);
          
          osc.start(shakeStartTime + i * 0.05);
          osc.stop(shakeStartTime + i * 0.05 + 0.04);
        }
        break;
        
      case 'rupture':
        // Data corruption glitch - synchronized with 0.8s animation
        const ruptureStartTime = audioContext.currentTime;
        const ruptureDuration = 0.8; // Match CSS animation duration
        
        // Continuous corruption sounds throughout animation
        for (let i = 0; i < 8; i++) {
          const osc = audioContext.createOscillator();
          const gain = audioContext.createGain();
          
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(100 + Math.random() * 500, ruptureStartTime + i * 0.1);
          osc.connect(gain);
          gain.connect(audioContext.destination);
          
          gain.gain.setValueAtTime(0.08, ruptureStartTime + i * 0.1);
          gain.gain.exponentialRampToValueAtTime(0.001, ruptureStartTime + i * 0.1 + 0.08);
          
          osc.start(ruptureStartTime + i * 0.1);
          osc.stop(ruptureStartTime + i * 0.1 + 0.08);
        }
        
        // Synchronized noise bursts
        for (let i = 0; i < 3; i++) {
          const noiseGain = audioContext.createGain();
          const newNoiseSource = audioContext.createBufferSource();
          newNoiseSource.buffer = noiseBuffer;
          
          newNoiseSource.connect(noiseGain);
          noiseGain.connect(audioContext.destination);
          noiseGain.gain.setValueAtTime(0.04, ruptureStartTime + i * 0.25);
          noiseGain.gain.exponentialRampToValueAtTime(0.001, ruptureStartTime + i * 0.25 + 0.2);
          
          newNoiseSource.start(ruptureStartTime + i * 0.25);
          newNoiseSource.stop(ruptureStartTime + i * 0.25 + 0.2);
        }
        
        // Final corruption burst at the end
        const finalRuptureOsc = audioContext.createOscillator();
        const finalRuptureGain = audioContext.createGain();
        
        finalRuptureOsc.type = 'square';
        finalRuptureOsc.frequency.setValueAtTime(800, ruptureStartTime + 0.6);
        finalRuptureOsc.frequency.exponentialRampToValueAtTime(100, ruptureStartTime + 0.8);
        finalRuptureOsc.connect(finalRuptureGain);
        finalRuptureGain.connect(audioContext.destination);
        
        finalRuptureGain.gain.setValueAtTime(0.12, ruptureStartTime + 0.6);
        finalRuptureGain.gain.exponentialRampToValueAtTime(0.001, ruptureStartTime + 0.8);
        
        finalRuptureOsc.start(ruptureStartTime + 0.6);
        finalRuptureOsc.stop(ruptureStartTime + 0.8);
        break;
        
      case 'schizophrenic':
        // Complete system failure glitch - perfectly synchronized with 2.5s animation
        const schizoStartTime = audioContext.currentTime;
        const schizoDuration = 2.5; // Match CSS animation duration exactly
        
        // Phase 1: Initial chaos (0-0.8s)
        for (let i = 0; i < 8; i++) {
          const osc = audioContext.createOscillator();
          const gain = audioContext.createGain();
          
          osc.type = Math.random() > 0.5 ? 'square' : 'sawtooth';
          osc.frequency.setValueAtTime(200 + Math.random() * 800, schizoStartTime + i * 0.1);
          osc.connect(gain);
          gain.connect(audioContext.destination);
          
          gain.gain.setValueAtTime(0.06, schizoStartTime + i * 0.1);
          gain.gain.exponentialRampToValueAtTime(0.001, schizoStartTime + i * 0.1 + 0.08);
          
          osc.start(schizoStartTime + i * 0.1);
          osc.stop(schizoStartTime + i * 0.1 + 0.08);
        }
        
        // Phase 2: Escalating chaos (0.8-1.6s)
        for (let i = 0; i < 10; i++) {
          const osc = audioContext.createOscillator();
          const gain = audioContext.createGain();
          
          osc.type = Math.random() > 0.5 ? 'square' : 'sawtooth';
          osc.frequency.setValueAtTime(50 + Math.random() * 1500, schizoStartTime + 0.8 + i * 0.08);
          osc.connect(gain);
          gain.connect(audioContext.destination);
          
          gain.gain.setValueAtTime(0.08, schizoStartTime + 0.8 + i * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, schizoStartTime + 0.8 + i * 0.08 + 0.06);
          
          osc.start(schizoStartTime + 0.8 + i * 0.08);
          osc.stop(schizoStartTime + 0.8 + i * 0.08 + 0.06);
        }
        
        // Phase 3: Peak chaos (1.6-2.0s)
        for (let i = 0; i < 12; i++) {
          const osc = audioContext.createOscillator();
          const gain = audioContext.createGain();
          
          osc.type = Math.random() > 0.5 ? 'square' : 'sawtooth';
          osc.frequency.setValueAtTime(100 + Math.random() * 2000, schizoStartTime + 1.6 + i * 0.03);
          osc.connect(gain);
          gain.connect(audioContext.destination);
          
          gain.gain.setValueAtTime(0.1, schizoStartTime + 1.6 + i * 0.03);
          gain.gain.exponentialRampToValueAtTime(0.001, schizoStartTime + 1.6 + i * 0.03 + 0.025);
          
          osc.start(schizoStartTime + 1.6 + i * 0.03);
          osc.stop(schizoStartTime + 1.6 + i * 0.03 + 0.025);
        }
        
        // Synchronized noise bursts throughout
        for (let i = 0; i < 6; i++) {
          const noiseGain = audioContext.createGain();
          const newNoiseSource = audioContext.createBufferSource();
          newNoiseSource.buffer = noiseBuffer;
          
          newNoiseSource.connect(noiseGain);
          noiseGain.connect(audioContext.destination);
          noiseGain.gain.setValueAtTime(0.05, schizoStartTime + i * 0.4);
          noiseGain.gain.exponentialRampToValueAtTime(0.001, schizoStartTime + i * 0.4 + 0.3);
          
          newNoiseSource.start(schizoStartTime + i * 0.4);
          newNoiseSource.stop(schizoStartTime + i * 0.4 + 0.3);
        }
        
        // Final catastrophic explosion (2.0-2.5s)
        const finalOsc = audioContext.createOscillator();
        const finalGain = audioContext.createGain();
        
        finalOsc.type = 'sawtooth';
        finalOsc.frequency.setValueAtTime(2500, schizoStartTime + 2.0);
        finalOsc.frequency.exponentialRampToValueAtTime(50, schizoStartTime + 2.5);
        finalOsc.connect(finalGain);
        finalGain.connect(audioContext.destination);
        
        finalGain.gain.setValueAtTime(0.18, schizoStartTime + 2.0);
        finalGain.gain.exponentialRampToValueAtTime(0.001, schizoStartTime + 2.5);
        
        finalOsc.start(schizoStartTime + 2.0);
        finalOsc.stop(schizoStartTime + 2.5);
        break;
    }
    
  } catch (error) {
    console.log("Web Audio API not supported or failed:", error);
  }
}

// Background shake effect
function startBackgroundShake() {
  const body = document.body;
  
  function triggerShake() {
    if (glitchesDisabled) return;
    
    // Random delay between 1-5 seconds
    const delay = 1000 + Math.random() * 4000;
    
    setTimeout(() => {
      if (glitchesDisabled) return;
      
      // Remove and re-add animation to restart it
      body.style.animation = 'none';
      body.offsetHeight; // Trigger reflow
      body.style.animation = 'backgroundShake 0.3s ease-in-out';
      
      // Play glitch sound
      playGlitchSound('shake');
      
      // Schedule next shake
      triggerShake();
    }, delay);
  }
  
  function triggerRupture() {
    if (glitchesDisabled) return;
    
    // Random delay between 6-18 seconds
    const delay = 6000 + Math.random() * 12000;
    
    setTimeout(() => {
      if (glitchesDisabled) return;
      
      // Remove and re-add animation to restart it
      body.style.animation = 'none';
      body.offsetHeight; // Trigger reflow
      body.style.animation = 'backgroundRupture 0.8s ease-in-out';
      
      // Play glitch sound
      playGlitchSound('rupture');
      
      // Schedule next rupture
      triggerRupture();
    }, delay);
  }
  
  function triggerSchizophrenicGlitch() {
    if (glitchesDisabled) return;
    
    // Random delay between 12-37.5 seconds
    const delay = 12000 + Math.random() * 25500;
    
    setTimeout(() => {
      if (glitchesDisabled) return;
      
      // Remove and re-add animation to restart it
      body.style.animation = 'none';
      body.offsetHeight; // Trigger reflow
      body.style.animation = 'schizophrenicGlitch 2.5s ease-in-out';
      
      // Play glitch sound
      playGlitchSound('schizophrenic');
      
      // Schedule next schizophrenic glitch
      triggerSchizophrenicGlitch();
    }, delay);
  }
  
  // Start all three shake cycles
  triggerShake();
  triggerRupture();
  triggerSchizophrenicGlitch();
}

// Volume control functionality
function setupVolumeControl() {
  const volumeSlider = document.getElementById('volume-slider');
  const volumeValue = document.getElementById('volume-value');
  const music = document.getElementById('bg-music');
  
  if (volumeSlider && volumeValue && music) {
    // Remove existing event listeners to prevent duplicates
    const newSlider = volumeSlider.cloneNode(true);
    volumeSlider.parentNode.replaceChild(newSlider, volumeSlider);
    
    // Set initial volume based on current music volume
    const currentVolume = Math.round(music.volume * 100);
    newSlider.value = currentVolume;
    volumeValue.textContent = currentVolume + '%';
    
    // Volume slider event - works regardless of music state
    newSlider.addEventListener('input', (e) => {
      const volume = parseInt(e.target.value);
      volumeValue.textContent = volume + '%';
      music.volume = volume / 100;
    });
    
    // Update button text based on current state
    const toggleBtn = document.getElementById('music-toggle-btn');
    if (toggleBtn) {
      toggleBtn.textContent = isMusicPlaying ? 'Stop Music' : 'Play Music';
      newSlider.disabled = !isMusicPlaying;
      newSlider.style.opacity = isMusicPlaying ? '1' : '0.5';
    }
  }
}

// Setup volume control when switching to about tab
const originalSwitchTab = switchTab;
switchTab = function(type) {
  originalSwitchTab(type);
  if (type === 'about') {
    setTimeout(setupVolumeControl, 100); // Small delay to ensure DOM is ready
  }
};