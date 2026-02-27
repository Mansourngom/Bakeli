// --- Slider automatique Témoignages ---
function initTestimonialsSlider() {
  const slider = document.getElementById('testimonialsSlider');
  const dotsContainer = document.getElementById('testimonialsDots');
  if (!slider || !dotsContainer) return;
  const cards = slider.children;
  const cardCount = cards.length;
  const visible = 4; // nombre de cartes visibles
  let index = 0;
  // Créer les points
  dotsContainer.innerHTML = '';
  for (let i = 0; i <= cardCount - visible; i++) {
    const dot = document.createElement('span');
    dot.className = 'testimonials-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  }
  function updateDots() {
    Array.from(dotsContainer.children).forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
  }
  function goTo(i) {
    index = i;
    slider.style.transform = `translateX(-${index * (cards[0].offsetWidth + 24)}px)`;
    updateDots();
  }
  function next() {
    index = (index + 1) % (cardCount - visible + 1);
    goTo(index);
  }
  let interval = setInterval(next, 3500);
  slider.addEventListener('mouseenter', () => clearInterval(interval));
  slider.addEventListener('mouseleave', () => interval = setInterval(next, 3500));
}

window.addEventListener('DOMContentLoaded', function() {
  initTestimonialsSlider();
});
// Slider automatique pour la section causes
function autoSlideCauses() {
  const track = document.getElementById('causesTrack');
  if (!track) return;
  const cards = track.children;
  const cardCount = cards.length;
  let index = 0;
  function slide() {
    index = (index + 1) % cardCount;
    track.style.transform = `translateX(-${index * (cards[0].offsetWidth + 24)}px)`;
  }
  setInterval(slide, 3500);
}

window.addEventListener('DOMContentLoaded', function() {
  autoSlideCauses();
});
// Animation d'écriture progressive sur les titres
function animateTyping(selector, speed = 60) {
  const el = document.querySelector(selector);
  if (!el) return;
  const text = el.textContent;
  el.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text[i];
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

window.addEventListener('DOMContentLoaded', function() {
  animateTyping('.hero-left h1', 60);
  animateTyping('.about-right h2', 40);
  animateTyping('.team-header h2', 40);
});
// Slider causes
const track = document.getElementById('causesTrack');
const cards = document.querySelectorAll('.cause-card');
let currentIndex = 0;
const visibleCards = 3;
const totalCards = cards.length;

function getCardWidth() {
  return cards[0].offsetWidth + 24;
}

function updateSlider() {
  track.style.transform = `translateX(-${currentIndex * getCardWidth()}px)`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentIndex < totalCards - visibleCards) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalCards - visibleCards;
  }
  updateSlider();
});

// Auto-slide toutes les 3 secondes
setInterval(() => {
  if (currentIndex < totalCards - visibleCards) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
}, 3000);
// Boutons montant
function selectAmount(btn, amount) {
  document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('customAmount').value = amount;
}
// Accordion
function toggleAccordion(header) {
  const item = header.parentElement;
  const allItems = document.querySelectorAll('.accordion-item');
  
  allItems.forEach(i => {
    i.classList.remove('active');
    i.querySelector('i').className = 'fas fa-arrow-right';
  });

  if (!item.classList.contains('active')) {
    item.classList.add('active');
    header.querySelector('i').className = 'fas fa-arrow-down';
  }
}
// ── SLIDER TÉMOIGNAGES ──
window.addEventListener('load', () => {
  const testiTrack = document.getElementById('testiTrack');
  const testiCards = document.querySelectorAll('.testi-card');
  const testiDotsContainer = document.getElementById('testiDots');
  const testiVisible = 4;
  const testiTotal = testiCards.length;
  let testiIndex = 0;
  const totalDots = testiTotal - testiVisible + 1;

  // Créer les points
  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement('button');
    dot.classList.add('testi-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToTesti(i));
    testiDotsContainer.appendChild(dot);
  }

  function getCardW() {
    return testiCards[0].getBoundingClientRect().width + 24;
  }

  function goToTesti(index) {
    testiIndex = index;
    testiTrack.style.transform = `translateX(-${testiIndex * getCardW()}px)`;
    document.querySelectorAll('.testi-dot').forEach((d, i) => {
      d.classList.toggle('active', i === testiIndex);
    });
  }

  // Auto-slide toutes les 2.5 secondes
  setInterval(() => {
    testiIndex = testiIndex < totalDots - 1 ? testiIndex + 1 : 0;
    goToTesti(testiIndex);
  }, 2500);
});

// ── SLIDER BLOG ──
window.addEventListener('load', () => {
  const blogTrack = document.getElementById('blogTrack');
  const blogCards = document.querySelectorAll('.blog-card');
  const blogVisible = 3;
  const blogTotal = blogCards.length;
  let blogIndex = 0;

  function getBlogCardWidth() {
    return blogCards[0].getBoundingClientRect().width + 24;
  }

  function updateBlog() {
    blogTrack.style.transform = `translateX(-${blogIndex * getBlogCardWidth()}px)`;
  }

  document.getElementById('blogNext').addEventListener('click', () => {
    blogIndex = blogIndex < blogTotal - blogVisible ? blogIndex + 1 : 0;
    updateBlog();
  });

  document.getElementById('blogPrev').addEventListener('click', () => {
    blogIndex = blogIndex > 0 ? blogIndex - 1 : blogTotal - blogVisible;
    updateBlog();
  });

  // Auto-slide toutes les 4 secondes
  setInterval(() => {
    blogIndex = blogIndex < blogTotal - blogVisible ? blogIndex + 1 : 0;
    updateBlog();
  }, 4000);
});