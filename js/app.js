/* ============================================
   PORTOFOLIO — Main Application Script
   ============================================ */

import SKILLS from "../data/skills.js";
import PROJECTS from "../data/projects.js";

// ── Initialize App ──
document.addEventListener("DOMContentLoaded", () => {
  initLoadingScreen();
  initTheme();
  initNavbar();
  initScrollReveal();
  initBackToTop();
  renderSkills();
  renderProjects();
  initProjectFilters();
  initContactForm();

  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// ── Loading Screen ──
function initLoadingScreen() {
  const loadingScreen = document.getElementById("loading-screen");
  window.addEventListener("load", () => {
    setTimeout(() => {
      loadingScreen.classList.add("hidden");
      // Re-init lucide icons after loading screen
      if (window.lucide) window.lucide.createIcons();
    }, 600);
  });

  // Fallback: hide after 3s even if not fully loaded
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
  }, 3000);
}

// ── Theme Toggle ──
function initTheme() {
  const toggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  // Load saved theme or default to dark
  const saved = localStorage.getItem("theme") || "dark";
  html.setAttribute("data-theme", saved);
  updateThemeIcon(saved);

  toggle.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeIcon(next);
  });
}

function updateThemeIcon(theme) {
  const toggle = document.getElementById("theme-toggle");
  const iconName = theme === "dark" ? "sun" : "moon";
  toggle.innerHTML = `<i data-lucide="${iconName}"></i>`;
  if (window.lucide) window.lucide.createIcons();
}

// ── Navbar ──
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("nav-hamburger");
  const navLinks = document.getElementById("nav-links");
  const overlay = document.getElementById("nav-overlay");
  const links = navLinks.querySelectorAll(".nav-link");

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    lastScroll = scrollY;

    // Active nav link
    updateActiveNavLink();
  });

  // Hamburger toggle
  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    hamburger.classList.toggle("active");
    overlay.classList.toggle("show");
    hamburger.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  // Close on overlay click
  overlay.addEventListener("click", closeNav);

  // Close on link click
  links.forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  function closeNav() {
    navLinks.classList.remove("open");
    hamburger.classList.remove("active");
    overlay.classList.remove("show");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("open")) {
      closeNav();
    }
  });
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const scrollY = window.scrollY + 100;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

// ── Scroll Reveal ──
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  reveals.forEach((el) => observer.observe(el));
}

// ── Back to Top ──
function initBackToTop() {
  const btn = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ── Render Skills ──
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  // DevIcon mapping
  const iconMap = {
    html5: "devicon-html5-plain",
    css3: "devicon-css3-plain",
    javascript: "devicon-javascript-plain",
    typescript: "devicon-typescript-plain",
    react: "devicon-react-original",
    nextjs: "devicon-nextjs-plain",
    vuejs: "devicon-vuejs-plain",
    bootstrap: "devicon-bootstrap-plain",
    tailwindcss: "devicon-tailwindcss-original",
    jquery: "devicon-jquery-plain",
    nodejs: "devicon-nodejs-plain",
    express: "devicon-express-original",
    laravel: "devicon-laravel-original",
    python: "devicon-python-plain",
    java: "devicon-java-plain",
    csharp: "devicon-csharp-plain",
    mysql: "devicon-mysql-plain",
    postgresql: "devicon-postgresql-plain",
    sqlite: "devicon-sqlite-plain",
    git: "devicon-git-plain",
    github: "devicon-github-original",
    gitlab: "devicon-gitlab-plain",
    vscode: "devicon-vscode-plain",
    linux: "devicon-linux-plain",
    vercel: "devicon-vercel-original",
    netlify: "devicon-netlify-plain",
    heroku: "devicon-heroku-plain",
  };

  grid.innerHTML = SKILLS.map(
    (cat, i) => `
    <div class="skill-category reveal reveal-delay-${(i % 4) + 1}">
      <div class="skill-category-header">
        <span class="skill-category-icon">${cat.icon}</span>
        <span class="skill-category-name">${cat.category}</span>
      </div>
      <div class="skill-tags">
        ${cat.items
          .map(
            (skill) => `
          <span class="skill-tag">
            <i class="${iconMap[skill.icon] || ""}"></i>
            ${skill.name}
          </span>
        `
          )
          .join("")}
      </div>
    </div>
  `
  ).join("");

  // Re-observe for scroll reveal
  initScrollReveal();
}

// ── Render Projects ──
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(
    (project) => `
    <div class="project-card reveal" data-category="${project.category}">
      <div class="project-card-image">
        <img src="${project.thumbnail}" alt="Screenshot ${project.name}" loading="lazy"
          onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 220%22><rect width=%22400%22 height=%22220%22 fill=%22%23112240%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-family=%22Inter,sans-serif%22 font-weight=%22600%22 font-size=%2220%22 fill=%22%2300d4ff%22>${project.name}</text></svg>'" />
        <div class="project-card-overlay">
          ${
            project.liveDemo
              ? `<a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
              <i data-lucide="external-link" class="btn-icon"></i> Live Demo
            </a>`
              : ""
          }
          <a href="project-detail?id=${project.id}" class="btn btn-sm btn-secondary">
            <i data-lucide="eye" class="btn-icon"></i> Detail
          </a>
        </div>
      </div>
      <div class="project-card-body">
        <span class="project-card-category">${project.category}</span>
        <h3 class="project-card-title">${project.name}</h3>
        <p class="project-card-tagline">${project.tagline}</p>
        <p class="project-card-description">${project.summary}</p>
        <div class="project-card-tech">
          ${project.techStack
            .slice(0, 5)
            .map((t) => `<span>${t}</span>`)
            .join("")}
          ${project.techStack.length > 5 ? `<span>+${project.techStack.length - 5}</span>` : ""}
        </div>
        <div class="project-card-footer">
          ${
            project.liveDemo
              ? `<a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
              <i data-lucide="external-link" class="btn-icon"></i> Live Demo
            </a>`
              : ""
          }
          <a href="project-detail?id=${project.id}" class="btn btn-sm btn-ghost">
            <i data-lucide="arrow-right" class="btn-icon"></i> Studi Kasus
          </a>
        </div>
      </div>
    </div>
  `
  ).join("");

  // Re-observe and re-init icons
  initScrollReveal();
  if (window.lucide) window.lucide.createIcons();
}

// ── Project Filters ──
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = () => document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update active
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      cards().forEach((card) => {
        if (filter === "all" || card.dataset.category === filter) {
          card.style.display = "";
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 250);
        }
      });
    });
  });
}

// ── Contact Form ──
function initContactForm() {
  const form = document.getElementById("contact-form");
  const success = document.getElementById("form-success");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset errors
    form.querySelectorAll(".form-group").forEach((g) => g.classList.remove("error"));

    let hasError = false;
    const fields = {
      name: form.querySelector("#contact-name"),
      email: form.querySelector("#contact-email"),
      subject: form.querySelector("#contact-subject"),
      message: form.querySelector("#contact-message"),
    };

    // Validate
    if (!fields.name.value.trim()) {
      fields.name.closest(".form-group").classList.add("error");
      hasError = true;
    }

    if (!fields.email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value)) {
      fields.email.closest(".form-group").classList.add("error");
      hasError = true;
    }

    if (!fields.subject.value.trim()) {
      fields.subject.closest(".form-group").classList.add("error");
      hasError = true;
    }

    if (!fields.message.value.trim()) {
      fields.message.closest(".form-group").classList.add("error");
      hasError = true;
    }

    if (hasError) return;

    // Simulate send (no backend)
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i data-lucide="loader" class="btn-icon" style="animation: spin 1s linear infinite;"></i> Mengirim...';
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      form.style.display = "none";
      success.classList.add("show");

      // Construct mailto link as backup
      const mailtoLink = `mailto:rochmaddjojooktabianto@gmail.com?subject=${encodeURIComponent(fields.subject.value)}&body=${encodeURIComponent(`Dari: ${fields.name.value} (${fields.email.value})\n\n${fields.message.value}`)}`;
      window.open(mailtoLink, "_blank");

      // Reset after 5s
      setTimeout(() => {
        form.reset();
        form.style.display = "";
        success.classList.remove("show");
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i data-lucide="send" class="btn-icon"></i> Kirim Pesan';
        if (window.lucide) window.lucide.createIcons();
      }, 5000);
    }, 1000);
  });
}
