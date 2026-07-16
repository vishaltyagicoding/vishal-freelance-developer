/* ============================================
   VISHAL TYAGI — V5 PORTFOLIO
   Portfolio (Real) + Projects (Demo) Separated
   ============================================ */

// ============================================
// PORTFOLIO — REAL WORK (GREEN/BLUE ACCENT)
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
        icon: "fa-chart-line"
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
        icon: "fa-dumbbell"
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
        icon: "fa-store"
    },
];

// ============================================
// PROJECTS — DEMO CASE STUDIES (PURPLE ACCENT)
// ============================================
const projectsData = [
    {
        id: 1,
        name: "Gym Management System",
        type: "web",
        challenge: "A local gym needed to track memberships and payments manually.",
        approach: "Built a web dashboard with member profiles, payment tracking, and automated reminders.",
        solution: "React + Node.js dashboard with MongoDB database.",
        outcome: "Reduced manual work and improved member management efficiency.",
        tags: ["React", "Node.js", "MongoDB"],
        liveUrl: "https://vishaltyagicoding.github.io/gym-management-demo/",
        githubUrl: "https://github.com/vishaltyagicoding/gym-management-demo",
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
        tags: ["Next.js", "Tailwind", "Firebase"],
        liveUrl: "https://vishaltyagicoding.github.io/hostel-information-demo/",
        githubUrl: "https://github.com/vishaltyagicoding/hostel-information-demo",
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
        tags: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://vishaltyagicoding.github.io/business-portfolio-demo/",
        githubUrl: "https://github.com/vishaltyagicoding/business-portfolio-demo",
        icon: "fa-briefcase"
    }
];

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
    });
});

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
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
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('section:not(.hero), .service-card, .portfolio-card, .project-card, .why-card, .pricing-card, .faq-item, .contact-card, .about-card, .trust-stat-card, .profile-card, .skill-category, .process-card').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

// ============================================
// RENDER PORTFOLIO — REAL WORK
// ============================================
function renderPortfolio(filter = 'all') {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;

    const filtered = filter === 'all' ? portfolioData : portfolioData.filter(p => p.type === filter);

    grid.innerHTML = filtered.map((project, i) => `
        <div class="portfolio-card" data-type="${project.type}" style="animation: fadeInUp 0.5s ease ${i * 0.15}s both">
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
// RENDER PROJECTS — DEMO CASE STUDIES
// ============================================
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = projectsData.map((project, i) => `
        <div class="project-card" style="animation: fadeInUp 0.5s ease ${i * 0.15}s both">
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
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderPortfolio();
    renderProjects();
    console.log('%cVishal Tyagi Portfolio V5 — Ready', 'color: #10b981; font-size: 14px; font-weight: bold;');
    console.log('%cPortfolio = Real Work | Projects = Demo/Case Studies', 'color: #8b5cf6;');
});
