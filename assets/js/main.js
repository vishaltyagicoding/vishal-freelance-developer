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
    //     screenshots: [
    //     "assets/images/Screenshot (1068).png",
    //     "assets/images/Screenshot (1069).png",
    //     "assets/images/Screenshot (1070).png",
    //     "assets/images/Screenshot (1071).png",
        
    // ]
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
                    <!-- <a href="javascript:void(0)"
                     class="port-demo"
                     onclick="showScreenshots(${project.id})">
                         <i class="fas fa-images"></i> Screen Demo
                    </a>-->
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




function showScreenshots(projectId) {

    const project = portfolioData.find(
        p => p.id === projectId
    );

    if (!project || !project.screenshots?.length) {
        alert("No screenshots available");
        return;
    }

    const gallery = project.screenshots.map(img => `
        <div style="margin-bottom:20px;">
            <img src="${img}"
                 style="
                 width:100%;
                 max-width:1200px;
                 border-radius:12px;
                 display:block;
                 margin:auto;
                 box-shadow:0 0 20px rgba(0,0,0,.4);
                 ">
        </div>
    `).join('');

    const newWindow = window.open('', '_blank');

    newWindow.document.write(`
        <html>
        <head>
            <title>${project.name} Screenshots</title>
            <style>
                body{
                    background:#0f172a;
                    padding:30px;
                    margin:0;
                    font-family:Arial,sans-serif;
                }

                h1{
                    color:white;
                    text-align:center;
                    margin-bottom:30px;
                }
            </style>
        </head>
        <body>
            <h1>${project.name}</h1>
            ${gallery}
        </body>
        </html>
    `);

    newWindow.document.close();
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderPortfolio();
    renderProjects();
    console.log('%cVishal Tyagi Portfolio V6 — Premium Edition', 'color: #8b5cf6; font-size: 14px; font-weight: bold;');
    console.log('%cDesigned with Apple-level polish', 'color: #06b6d4;');
});