// =====================
// LIGHTBOX
// =====================
function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

// Close lightbox when clicking outside image
document.getElementById('lightbox').addEventListener('click', function (e) {
  if (e.target === this) closeLightbox();
});

// Close lightbox with Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeLightbox();
});

const projects = [
  {
    title: "RAG Chatbot Akademik",
    desc: "Chatbot Retrieval-Augmented Generation untuk layanan akademik mahasiswa menggunakan Python, LangChain, dan Vector Database.",
    tech: ["Python", "LangChain", "FAISS", "Streamlit"],
    github: "https://github.com/muhammadfisabilillah/rag-chatbot",
    demo: "",
    image: "images/projects/rag-chatbot.jpg"
  },
  {
    title: "Valoz.id — Brand Platform",
    desc: "Platform brand management untuk UMKM: identitas visual, strategi konten, dan social media automation.",
    tech: ["Figma", "Notion", "Meta Business Suite", "Canva"],
    github: "",
    demo: "https://valoz.id",
    image: "images/projects/valoz.jpg"
  },
  {
    title: "Data Mining Dashboard",
    desc: "Dashboard analisis data UMKM dengan visualisasi interaktif untuk insight bisnis dan pengambilan keputusan.",
    tech: ["Python", "Pandas", "Plotly", "Streamlit"],
    github: "https://github.com/muhammadfisabilillah/data-mining-dashboard",
    demo: "",
    image: "images/projects/dashboard.jpg"
  }
];

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = projects.map(p => `
    <article class="project-card">
      <img class="project-thumb" src="${p.image}" alt="${p.title}" loading="lazy" />
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tech">
          ${p.tech.map(t => `<span>${t}</span>`).join('')}
        </div>
        <div class="project-links">
          ${p.github ? `<a href="${p.github}" target="_blank">GitHub</a>` : ''}
          ${p.demo ? `<a href="${p.demo}" target="_blank">Live Demo</a>` : ''}
        </div>
      </div>
    </article>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderProjects);

// =====================
// SMOOTH SCROLL (fallback for older browsers)
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// =====================
// ACTIVE NAV HIGHLIGHT
// =====================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = '#111';
      link.style.fontWeight = '600';
    } else {
      link.style.fontWeight = '400';
    }
  });
});