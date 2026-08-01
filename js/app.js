/* ============================================
   GamePay - Main Application JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all sections
  initNavbar();
  initHero();
  initCategories();
  initGameOfTheYear();
  initSystemRequirements();
  initGameReviews();
  initUpcomingGames();
  initFilterSection();
  initBlogSection();
  initExperienceSection();
  initFAQ();
  initLoginModal();
  initToast();
});

/* ============================================
   NAVBAR
   ============================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  // Sticky navbar background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      mobileBtn.classList.toggle('active');
    });
  }
}

/* ============================================
   HERO / TRENDING GAMES
   ============================================ */
let currentHeroIndex = 0;

function initHero() {
  renderHeroInfo();
  renderHeroFeatured();
  renderHeroThumbnails();

  const nextBtn = document.getElementById('hero-next');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentHeroIndex = (currentHeroIndex + 1) % TRENDING_GAMES.length;
      renderHeroInfo();
      renderHeroFeatured();
      updateHeroThumbnails();
    });
  }
}

function renderHeroInfo() {
  const container = document.getElementById('hero-info');
  const game = TRENDING_GAMES[currentHeroIndex];
  container.innerHTML = `
    <h2 class="hero-game-title">${game.title}</h2>
    <div class="hero-meta">
      <div class="hero-meta-item">
        <span class="meta-label">Available For:</span>
        <span class="meta-value">${game.platforms.join(' - ')}</span>
      </div>
      <div class="hero-meta-item">
        <span class="meta-label">Genre:</span>
        <span class="meta-value">${game.genre}</span>
      </div>
    </div>
    <div class="hero-actions">
      <button class="btn-primary hero-btn" onclick="showToast('Redirecting to checkout...')">Buy Now</button>
      <button class="btn-secondary hero-btn" onclick="addToCart('${game.title}')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        Add to cart
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
      </button>
    </div>
  `;
}

function renderHeroFeatured() {
  const container = document.getElementById('hero-featured');
  const game = TRENDING_GAMES[currentHeroIndex];
  container.innerHTML = `
    <div class="featured-card">
      <img src="${game.cover}" alt="${game.title}" class="featured-image">
      <div class="featured-overlay">
        <h3>${game.title}</h3>
      </div>
    </div>
  `;
}

function renderHeroThumbnails() {
  const container = document.getElementById('hero-thumbnails');
  container.innerHTML = TRENDING_GAMES.filter((_, i) => i !== 0).map((game, i) => `
    <div class="hero-thumb ${i === 0 ? 'active' : ''}" data-index="${i + 1}" onclick="selectHeroGame(${i + 1})">
      <img src="${game.cover}" alt="${game.title}">
    </div>
  `).join('');
}

function updateHeroThumbnails() {
  document.querySelectorAll('.hero-thumb').forEach(thumb => {
    thumb.classList.remove('active');
    if (parseInt(thumb.dataset.index) === currentHeroIndex) {
      thumb.classList.add('active');
    }
  });
}

function selectHeroGame(index) {
  currentHeroIndex = index;
  renderHeroInfo();
  renderHeroFeatured();
  updateHeroThumbnails();
}

/* ============================================
   GAME CATEGORIES
   ============================================ */
function initCategories() {
  const grid = document.getElementById('categories-grid');
  grid.innerHTML = GAME_CATEGORIES.map(cat => `
    <div class="category-card ${cat.size}">
      <img src="${cat.image}" alt="${cat.name}" loading="lazy">
      <div class="category-overlay">
        <span class="category-name">${cat.name}</span>
      </div>
    </div>
  `).join('');
}

/* ============================================
   GAME OF THE YEAR
   ============================================ */
let currentGalleryIndex = 0;

function initGameOfTheYear() {
  const infoContainer = document.getElementById('goty-info');
  const galleryContainer = document.getElementById('goty-gallery');
  const g = GAME_OF_THE_YEAR;

  infoContainer.innerHTML = `
    <h3 class="goty-game-title">${g.title}</h3>
    <p class="goty-desc">${g.description}</p>
    <div class="goty-meta-row">
      <div class="metacritic-badge">
        <span class="mc-icon">🎮</span>
        <span class="mc-score">${g.metacritic}</span><span class="mc-total">/100</span>
      </div>
      <div class="release-date">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        ${g.releaseDate}
      </div>
    </div>
    <div class="goty-available">
      <p class="avail-label">Available For:</p>
      <p class="avail-value">${g.platforms.join(' – ')}</p>
    </div>
    <div class="goty-genre">
      <p class="genre-label">Genre:</p>
      <p class="genre-value">${g.genre}</p>
    </div>
    <div class="platform-buttons">
      ${g.platformButtons.map(p => `<button class="btn-outline platform-btn">${p}</button>`).join('')}
    </div>
    <div class="goty-actions">
      <button class="btn-primary" onclick="showToast('Redirecting to checkout...')">Buy Now</button>
      <button class="btn-secondary" onclick="showToast('Opening game review...')">Game Review</button>
    </div>
  `;

  renderGallery(galleryContainer, g);
}

function renderGallery(container, g) {
  container.innerHTML = `
    <div class="gallery-header">
      <h4>Trailer & Gallery</h4>
      <div class="section-controls">
        <button class="carousel-nav" onclick="changeGallery(-1)"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg></button>
        <button class="carousel-nav" onclick="changeGallery(1)"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg></button>
        <div class="pagination-dots">
          ${g.galleryImages.map((_, i) => `<span class="dot ${i === 0 ? 'active' : ''}"></span>`).join('')}
        </div>
      </div>
    </div>
    <div class="gallery-main">
      <img src="${g.galleryImages[currentGalleryIndex]}" alt="${g.title} Gallery" id="gallery-main-img">
      <div class="play-button">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
      </div>
    </div>
    <div class="gallery-thumbnails">
      ${g.galleryImages.map((img, i) => `
        <div class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="selectGalleryImage(${i})">
          <img src="${img}" alt="Gallery ${i + 1}">
          ${i === 0 ? '<span class="thumb-label">OFFICIAL TRAILER</span>' : ''}
        </div>
      `).join('')}
    </div>
  `;
}

function changeGallery(dir) {
  const images = GAME_OF_THE_YEAR.galleryImages;
  currentGalleryIndex = (currentGalleryIndex + dir + images.length) % images.length;
  selectGalleryImage(currentGalleryIndex);
}

function selectGalleryImage(index) {
  currentGalleryIndex = index;
  const mainImg = document.getElementById('gallery-main-img');
  if (mainImg) {
    mainImg.src = GAME_OF_THE_YEAR.galleryImages[index];
  }
  document.querySelectorAll('.gallery-thumb').forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
  document.querySelectorAll('.goty-gallery .dot').forEach((d, i) => {
    d.classList.toggle('active', i === index);
  });
}

/* ============================================
   SYSTEM REQUIREMENTS
   ============================================ */
function initSystemRequirements() {
  const container = document.getElementById('sysreq-grid');
  const g = GAME_OF_THE_YEAR;

  container.innerHTML = `
    <div class="sysreq-column">
      <h4><span class="gradient-text">Minimum</span> System Requirements</h4>
      <div class="spec-list">
        <div class="spec-item"><span class="spec-label">OS:</span> <span class="spec-value">${g.minRequirements.os}</span></div>
        <div class="spec-item"><span class="spec-label">CPU:</span> <span class="spec-value">${g.minRequirements.cpu}</span></div>
        <div class="spec-item"><span class="spec-label">Memory:</span> <span class="spec-value">${g.minRequirements.memory}</span></div>
        <div class="spec-item"><span class="spec-label">GPU:</span> <span class="spec-value">${g.minRequirements.gpu}</span></div>
        <div class="spec-item"><span class="spec-label">DirectX:</span> <span class="spec-value">${g.minRequirements.directx}</span></div>
        <div class="spec-item"><span class="spec-label">Storage:</span> <span class="spec-value">${g.minRequirements.storage}</span></div>
      </div>
    </div>
    <div class="sysreq-column">
      <h4><span class="gradient-text recommended">Recommended</span> System Requirements</h4>
      <div class="spec-list">
        <div class="spec-item"><span class="spec-label">OS:</span> <span class="spec-value">${g.recRequirements.os}</span></div>
        <div class="spec-item"><span class="spec-label">CPU:</span> <span class="spec-value">${g.recRequirements.cpu}</span></div>
        <div class="spec-item"><span class="spec-label">Memory:</span> <span class="spec-value">${g.recRequirements.memory}</span></div>
        <div class="spec-item"><span class="spec-label">GPU:</span> <span class="spec-value">${g.recRequirements.gpu}</span></div>
        <div class="spec-item"><span class="spec-label">DirectX:</span> <span class="spec-value">${g.recRequirements.directx}</span></div>
        <div class="spec-item"><span class="spec-label">Storage:</span> <span class="spec-value">${g.recRequirements.storage}</span></div>
      </div>
    </div>
    <div class="sysreq-checker">
      <div class="checker-field">
        <label>RAM</label>
        <div class="checker-input-wrapper">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h4M14 12h4"/></svg>
          <input type="text" placeholder="Enter Your RAM Storage" class="checker-input">
        </div>
      </div>
      <div class="checker-field">
        <label>GPU</label>
        <div class="checker-input-wrapper">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8"/></svg>
          <input type="text" placeholder="Enter Your GPU State" class="checker-input">
        </div>
      </div>
      <div class="checker-field">
        <label>CPU</label>
        <div class="checker-input-wrapper">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>
          <input type="text" placeholder="Enter CPU Details" class="checker-input">
        </div>
      </div>
      <button class="btn-primary checker-btn" onclick="showToast('Checking compatibility...')">Can I Run It?</button>
      <button class="btn-secondary checker-btn" onclick="showToast('Analyzing your PC specs...')">Test On My PC</button>
    </div>
  `;
}

/* ============================================
   GAME REVIEWS
   ============================================ */
function initGameReviews() {
  const grid = document.getElementById('reviews-grid');
  grid.innerHTML = GAME_REVIEWS.map(review => `
    <div class="review-card">
      <img src="${review.image}" alt="${review.title}" class="review-image" loading="lazy">
      <div class="review-content">
        <div class="review-header">
          <h4>${review.title} <span class="review-year">(${review.year})</span></h4>
          <div class="review-stats">
            <div class="stat"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> ${review.views} Views</div>
            <div class="stat"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> ${review.comments} Comments</div>
            <div class="stat"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> ${review.rating}/10</div>
          </div>
        </div>
        <p class="review-desc">${review.description}</p>
        <div class="review-tags">
          ${review.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="review-footer">
          <div class="metacritic-badge small">
            <span class="mc-icon">🎮</span>
            <span class="mc-score">${review.metacritic}</span><span class="mc-total">/100</span>
          </div>
          <div class="review-date">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            ${review.date}
          </div>
          <button class="review-btn" onclick="showToast('Opening ${review.title} review...')">Reviews</button>
        </div>
      </div>
    </div>
  `).join('');
}

/* ============================================
   UPCOMING GAMES
   ============================================ */
function initUpcomingGames() {
  const grid = document.getElementById('upcoming-grid');
  grid.innerHTML = UPCOMING_GAMES.map(game => `
    <div class="upcoming-card" ${game.borderColor ? `style="--border-accent: ${game.borderColor}"` : ''}>
      <div class="upcoming-image-wrapper">
        <img src="${game.image}" alt="${game.title}" loading="lazy">
      </div>
      <h4 class="upcoming-title">${game.title}</h4>
      <div class="upcoming-footer">
        <span class="upcoming-date">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          ${game.date}
        </span>
        <a href="#" class="preorder-link" onclick="showToast('Pre-ordering ${game.title}...')">Pre-Order →</a>
      </div>
    </div>
  `).join('');

  // Scroll buttons
  const prevBtn = document.getElementById('upcoming-prev');
  const nextBtn = document.getElementById('upcoming-next');
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => grid.scrollBy({ left: -220, behavior: 'smooth' }));
    nextBtn.addEventListener('click', () => grid.scrollBy({ left: 220, behavior: 'smooth' }));
  }
}

/* ============================================
   GAMES BY FILTER
   ============================================ */
let activeFilters = new Set();

function initFilterSection() {
  renderFilterTags();
  renderFilterResults(FILTER_GAMES);

  // Search functionality
  const searchInput = document.getElementById('filter-search');
  if (searchInput) {
    searchInput.addEventListener('input', filterGames);
  }

  const searchBtn = document.getElementById('filter-search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', filterGames);
  }
}

function renderFilterTags() {
  const container = document.getElementById('filter-tags');
  container.innerHTML = GENRE_TAGS.map(tag => `
    <button class="filter-tag" data-tag="${tag}" onclick="toggleFilterTag(this, '${tag}')">${tag}</button>
  `).join('');
}

function toggleFilterTag(el, tag) {
  el.classList.toggle('active');
  if (activeFilters.has(tag)) {
    activeFilters.delete(tag);
  } else {
    activeFilters.add(tag);
  }
}

function filterGames() {
  const query = document.getElementById('filter-search').value.toLowerCase();
  let filtered = FILTER_GAMES;

  if (query) {
    filtered = filtered.filter(g => g.title.toLowerCase().includes(query));
  }

  renderFilterResults(filtered);
}

function renderFilterResults(games) {
  const container = document.getElementById('filter-results');
  container.innerHTML = games.map(game => `
    <div class="game-card" ${game.borderColor ? `style="--card-border: ${game.borderColor}"` : ''}>
      <div class="game-card-image-wrapper">
        <img src="${game.image}" alt="${game.title}" class="game-card-image" loading="lazy">
      </div>
      <div class="game-card-info">
        <h4 class="game-card-title">${game.title}</h4>
        <div class="game-card-meta">
          <span class="game-year">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            ${game.year}
          </span>
          <span class="game-mc">
            <span class="mc-icon-sm">🎮</span>
            <span class="mc-score-sm">${game.metacritic}</span><span class="mc-total-sm">/100</span>
          </span>
        </div>
        <div class="game-card-price-row">
          <div class="game-price">
            ${game.isFree ? '<span class="price-free">Free</span>' : `
              ${game.originalPrice ? `<span class="price-original">${game.originalPrice}$</span>` : ''}
              <span class="price-current">${game.price}$</span>
              ${game.discount ? `<span class="price-discount">${game.discount}%</span>` : ''}
            `}
          </div>
          <a href="#" class="buy-now-link" onclick="addToCart('${game.title}')">Buy Now →</a>
        </div>
      </div>
    </div>
  `).join('');
}

/* ============================================
   BLOG SECTION
   ============================================ */
function initBlogSection() {
  const grid = document.getElementById('blog-grid');
  grid.innerHTML = BLOG_POSTS.map((post, i) => `
    <div class="blog-card ${post.size === 'large' ? 'blog-large' : 'blog-small'}">
      <img src="${post.image}" alt="${post.title}" loading="lazy">
      <div class="blog-overlay">
        <h4 class="blog-title">${post.title}</h4>
      </div>
    </div>
  `).join('');
}

/* ============================================
   GAMING EXPERIENCE
   ============================================ */
function initExperienceSection() {
  const grid = document.getElementById('features-grid');
  grid.innerHTML = GAMING_FEATURES.map(feature => `
    <div class="feature-card">
      <h4>${feature.title}</h4>
      <p>${feature.description}</p>
    </div>
  `).join('');
}

/* ============================================
   FAQ
   ============================================ */
function initFAQ() {
  const list = document.getElementById('faq-list');
  list.innerHTML = FAQ_DATA.map((item, i) => `
    <div class="faq-item ${i % 2 === 0 ? 'purple-border' : 'magenta-border'}" onclick="toggleFAQ(this)">
      <div class="faq-question">
        <span>${item.question}</span>
        <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
      </div>
      <div class="faq-answer">
        <p>${item.answer}</p>
      </div>
    </div>
  `).join('');
}

function toggleFAQ(el) {
  el.classList.toggle('active');
}

/* ============================================
   LOGIN MODAL
   ============================================ */
function initLoginModal() {
  const modal = document.getElementById('login-modal');
  const accountBtn = document.getElementById('account-btn');
  const closeBtn = document.getElementById('modal-close');
  const loginForm = document.getElementById('login-form');

  if (accountBtn) {
    accountBtn.addEventListener('click', () => {
      modal.classList.add('active');
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  // Close on overlay click
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  // Login form submit
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      modal.classList.remove('active');
      showToast('Welcome back, Gamer! 🎮');
    });
  }
}

/* ============================================
   TOAST NOTIFICATIONS
   ============================================ */
let toastTimeout;

function initToast() {
  // Toast is ready in HTML
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (toast && toastMsg) {
    toastMsg.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
}

/* ============================================
   CART FUNCTIONALITY
   ============================================ */
let cartCount = 0;

function addToCart(title) {
  cartCount++;
  const counter = document.getElementById('cart-count');
  if (counter) {
    counter.textContent = cartCount;
    counter.classList.add('bump');
    setTimeout(() => counter.classList.remove('bump'), 300);
  }
  showToast(`${title} added to cart! 🛒`);
}
