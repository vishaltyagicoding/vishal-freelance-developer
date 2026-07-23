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
        screenshots: [
            { icon: "fa-chart-line", label: "Live Trading Dashboard" },
            { icon: "fa-signal", label: "Buy/Sell Signals" },
            { icon: "fa-shield-alt", label: "Risk Management" }
        ],
        demoVideo: { type: "none", url: "" }
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
        screenshots: [
            { icon: "fa-users", label: "Member Directory" },
            { icon: "fa-bell", label: "Automated Reminders" },
            { icon: "fa-chart-bar", label: "Membership Analytics" }
        ],
        demoVideo: { type: "none", url: "" }
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
        screenshots: [
            { icon: "fa-boxes", label: "Inventory Overview" },
            { icon: "fa-receipt", label: "Billing Screen" },
            { icon: "fa-address-book", label: "Customer Records" }
        ],
        demoVideo: { type: "none", url: "" }
    },
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
        impact: "Cut membership admin time by an estimated 70% and reduced missed-payment follow-ups with automated reminders.",
        timeline: "Planning & design: 3 days · Build: 10 days · Testing & handover: 2 days",
        tags: ["React", "Node.js", "MongoDB"],
        liveUrl: "https://vishaltyagicoding.github.io/gym-management-demo/",
        githubUrl: "https://github.com/vishaltyagicoding/gym-management-demo",
        icon: "fa-dumbbell",
        screenshots: [
            { icon: "fa-tachometer-alt", label: "Admin Dashboard" },
            { icon: "fa-users", label: "Member Profiles" },
            { icon: "fa-credit-card", label: "Payment Tracking" }
        ],
        demoVideo: { type: "none", url: "" }
    },
    {
        id: 2,
        name: "Hostel Information Website",
        type: "web",
        challenge: "Students couldn't find hostel information online easily.",
        approach: "Created a responsive website with enquiry forms and room details.",
        solution: "Next.js website with contact forms and WhatsApp integration.",
        outcome: "Improved online presence and easier student enquiries.",
        impact: "Increased qualified student enquiries through a single mobile-friendly enquiry funnel.",
        timeline: "Planning & design: 2 days · Build: 6 days · Testing & handover: 1 day",
        tags: ["Next.js", "Tailwind", "Firebase"],
        liveUrl: "https://vishaltyagicoding.github.io/hostel-information-demo/",
        githubUrl: "https://github.com/vishaltyagicoding/hostel-information-demo",
        icon: "fa-building",
        screenshots: [
            { icon: "fa-home", label: "Homepage" },
            { icon: "fa-bed", label: "Room Details" },
            { icon: "fa-envelope-open-text", label: "Enquiry Form" }
        ],
        demoVideo: { type: "none", url: "" }
    },
    {
        id: 3,
        name: "Business Portfolio Website",
        type: "web",
        challenge: "A local business had no online presence to attract customers.",
        approach: "Built an SEO-friendly website with service pages and contact options.",
        solution: "HTML/CSS/JS website with responsive design and basic SEO.",
        outcome: "More customer enquiries through the website.",
        impact: "Established a searchable online presence, generating new customer enquiries within the first month.",
        timeline: "Planning & design: 2 days · Build: 5 days · Testing & handover: 1 day",
        tags: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://vishaltyagicoding.github.io/business-portfolio-demo/",
        githubUrl: "https://github.com/vishaltyagicoding/business-portfolio-demo",
        icon: "fa-briefcase",
        screenshots: [
            { icon: "fa-desktop", label: "Landing Page" },
            { icon: "fa-concierge-bell", label: "Services Section" },
            { icon: "fa-phone-alt", label: "Contact Section" }
        ],
        demoVideo: { type: "none", url: "" }
    }
];

const recommendationsData = [
    {
        name: "Client Recommendation",
        role: "Startup Founder",
        photoInitial: "S",
        text: "Vishal understood our requirements quickly and delivered a working product ahead of schedule. Clear communication throughout."
    },
    {
        name: "Client Recommendation",
        role: "Business Owner",
        photoInitial: "B",
        text: "Great technical skills combined with genuine care about the outcome for our business. Would work with him again."
    },
    {
        name: "Client Recommendation",
        role: "Product Manager",
        photoInitial: "P",
        text: "Reliable, detail-oriented, and responsive. Vishal turned a vague idea into a functioning application without friction."
    }
];

const testimonialsData = [
    {
        name: "SmartRiskFX Client",
        company: "Trading Platform",
        projectType: "Website",
        text: "Vishal delivered our trading platform on time with exceptional quality. The real-time dashboard exceeded our expectations.",
        avatar: "S"
    },
    {
        name: "Gym Owner",
        company: "Fitness Business",
        projectType: "Mobile App Development",
        text: "The gym management app transformed how we handle memberships. Automated reminders alone saved us hours every week.",
        avatar: "G"
    },
    {
        name: "Dairy Shop Owner",
        company: "Retail Business",
        projectType: "Business Management App",
        text: "Professional, responsive, and technically skilled. Vishal understood our requirements and delivered a solution that actually works.",
        avatar: "D"
    }
];

// ============================================
// NAVIGATION
// ============================================
const navbar  = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll: add/remove scrolled class
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveNav();
}, { passive: true });

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const top    = section.offsetTop;
        const height = section.offsetHeight;
        const id     = section.getAttribute('id');
        if (scrollY > top && scrollY <= top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) link.classList.add('active');
            });
        }
    });
}

// Nav links: smooth scroll + close menu
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = navbar.offsetHeight + 8;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }
        closeMenu();
    });
});

// Hamburger toggle
hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isOpen);
    const spans = hamburger.querySelectorAll('span');
    if (isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        document.body.style.overflow = 'hidden';
    } else {
        closeMenu();
    }
});

function closeMenu() {
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    const spans = hamburger.querySelectorAll('span');
    spans.forEach(s => s.style.cssText = '');
    document.body.style.overflow = '';
}

// Close menu on outside tap (mobile)
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') &&
        !navMenu.contains(e.target) &&
        !hamburger.contains(e.target)) {
        closeMenu();
    }
});

// Close on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMenu();
        // also close modals
        document.querySelectorAll('.modal-overlay.active').forEach(m => closeModal(m));
    }
});

// ============================================
// PROCESS TIMELINE ANIMATION
// ============================================
const progressBar = document.querySelector('.timeline-progress-bar');
if (progressBar) {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBar.style.width = '100%';
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    const timeline = document.querySelector('.process-timeline');
    if (timeline) obs.observe(timeline);
}

// ============================================
// SCROLL REVEAL (IntersectionObserver)
// ============================================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ============================================
// RENDER PORTFOLIO
// ============================================
function renderPortfolio(filter = 'all') {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;
    const filtered = filter === 'all'
        ? portfolioData
        : portfolioData.filter(p => p.type === filter);

    grid.innerHTML = filtered.map((project, i) => `
        <div class="portfolio-card" data-type="${project.type}" style="animation:fadeInUp 0.5s ease ${i * 0.12}s both">
            <div class="port-thumb">
                <i class="fas ${project.icon}"></i>
                <span class="port-status ${project.statusType}">${project.status}</span>
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
                </div>
                <div class="port-links port-links-secondary">
                    <!--<button type="button" class="port-gallery-btn" data-source="portfolio" data-id="${project.id}">
                        <i class="fas fa-images"></i> View Screenshots
                    </button>-->
                    ${project.demoVideo && project.demoVideo.type !== 'none' ? `
                    <button type="button" class="port-demo-btn" data-source="portfolio" data-id="${project.id}">
                        <i class="fas fa-play-circle"></i> Watch Demo
                    </button>` : ''}
                </div>
            </div>
        </div>
    `).join('');
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
        <div class="project-card" style="animation:fadeInUp 0.5s ease ${i * 0.12}s both">
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
            <div class="proj-links">
                <a href="${project.liveUrl}" class="pl-live" target="_blank" rel="noopener">
                    <i class="fas fa-external-link-alt"></i> View Demo
                </a>
                <a href="${project.githubUrl}" class="pl-github" target="_blank" rel="noopener">
                    <i class="fab fa-github"></i> Code
                </a>
            </div>
            <div class="proj-links proj-links-secondary">
                <button type="button" class="pl-case-study" data-id="${project.id}">
                    <i class="fas fa-folder-open"></i> View Case Study
                </button>
            </div>
        </div>
    `).join('');
}

// ============================================
// MODAL SYSTEM
// ============================================
let galleryState = { items: [], index: 0 };

function findProject(source, id) {
    const list = source === 'portfolio' ? portfolioData : projectsData;
    return list.find(p => p.id === Number(id));
}

function buildSlideHTML(shot) {
    if (shot.image) {
        return `<img src="${shot.image}" alt="${shot.label || ''}" class="gallery-slide-img" loading="lazy">`;
    }
    return `
        <div class="gallery-slide-placeholder">
            <i class="fas ${shot.icon || 'fa-image'}"></i>
            <span>${shot.label || 'Screenshot'}</span>
        </div>`;
}

function openGalleryModal(source, id, startIndex = 0) {
    const project = findProject(source, id);
    if (!project || !project.screenshots || !project.screenshots.length) return;
    galleryState = { items: project.screenshots, index: startIndex };
    const modal = document.getElementById('galleryModal');
    document.getElementById('galleryModalTitle').textContent = project.name + ' — Screenshots';
    renderGallerySlide();
    modal.classList.add('active');
    document.body.classList.add('modal-open');
}

function renderGallerySlide() {
    const track   = document.getElementById('galleryTrack');
    const counter = document.getElementById('galleryCounter');
    if (!track) return;
    const { items, index } = galleryState;
    track.innerHTML = buildSlideHTML(items[index]);
    counter.textContent = `${index + 1} / ${items.length}`;
}

function galleryNext() {
    if (!galleryState.items.length) return;
    galleryState.index = (galleryState.index + 1) % galleryState.items.length;
    renderGallerySlide();
}
function galleryPrev() {
    if (!galleryState.items.length) return;
    galleryState.index = (galleryState.index - 1 + galleryState.items.length) % galleryState.items.length;
    renderGallerySlide();
}

function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('active');
    document.body.classList.remove('modal-open');
    const videoContainer = document.getElementById('videoModalBody');
    if (videoContainer) videoContainer.innerHTML = '';
}

function openVideoModal(source, id) {
    const project = findProject(source, id);
    if (!project || !project.demoVideo || project.demoVideo.type === 'none') return;
    const { type, url } = project.demoVideo;
    const body = document.getElementById('videoModalBody');
    document.getElementById('videoModalTitle').textContent = project.name + ' — Demo';
    let embedHTML = '';
    if (type === 'youtube') {
        const idMatch = url.match(/(?:v=|\.be\/|embed\/)([A-Za-z0-9_-]{6,})/);
        const vid = idMatch ? idMatch[1] : url;
        embedHTML = `<iframe src="https://www.youtube.com/embed/${vid}" title="Demo video" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    } else if (type === 'loom') {
        const idMatch = url.match(/share\/([A-Za-z0-9]+)/);
        const vid = idMatch ? idMatch[1] : url;
        embedHTML = `<iframe src="https://www.loom.com/embed/${vid}" title="Demo video" frameborder="0" allowfullscreen></iframe>`;
    } else if (type === 'mp4') {
        embedHTML = `<video src="${url}" controls autoplay></video>`;
    }
    body.innerHTML = embedHTML;
    document.getElementById('videoModal').classList.add('active');
    document.body.classList.add('modal-open');
}

function openCaseStudyModal(id) {
    const project = findProject('projects', id);
    if (!project) return;
    const modal = document.getElementById('caseStudyModal');
    document.getElementById('caseStudyTitle').textContent   = project.name;
    document.getElementById('caseStudyImpact').textContent  = project.impact || project.outcome;
    document.getElementById('caseStudyTimeline').textContent = project.timeline || 'Timeline available on request.';
    document.getElementById('caseStudyTags').innerHTML = project.tags.map(t => `<span>${t}</span>`).join('');
    document.getElementById('caseStudyThumbs').innerHTML = project.screenshots.map((s, i) => `
        <button type="button" class="cs-thumb" data-id="${project.id}" data-index="${i}">
            ${buildSlideHTML(s)}
        </button>
    `).join('');
    const demoBtn = document.getElementById('caseStudyDemoBtn');
    if (project.demoVideo && project.demoVideo.type !== 'none') {
        demoBtn.style.display = 'inline-flex';
        demoBtn.dataset.id = project.id;
    } else {
        demoBtn.style.display = 'none';
    }
    modal.classList.add('active');
    document.body.classList.add('modal-open');
}

// Delegated click for dynamically rendered cards + modals
document.addEventListener('click', (e) => {
    // Portfolio gallery btn
    const galleryBtn = e.target.closest('.port-gallery-btn');
    if (galleryBtn) { openGalleryModal(galleryBtn.dataset.source, galleryBtn.dataset.id, 0); return; }

    // Portfolio demo btn
    const demoBtn = e.target.closest('.port-demo-btn');
    if (demoBtn) { openVideoModal(demoBtn.dataset.source, demoBtn.dataset.id); return; }

    // Project case study btn
    const caseBtn = e.target.closest('.pl-case-study');
    if (caseBtn) { openCaseStudyModal(caseBtn.dataset.id); return; }

    // Case study thumbnails
    const csThumb = e.target.closest('.cs-thumb');
    if (csThumb) { openGalleryModal('projects', csThumb.dataset.id, Number(csThumb.dataset.index)); return; }

    // Case study demo btn
    const csDemoBtn = e.target.closest('#caseStudyDemoBtn');
    if (csDemoBtn && csDemoBtn.style.display !== 'none') { openVideoModal('projects', csDemoBtn.dataset.id); return; }

    // Gallery navigation
    if (e.target.closest('#galleryNext')) { galleryNext(); return; }
    if (e.target.closest('#galleryPrev')) { galleryPrev(); return; }

    // Modal close buttons
    if (e.target.matches('[data-modal-close]')) { closeModal(e.target.closest('.modal-overlay')); return; }

    // Click outside modal box
    if (e.target.classList.contains('modal-overlay')) { closeModal(e.target); return; }
});

// Keyboard: gallery arrows + Escape
document.addEventListener('keydown', (e) => {
    const activeGallery = document.getElementById('galleryModal');
    if (activeGallery && activeGallery.classList.contains('active')) {
        if (e.key === 'ArrowRight') { galleryNext(); return; }
        if (e.key === 'ArrowLeft')  { galleryPrev(); return; }
    }
});

// Touch swipe for gallery
(function initGallerySwipe() {
    const track = document.getElementById('galleryTrack');
    if (!track) return;
    let startX = 0;
    track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend',   (e) => {
        const diff = e.changedTouches[0].clientX - startX;
        if (Math.abs(diff) > 40) { diff < 0 ? galleryNext() : galleryPrev(); }
    }, { passive: true });
})();

// ============================================
// PROOF OF WORK STATS
// ============================================
function renderProofOfWork() {
    const container = document.getElementById('proofStats');
    if (!container) return;
    const allTech = new Set();
    portfolioData.forEach(p => p.tech.forEach(t => allTech.add(t)));
    projectsData.forEach(p => p.tags.forEach(t => allTech.add(t)));
    const stats = [
        { icon: 'fa-diagram-project', number: `${portfolioData.length + projectsData.length}+`, label: 'Projects Built' },
        { icon: 'fa-layer-group',     number: `${allTech.size}+`,                               label: 'Technologies Used' },
        { icon: 'fa-code-branch',     number: 'Active',                                          label: 'GitHub Activity' },
        { icon: 'fa-globe',           number: `${portfolioData.filter(p => p.statusType === 'live').length}`, label: 'Live Applications' }
    ];
    container.innerHTML = stats.map((s, i) => `
        <div class="proof-card" style="animation:fadeInUp 0.5s ease ${i * 0.1}s both">
            <div class="proof-icon"><i class="fas ${s.icon}"></i></div>
            <div class="proof-number">${s.number}</div>
            <div class="proof-label">${s.label}</div>
        </div>
    `).join('');
}

// ============================================
// RECOMMENDATIONS CAROUSEL
// ============================================
let recIndex = 0;

function renderRecommendations() {
    const track = document.getElementById('recTrack');
    const dots  = document.getElementById('recDots');
    if (!track) return;
    track.innerHTML = recommendationsData.map(r => `
        <div class="rec-slide">
            <div class="rec-card">
                <div class="rec-quote-icon"><i class="fas fa-quote-left"></i></div>
                <p class="rec-text">${r.text}</p>
                <div class="rec-author">
                    <div class="rec-avatar">${r.photoInitial}</div>
                    <div class="rec-info">
                        <strong>${r.name}</strong>
                        <span>${r.role}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    dots.innerHTML = recommendationsData.map((_, i) =>
        `<button type="button" class="carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Go to slide ${i+1}"></button>`
    ).join('');
    updateRecCarousel();
}

function updateRecCarousel() {
    const track = document.getElementById('recTrack');
    if (!track) return;
    track.style.transform = `translateX(-${recIndex * 100}%)`;
    document.querySelectorAll('#recDots .carousel-dot').forEach((d, i) => d.classList.toggle('active', i === recIndex));
}
function recNext() { recIndex = (recIndex + 1) % recommendationsData.length; updateRecCarousel(); }
function recPrev() { recIndex = (recIndex - 1 + recommendationsData.length) % recommendationsData.length; updateRecCarousel(); }

// ============================================
// TESTIMONIALS CAROUSEL
// ============================================
let testiIndex = 0;

function renderTestimonials() {
    const track = document.getElementById('testiTrack');
    const dots  = document.getElementById('testiDots');
    if (!track) return;
    track.innerHTML = testimonialsData.map(t => `
        <div class="testi-slide">
            <div class="testimonial-card">
                <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <p class="testimonial-text">"${t.text}"</p>
                <div class="testimonial-author">
                    <div class="ta-avatar">${t.avatar}</div>
                    <div class="ta-info">
                        <strong>${t.name}</strong>
                        <span>${t.company} · ${t.projectType}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    dots.innerHTML = testimonialsData.map((_, i) =>
        `<button type="button" class="carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Go to slide ${i+1}"></button>`
    ).join('');
    updateTestiCarousel();
}

function updateTestiCarousel() {
    const track = document.getElementById('testiTrack');
    if (!track) return;
    track.style.transform = `translateX(-${testiIndex * 100}%)`;
    document.querySelectorAll('#testiDots .carousel-dot').forEach((d, i) => d.classList.toggle('active', i === testiIndex));
}
function testiNext() { testiIndex = (testiIndex + 1) % testimonialsData.length; updateTestiCarousel(); }
function testiPrev() { testiIndex = (testiIndex - 1 + testimonialsData.length) % testimonialsData.length; updateTestiCarousel(); }

// Carousel control delegation
document.addEventListener('click', (e) => {
    if (e.target.closest('#recNext'))   { recNext();   return; }
    if (e.target.closest('#recPrev'))   { recPrev();   return; }
    if (e.target.closest('#testiNext')) { testiNext(); return; }
    if (e.target.closest('#testiPrev')) { testiPrev(); return; }

    const recDot = e.target.closest('#recDots .carousel-dot');
    if (recDot) { recIndex = Number(recDot.dataset.index); updateRecCarousel(); return; }

    const testiDot = e.target.closest('#testiDots .carousel-dot');
    if (testiDot) { testiIndex = Number(testiDot.dataset.index); updateTestiCarousel(); return; }
});

// Touch swipe for carousels
function initCarouselSwipe(trackId, nextFn, prevFn) {
    const track = document.getElementById(trackId);
    if (!track) return;
    let startX = 0;
    track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend',   (e) => {
        const diff = e.changedTouches[0].clientX - startX;
        if (Math.abs(diff) > 40) { diff < 0 ? nextFn() : prevFn(); }
    }, { passive: true });
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
// PARALLAX (desktop only)
// ============================================
if (window.innerWidth > 768) {
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrolled = window.scrollY;
                document.querySelectorAll('.float-icon').forEach((icon, i) => {
                    icon.style.transform = `translateY(${scrolled * (0.05 + i * 0.02)}px)`;
                });
                document.querySelectorAll('.aurora-blob').forEach((blob, i) => {
                    blob.style.transform = `translateY(${scrolled * (0.02 + i * 0.01)}px)`;
                });
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderPortfolio();
    renderProjects();
    renderProofOfWork();
    renderRecommendations();
    renderTestimonials();
    initCarouselSwipe('recTrack',   recNext,   recPrev);
    initCarouselSwipe('testiTrack', testiNext, testiPrev);

    console.log('%cVishal Tyagi Portfolio V6 — Mobile Responsive Edition', 'color: #8b5cf6; font-size: 14px; font-weight: bold;');
});