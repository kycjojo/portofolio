/* ============================================
   Project Detail Page Script
   ============================================ */

import PROJECTS from "../data/projects.js";

document.addEventListener("DOMContentLoaded", () => {
  initLoadingScreen();
  initTheme();
  initNavbar();
  initBackToTop();
  renderProjectDetail();

  if (window.lucide) window.lucide.createIcons();
});

// ── Loading Screen ──
function initLoadingScreen() {
  const loadingScreen = document.getElementById("loading-screen");
  window.addEventListener("load", () => {
    setTimeout(() => {
      loadingScreen.classList.add("hidden");
      if (window.lucide) window.lucide.createIcons();
    }, 400);
  });
  setTimeout(() => loadingScreen.classList.add("hidden"), 3000);
}

// ── Theme ──
function initTheme() {
  const toggle = document.getElementById("theme-toggle");
  const html = document.documentElement;
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
  toggle.innerHTML = `<i data-lucide="${theme === "dark" ? "sun" : "moon"}"></i>`;
  if (window.lucide) window.lucide.createIcons();
}

// ── Navbar ──
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("nav-hamburger");
  const navLinks = document.getElementById("nav-links");
  const overlay = document.getElementById("nav-overlay");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    hamburger.classList.toggle("active");
    overlay.classList.toggle("show");
    hamburger.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  const closeNav = () => {
    navLinks.classList.remove("open");
    hamburger.classList.remove("active");
    overlay.classList.remove("show");
    document.body.style.overflow = "";
  };

  overlay.addEventListener("click", closeNav);
  navLinks.querySelectorAll(".nav-link").forEach((l) => l.addEventListener("click", closeNav));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });
}

// ── Back to Top ──
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ── Render Project Detail ──
function renderProjectDetail() {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");

  const project = PROJECTS.find((p) => p.id === projectId);

  if (!project) {
    document.getElementById("project-title").textContent = "Proyek Tidak Ditemukan";
    document.getElementById("project-tagline").textContent = "Proyek yang Anda cari tidak tersedia.";
    document.getElementById("project-main").innerHTML = `
      <p>Silakan kembali ke halaman proyek untuk melihat daftar proyek yang tersedia.</p>
      <a href="index.html#projects" class="btn btn-primary" style="margin-top: 1rem;">
        <i data-lucide="arrow-left" class="btn-icon"></i> Kembali ke Proyek
      </a>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  // Update page title
  document.title = `${project.name} — Rochmad Djojo Oktabianto`;

  // Meta
  document.getElementById("project-meta").innerHTML = `
    <span>${project.category}</span>
    <span>${project.role}</span>
    <span>${project.teamType}</span>
    <span>${project.status}</span>
  `;

  // Title & Tagline
  document.getElementById("project-title").textContent = project.name;
  document.getElementById("project-tagline").textContent = project.tagline;

  // Actions
  let actionsHTML = "";
  if (project.liveDemo) {
    actionsHTML += `
      <a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
        <i data-lucide="external-link" class="btn-icon"></i> Live Demo
      </a>
    `;
  }
  if (project.github) {
    actionsHTML += `
      <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
        <i data-lucide="github" class="btn-icon"></i> Source Code
      </a>
    `;
  }
  document.getElementById("project-actions").innerHTML = actionsHTML;

  // Image
  const theme = document.documentElement.getAttribute("data-theme");
  const imgSrc = theme === "dark" && project.thumbnailDark ? project.thumbnailDark : project.thumbnail;
  document.getElementById("project-image").innerHTML = `
    <img src="${imgSrc}" alt="Screenshot ${project.name}" loading="lazy"
      onerror="this.parentElement.style.display='none'" />
  `;

  // Main Content
  document.getElementById("project-main").innerHTML = `
    <h2>Ringkasan</h2>
    <p>${project.summary}</p>

    <h2>Latar Belakang</h2>
    <p>${project.background}</p>

    <h2>Permasalahan</h2>
    <p>${project.problem}</p>

    <h2>Solusi</h2>
    <p>${project.solution}</p>

    <h2>Fitur Utama</h2>
    <ul>
      ${project.features.map((f) => `<li>${f}</li>`).join("")}
    </ul>
  `;

  // Sidebar
  document.getElementById("project-sidebar").innerHTML = `
    <div class="project-sidebar-card">
      <h3>Teknologi</h3>
      <div class="tech-tags">
        ${project.techStack.map((t) => `<span>${t}</span>`).join("")}
      </div>
    </div>

    <div class="project-sidebar-card">
      <h3>Informasi Proyek</h3>
      <div class="info-item">
        <span class="info-label">Peran</span>
        <span class="info-value">${project.role}</span>
      </div>
      <div class="info-item">
        <span class="info-label">Tipe</span>
        <span class="info-value">${project.teamType}</span>
      </div>
      <div class="info-item">
        <span class="info-label">Status</span>
        <span class="info-value">${project.status}</span>
      </div>
      <div class="info-item">
        <span class="info-label">Kategori</span>
        <span class="info-value">${project.category}</span>
      </div>
    </div>

    ${
      project.liveDemo
        ? `
    <div class="project-sidebar-card">
      <h3>Tautan</h3>
      <a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="width: 100%; justify-content: center; margin-top: 0.5rem;">
        <i data-lucide="external-link" class="btn-icon"></i> Buka Live Demo
      </a>
    </div>`
        : ""
    }
  `;

  // Other Projects
  const otherProjects = PROJECTS.filter((p) => p.id !== projectId);
  document.getElementById("other-projects").innerHTML = otherProjects
    .map(
      (p) => `
    <div class="project-card">
      <div class="project-card-image">
        <img src="${p.thumbnail}" alt="Screenshot ${p.name}" loading="lazy"
          onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 220%22><rect width=%22400%22 height=%22220%22 fill=%22%23112240%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-family=%22Inter,sans-serif%22 font-weight=%22600%22 font-size=%2220%22 fill=%22%2300d4ff%22>${p.name}</text></svg>'" />
      </div>
      <div class="project-card-body">
        <span class="project-card-category">${p.category}</span>
        <h3 class="project-card-title">${p.name}</h3>
        <p class="project-card-tagline">${p.tagline}</p>
        <p class="project-card-description">${p.summary}</p>
        <div class="project-card-footer">
          <a href="project-detail?id=${p.id}" class="btn btn-sm btn-ghost">
            <i data-lucide="arrow-right" class="btn-icon"></i> Studi Kasus
          </a>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  if (window.lucide) window.lucide.createIcons();
}
