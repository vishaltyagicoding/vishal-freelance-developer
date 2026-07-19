/* ============================================
   VISHAL TYAGI — PREMIUM PORTFOLIO V6
   Interactive Effects & Animations
   ============================================ */

// ============================================
// DATA
// ============================================
const portfolioData = [
    {
        id: 1,
        name: "SmartRiskFX",
        type: "website",
        description: "Trading and analytics platform built for traders.",
        tech: ["React", "JavaScript", "Python/Django", "PostgreSQL", "AWS", "Redis", "WebSockets", "Docker", "Kubernetes", "CI/CD", "JWT Auth"],
        status: "Live",
        statusType: "live",
        link: "https://smartriskfx.com",
        icon: "fa-chart-line",
        screenshots: [],
        videoUrl: ""
    },
    {
        id: 2,
        name: "Gym Management App",
        type: "mobile",
        description: "Membership tracking, reminders and member management system.",
        tech: ["Flutter", "Firebase", "Dart", "Python/Django", "PostgreSQL"],
        status: "Completed",
        statusType: "completed",
        link: "https://play.google.com/store/apps/details?id=com.kg.app.sportdiary&hl=en-US",
        icon: "fa-dumbbell",
        screenshots: [],
        videoUrl: ""
    },
    {
        id: 3,
        name: "Dairy Shop Management App",
        type: "mobile",
        description: "Inventory, billing and customer management system.",
        tech: ["Flutter", "SQLite", "Dart", "Python/Django", "PostgreSQL"],
        status: "Completed",
        statusType: "completed",
        link: "https://play.google.com/store/apps/details?id=com.itswsdairysoft&hl=en-US",
        icon: "fa-store",
        screenshots: [],
        videoUrl: ""
    },
];

const recommendationsData = [
    // Add real LinkedIn recommendations here as { photo, name, role, text }.
    // Left empty intentionally — no placeholder names are invented.
];

const projectsData = [
    {
        id: 1,
        name: "Gym Management System",
        type: "web",
        challenge: "A local gym needed to track memberships and payments manually.",
        approach: "Built a web dashboard with member profiles, payment tracking, and automated reminders.",
        solution: "React + Node.js dashboard with MongoDB database.",
        outcome: "Reduced manual work and improved member management efficiency.",
        businessImpact: "Freed up staff time previously spent on manual tracking and reduced missed-payment follow-ups.",
        process: "Discovery call → requirement mapping → dashboard design → iterative development → testing → deployment.",
        tags: ["React", "Node.js", "MongoDB"],
        liveUrl: "https://vishaltyagicoding.github.io/gym-management-demo/",
        githubUrl: "https://github.com/vishaltyagicoding/gym-management-demo",
        videoUrl: "",
        screenshots: [],
        icon: "fa-dumbbell"
    },
    {
        id: 2,
        name: "Hostel Information Website",
        type: "web",
        challenge: "Students couldn't find hostel information online easily.",
        approach: "Created a responsive website with enquiry forms and room details.",
        solution: "Next.js website with contact forms and WhatsApp integration.",
        outcome: "Improved online presence and easier student enquiries.",
        businessImpact: "More inbound enquiries through the website instead of relying on word-of-mouth alone.",
        process: "Discovery call → content structuring → responsive design → WhatsApp integration → testing → deployment.",
        tags: ["Next.js", "Tailwind", "Firebase"],
        liveUrl: "https://vishaltyagicoding.github.io/hostel-information-demo/",
        githubUrl: "https://github.com/vishaltyagicoding/hostel-information-demo",
        videoUrl: "",
        screenshots: [],
        icon: "fa-building"
    },
    {
        id: 3,
        name: "Business Portfolio Website",
        type: "web",
        challenge: "A local business had no online presence to attract customers.",
        approach: "Built an SEO-friendly website with service pages and contact options.",
        solution: "HTML/CSS/JS website with responsive design and basic SEO.",
        outcome: "More customer enquiries through the website.",
        businessImpact: "Stronger local search visibility and a professional first impression for new customers.",
        process: "Discovery call → sitemap & copy structuring → design → build → SEO setup → deployment.",
        tags: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://vishaltyagicoding.github.io/business-portfolio-demo/",
        githubUrl: "https://github.com/vishaltyagicoding/business-portfolio-demo",
        videoUrl: "",
        screenshots: [],
        icon: "fa-briefcase"
    }
];

// ============================================
// MOUSE GLOW EFFECT
// ============================================
const mouseGlow = document.getElementById('mouseGlow');
let mouseX = 0, mouseY = 0;
let glowX = 0, glowY = 0;

if (mouseGlow && window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateGlow() {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;
        mouseGlow.style.left = glowX + 'px';
        mouseGlow.style.top = glowY + 'px';
        requestAnimationFrame(animateGlow);
    }
    animateGlow();
}

// ============================================
// NAVIGATION
// ============================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
    updateActiveNav();
});

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        if (scrollY > top && scrollY <= top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) link.classList.add('active');
            });
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        navMenu.classList.remove('active');
        hamburger.querySelectorAll('span').forEach(s => s.style.cssText = '');
    });
});

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const isOpen = navMenu.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    const spans = hamburger.querySelectorAll('span');
    if (isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans.forEach(s => s.style.cssText = '');
    }
});

// ============================================
// SCROLL REVEAL
// ============================================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('revealed');
            }, parseInt(delay));
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => {
    revealObserver.observe(el);
});

// Section reveal for staggered children
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('[data-reveal]');
            children.forEach((child, i) => {
                const baseDelay = parseInt(child.dataset.delay) || 0;
                setTimeout(() => {
                    child.classList.add('revealed');
                }, baseDelay + (i * 50));
            });
            sectionObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.05 });

document.querySelectorAll('[data-reveal-section]').forEach(el => {
    sectionObserver.observe(el);
});

// ============================================
// EXPERIENCE TIMELINE PROGRESS
// ============================================
const timelineProgress = document.querySelector('.timeline-progress');
if (timelineProgress) {
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                timelineProgress.style.height = '100%';
                timelineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    timelineObserver.observe(document.querySelector('.experience-timeline'));
}

// ============================================
// MAGNETIC BUTTONS
// ============================================
document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

// ============================================
// TILT CARDS
// ============================================
document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

// ============================================
// RENDER PORTFOLIO
// ============================================
function renderPortfolio(filter = 'all') {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;
    const filtered = filter === 'all' ? portfolioData : portfolioData.filter(p => p.type === filter);
    grid.innerHTML = filtered.map((project, i) => `
        <div class="portfolio-card" data-type="${project.type}" style="animation: fadeInUp 0.6s ease ${i * 0.15}s both">
            <div class="port-thumb">
                <span class="port-status ${project.statusType}">${project.status}</span>
                <div class="device-mockup-group">
                    <div class="device laptop-device">
                        <div class="device-screen"><i class="fas ${project.icon}"></i></div>
                    </div>
                    <div class="device tablet-device">
                        <div class="device-screen"><i class="fas ${project.icon}"></i></div>
                    </div>
                    <div class="device mobile-device">
                        <div class="device-screen"><i class="fas ${project.icon}"></i></div>
                    </div>
                </div>
            </div>
            <div class="port-content">
                <span class="port-type">${project.type === 'website' ? 'Website' : project.type === 'mobile' ? 'Mobile App' : 'Business System'}</span>
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="port-tech">
                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
                <div class="port-links">
                    <a href="${project.link}" class="port-live" target="_blank" rel="noopener">
                        <i class="fas fa-external-link-alt"></i> View Live Project
                    </a>
                    <button type="button" class="port-action" data-gallery-source="portfolio" data-project-id="${project.id}">
                        <i class="fas fa-images"></i> View Screenshots
                    </button>
                    <button type="button" class="port-action" data-video-source="portfolio" data-project-id="${project.id}">
                        <i class="fas fa-play-circle"></i> Watch Demo
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    bindGalleryAndVideoTriggers();
}

// Portfolio Filters
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderPortfolio(btn.getAttribute('data-filter'));
    });
});

// ============================================
// RENDER PROJECTS
// ============================================
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    grid.innerHTML = projectsData.map((project, i) => `
        <div class="project-card" style="animation: fadeInUp 0.6s ease ${i * 0.15}s both">
            <div class="proj-header">
                <span class="proj-label">Demo Case Study</span>
                <h3>${project.name}</h3>
                <p>Sample project demonstrating similar business solutions.</p>
            </div>
            <div class="proj-details">
                <div class="proj-section">
                    <h4>Challenge</h4>
                    <p>${project.challenge}</p>
                </div>
                <div class="proj-section">
                    <h4>Approach</h4>
                    <p>${project.approach}</p>
                </div>
                <div class="proj-section">
                    <h4>Solution</h4>
                    <p>${project.solution}</p>
                </div>
                <div class="proj-section">
                    <h4>Outcome</h4>
                    <p>${project.outcome}</p>
                </div>
            </div>
            <div class="proj-tags">
                ${project.tags.map(t => `<span>${t}</span>`).join('')}
            </div>
            <div class="proj-media-row">
                <button type="button" class="port-action" data-gallery-source="project" data-project-id="${project.id}">
                    <i class="fas fa-images"></i> View Screenshots
                </button>
                ${project.videoUrl ? `
                <button type="button" class="video-demo-card" data-video-source="project" data-project-id="${project.id}">
                    <span class="video-play"><i class="fas fa-play"></i></span> Watch Demo
                </button>` : `
                <div class="video-demo-card placeholder">
                    <span class="video-play"><i class="fas fa-play"></i></span> Demo Video Coming Soon
                </div>`}
            </div>
            <div class="proj-links">
                <a href="${project.liveUrl}" class="pl-live" target="_blank" rel="noopener">
                    <i class="fas fa-external-link-alt"></i> View Demo
                </a>
                <a href="${project.githubUrl}" class="pl-github" target="_blank" rel="noopener">
                    <i class="fab fa-github"></i> Code
                </a>
                <button type="button" class="pl-case" data-project-id="${project.id}">
                    <i class="fas fa-file-alt"></i> View Full Case Study
                </button>
            </div>
        </div>
    `).join('');
    document.querySelectorAll('.pl-case').forEach(btn => {
        btn.addEventListener('click', () => openCaseStudy(parseInt(btn.dataset.projectId)));
    });
    bindGalleryAndVideoTriggers();
}

// ============================================
// CASE STUDY MODAL
// ============================================
const caseModalOverlay = document.getElementById('caseModalOverlay');
const caseModalBody = document.getElementById('caseModalBody');
const caseModalClose = document.getElementById('caseModalClose');

function openCaseStudy(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project || !caseModalOverlay) return;
    caseModalBody.innerHTML = `
        <span class="proj-label">Case Study</span>
        <h3>${project.name}</h3>
        <div class="case-media-row">
            <button type="button" class="port-action" data-gallery-source="project" data-project-id="${project.id}">
                <i class="fas fa-images"></i> Screenshots
            </button>
            ${project.videoUrl ? `
            <button type="button" class="port-action" data-video-source="project" data-project-id="${project.id}">
                <i class="fas fa-play-circle"></i> Demo Video
            </button>` : `<span class="port-action disabled"><i class="fas fa-play-circle"></i> Demo Video Coming Soon</span>`}
        </div>
        <div class="case-section"><h4>Challenge</h4><p>${project.challenge}</p></div>
        <div class="case-section"><h4>Solution</h4><p>${project.solution}</p></div>
        <div class="case-section"><h4>Technology Stack</h4><div class="proj-tags">${project.tags.map(t => `<span>${t}</span>`).join('')}</div></div>
        <div class="case-section"><h4>Development Timeline</h4><p>${project.process || project.approach}</p></div>
        <div class="case-section"><h4>Outcome</h4><p>${project.outcome}</p></div>
        <div class="case-section"><h4>Business Impact</h4><p>${project.businessImpact || project.outcome}</p></div>
        <div class="proj-links">
            <a href="${project.liveUrl}" class="pl-live" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> View Demo</a>
            <a href="${project.githubUrl}" class="pl-github" target="_blank" rel="noopener"><i class="fab fa-github"></i> Code</a>
        </div>
    `;
    caseModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    bindGalleryAndVideoTriggers(caseModalBody);
}

function closeCaseStudy() {
    if (!caseModalOverlay) return;
    caseModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (caseModalClose) caseModalClose.addEventListener('click', closeCaseStudy);
if (caseModalOverlay) {
    caseModalOverlay.addEventListener('click', (e) => {
        if (e.target === caseModalOverlay) closeCaseStudy();
    });
}
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCaseStudy();
});

// ============================================
// SCREENSHOT GALLERY MODAL (Phase 5B / 5H)
// ============================================
const galleryModalOverlay = document.getElementById('galleryModalOverlay');
const galleryImageWrap = document.getElementById('galleryImageWrap');
const galleryDots = document.getElementById('galleryDots');
let galleryShots = [];
let galleryIndex = 0;

function renderGalleryFrame() {
    if (!galleryImageWrap) return;
    if (galleryShots.length === 0) {
        galleryImageWrap.innerHTML = `
            <div class="gallery-empty">
                <i class="fas fa-images"></i>
                <p>Screenshots coming soon for this project.</p>
            </div>`;
        galleryDots.innerHTML = '';
        return;
    }
    galleryImageWrap.innerHTML = `<img src="${galleryShots[galleryIndex]}" alt="Project screenshot ${galleryIndex + 1} of ${galleryShots.length}">`;
    galleryDots.innerHTML = galleryShots.map((_, i) => `<span class="g-dot ${i === galleryIndex ? 'active' : ''}" data-idx="${i}"></span>`).join('');
    galleryDots.querySelectorAll('.g-dot').forEach(dot => {
        dot.addEventListener('click', () => { galleryIndex = parseInt(dot.dataset.idx); renderGalleryFrame(); });
    });
}

function openGallery(source, id) {
    const list = source === 'portfolio' ? portfolioData : projectsData;
    const item = list.find(p => p.id === id);
    if (!item || !galleryModalOverlay) return;
    galleryShots = item.screenshots || [];
    galleryIndex = 0;
    renderGalleryFrame();
    galleryModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGallery() {
    if (!galleryModalOverlay) return;
    galleryModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('galleryModalClose')?.addEventListener('click', closeGallery);
galleryModalOverlay?.addEventListener('click', (e) => { if (e.target === galleryModalOverlay) closeGallery(); });
document.getElementById('galleryPrev')?.addEventListener('click', () => {
    if (!galleryShots.length) return;
    galleryIndex = (galleryIndex - 1 + galleryShots.length) % galleryShots.length;
    renderGalleryFrame();
});
document.getElementById('galleryNext')?.addEventListener('click', () => {
    if (!galleryShots.length) return;
    galleryIndex = (galleryIndex + 1) % galleryShots.length;
    renderGalleryFrame();
});
// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!galleryModalOverlay || !galleryModalOverlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowLeft') document.getElementById('galleryPrev')?.click();
    if (e.key === 'ArrowRight') document.getElementById('galleryNext')?.click();
});
// Mobile swipe
(function () {
    let touchStartX = 0;
    const stage = document.querySelector('.gallery-stage');
    if (!stage) return;
    stage.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    stage.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(dx) < 40) return;
        if (dx < 0) document.getElementById('galleryNext')?.click();
        else document.getElementById('galleryPrev')?.click();
    }, { passive: true });
})();

// ============================================
// DEMO VIDEO MODAL (Phase 5C)
// ============================================
const videoModalOverlay = document.getElementById('videoModalOverlay');
const videoModalBody = document.getElementById('videoModalBody');

function getEmbedMarkup(url) {
    if (!url) return `<div class="gallery-empty"><i class="fas fa-play-circle"></i><p>Demo video coming soon.</p></div>`;
    const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]+)/);
    if (yt) return `<iframe src="https://www.youtube.com/embed/${yt[1]}" title="Demo video" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    if (url.includes('loom.com')) {
        const loomId = url.split('/').pop().split('?')[0];
        return `<iframe src="https://www.loom.com/embed/${loomId}" title="Demo video" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    }
    if (/\.mp4($|\?)/.test(url)) return `<video src="${url}" controls autoplay></video>`;
    return `<iframe src="${url}" title="Demo video" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
}

function openVideo(source, id) {
    const list = source === 'portfolio' ? portfolioData : projectsData;
    const item = list.find(p => p.id === id);
    if (!item || !videoModalOverlay) return;
    videoModalBody.innerHTML = getEmbedMarkup(item.videoUrl);
    videoModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVideo() {
    if (!videoModalOverlay) return;
    videoModalOverlay.classList.remove('active');
    videoModalBody.innerHTML = '';
    document.body.style.overflow = '';
}

document.getElementById('videoModalClose')?.addEventListener('click', closeVideo);
videoModalOverlay?.addEventListener('click', (e) => { if (e.target === videoModalOverlay) closeVideo(); });
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModalOverlay?.classList.contains('active')) closeVideo();
});

// Bind gallery/video trigger buttons rendered dynamically
function bindGalleryAndVideoTriggers(scope = document) {
    scope.querySelectorAll('[data-gallery-source]').forEach(btn => {
        btn.addEventListener('click', () => openGallery(btn.dataset.gallerySource, parseInt(btn.dataset.projectId)));
    });
    scope.querySelectorAll('[data-video-source]').forEach(btn => {
        btn.addEventListener('click', () => openVideo(btn.dataset.videoSource, parseInt(btn.dataset.projectId)));
    });
}

// ============================================
// GENERIC CAROUSEL (Testimonials + Recommendations) — Phase 5F / 5G
// ============================================
function initCarousel(trackId, prevId, nextId, dotsId) {
    const track = document.getElementById(trackId);
    const prev = document.getElementById(prevId);
    const next = document.getElementById(nextId);
    const dotsWrap = document.getElementById(dotsId);
    if (!track) return;
    const cards = () => Array.from(track.children);
    let current = 0;

    function buildDots() {
        if (!dotsWrap) return;
        dotsWrap.innerHTML = cards().map((_, i) => `<span class="c-dot ${i === current ? 'active' : ''}"></span>`).join('');
    }

    function goTo(i) {
        const items = cards();
        if (!items.length) return;
        current = (i + items.length) % items.length;
        const target = items[current];
        track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: 'smooth' });
        buildDots();
    }

    prev?.addEventListener('click', () => goTo(current - 1));
    next?.addEventListener('click', () => goTo(current + 1));
    buildDots();

    // Touch swipe
    let startX = 0;
    track.addEventListener('touchstart', (e) => { startX = e.changedTouches[0].screenX; }, { passive: true });
    track.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].screenX - startX;
        if (Math.abs(dx) < 40) return;
        dx < 0 ? goTo(current + 1) : goTo(current - 1);
    }, { passive: true });
}

// ============================================
// RENDER LINKEDIN RECOMMENDATIONS (Phase 5F)
// ============================================
function renderRecommendations() {
    const track = document.getElementById('recTrack');
    if (!track) return;
    if (!recommendationsData.length) {
        track.innerHTML = `
            <div class="testimonial-card placeholder rec-empty">
                <div class="rec-empty-icon"><i class="fab fa-linkedin"></i></div>
                <p class="testimonial-text">Recommendations from LinkedIn will appear here as they come in.</p>
            </div>`;
        return;
    }
    track.innerHTML = recommendationsData.map(r => `
        <div class="testimonial-card rec-card">
            <div class="testimonial-author">
                ${r.photo ? `<img class="ta-avatar-img" src="${r.photo}" alt="${r.name}">` : `<div class="ta-avatar">${r.name.charAt(0)}</div>`}
                <div class="ta-info">
                    <strong>${r.name}</strong>
                    <span>${r.role}</span>
                </div>
            </div>
            <p class="testimonial-text">"${r.text}"</p>
        </div>
    `).join('');
}

// ============================================
// FAQ ACCORDION
// ============================================
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
    });
});

// ============================================
// PARALLAX EFFECTS
// ============================================
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            const scrolled = window.scrollY;
            // Floating icons parallax
            document.querySelectorAll('.float-icon').forEach((icon, i) => {
                const speed = 0.05 + (i * 0.02);
                icon.style.transform = `translateY(${scrolled * speed}px)`;
            });
            // Aurora blobs parallax
            document.querySelectorAll('.aurora-blob').forEach((blob, i) => {
                const speed = 0.02 + (i * 0.01);
                blob.style.transform = `translateY(${scrolled * speed}px)`;
            });
            ticking = false;
        });
        ticking = true;
    }
});

// ============================================
// PROJECT ESTIMATOR
// ============================================
const estimatorResult = document.getElementById('estimatorResult');
document.querySelectorAll('.est-option').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.est-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (estimatorResult) {
            estimatorResult.innerHTML = `<strong>${btn.textContent}</strong>: ${btn.dataset.range} <span class="estimator-caveat">(Final quote depends on requirements)</span>`;
        }
    });
});

// ============================================
// CONTACT / LEAD FORM VALIDATION
// ============================================
const leadForm = document.getElementById('leadForm');
if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;
        const name = document.getElementById('lf-name');
        const email = document.getElementById('lf-email');
        const desc = document.getElementById('lf-desc');
        const errName = document.getElementById('err-name');
        const errEmail = document.getElementById('err-email');
        const errDesc = document.getElementById('err-desc');
        const status = document.getElementById('formStatus');

        [errName, errEmail, errDesc].forEach(el => { if (el) el.textContent = ''; });
        [name, email, desc].forEach(el => el && el.classList.remove('input-error'));

        if (!name.value.trim()) {
            errName.textContent = 'Please enter your name.';
            name.classList.add('input-error');
            valid = false;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            errEmail.textContent = 'Please enter a valid email address.';
            email.classList.add('input-error');
            valid = false;
        }
        if (!desc.value.trim()) {
            errDesc.textContent = 'Please describe your project.';
            desc.classList.add('input-error');
            valid = false;
        }

        if (!valid) {
            status.className = 'form-status error';
            status.textContent = 'Please fix the highlighted fields.';
            return;
        }

        const projectType = document.getElementById('lf-type').value;
        const timeline = document.getElementById('lf-timeline').value;
        const budget = document.getElementById('lf-budget').value;
        const industry = document.getElementById('lf-industry').value;

        const msgParts = [
            `Hi Vishal, I'd like to discuss a project.`,
            `Name: ${name.value.trim()}`,
            `Email: ${email.value.trim()}`,
            projectType ? `Project Type: ${projectType}` : '',
            timeline ? `Timeline: ${timeline}` : '',
            budget ? `Budget: ${budget}` : '',
            industry ? `Industry: ${industry}` : '',
            `Details: ${desc.value.trim()}`
        ].filter(Boolean).join('\n');

        status.className = 'form-status success';
        status.textContent = 'Thanks! Opening WhatsApp to send your project details...';
        window.open(`https://wa.me/917879490857?text=${encodeURIComponent(msgParts)}`, '_blank');
        leadForm.reset();
    });
}

// ============================================
// ACHIEVEMENTS COUNTER ANIMATION
// ============================================
function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10) || 0;
    const duration = 1200;
    const start = performance.now();
    function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.floor(progress * target);
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target;
    }
    requestAnimationFrame(tick);
}
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.4 });
document.querySelectorAll('.achievements .counter').forEach(el => counterObserver.observe(el));

// Animate the existing hero stats counter (Projects Delivered)
document.querySelectorAll('.stats-section .stat-card[data-count] .counter').forEach(el => {
    const card = el.closest('.stat-card');
    if (card && card.dataset.count) el.dataset.count = card.dataset.count;
    counterObserver.observe(el);
});

// ============================================
// DEBOUNCE UTILITY (performance)
// ============================================
function debounce(fn, delay = 150) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}
window.addEventListener('resize', debounce(() => {
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
}, 150));

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderPortfolio();
    renderProjects();
    renderRecommendations();
    initCarousel('testiTrack', 'testiPrev', 'testiNext', 'testiDots');
    initCarousel('recTrack', 'recPrev', 'recNext', 'recDots');
    console.log('%cVishal Tyagi Portfolio V6 — Premium Edition', 'color: #8b5cf6; font-size: 14px; font-weight: bold;');
    console.log('%cDesigned with Apple-level polish', 'color: #06b6d4;');
});