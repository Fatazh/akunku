// Cache DOM references
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-menu");
const navbar = document.querySelector(".navbar");

// Mobile Navigation Toggle
mobileMenu.addEventListener("click", () => {
  const isExpanded = mobileMenu.getAttribute("aria-expanded") === "true";
  mobileMenu.setAttribute("aria-expanded", String(!isExpanded));
  mobileMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target) && navMenu.classList.contains("active")) {
    mobileMenu.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// Smooth scrolling for navigation links (with navbar offset)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Immediately set active state — don't wait for scroll event
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const navbarHeight = navbar.offsetHeight;
      const targetPosition =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight -
        20;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Active navigation link highlighting (throttled with requestAnimationFrame)
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
let scrollTicking = false;

function updateActiveNav() {
  const navbarHeight = navbar.offsetHeight;
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - navbarHeight - 100) {
      current = section.getAttribute("id");
    }
  });

  // Special case: if scrolled near the bottom of the page,
  // force the last section (contact) to be active.
  // This fixes short sections that can't reach the scroll threshold.
  const nearBottom =
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 50;
  if (nearBottom && sections.length > 0) {
    current = sections[sections.length - 1].getAttribute("id");
  }

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
}

window.addEventListener(
  "scroll",
  () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        updateActiveNav();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  },
  { passive: true },
);

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".skill-card, .project-card, .stat-card",
  );
  animatedElements.forEach((el) => {
    observer.observe(el);
  });
});

// Animate progress bars on scroll
const progressBars = document.querySelectorAll(".progress-bar");
const progressObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.style.width;
        bar.style.width = "0";
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
        progressObserver.unobserve(bar);
      }
    });
  },
  { threshold: 0.5 },
);

progressBars.forEach((bar) => {
  progressObserver.observe(bar);
});

// Console welcome message
console.log(
  "%c👋 Welcome to my Portfolio!",
  "font-size: 20px; font-weight: bold; color: #10b981;",
);
console.log(
  "%cBuilt with passion using HTML, CSS, and JavaScript",
  "font-size: 14px; color: #3b82f6;",
);
console.log(
  "%cFeel free to explore and connect!",
  "font-size: 12px; color: #64748b;",
);
