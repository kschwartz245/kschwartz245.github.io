// ==========================================================================
// Portfolio starter script
// ==========================================================================

// ---- Config (edit these) --------------------------------------------------
const WEB3FORMS_KEY = "c4970ce9-3839-4eec-ae05-ae8d18ab90e4"

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initHeaderShadow();
  initActiveLink();
  initScrollReveal();
  initContactForm();
  loadRepoStats();
  setFooterYear();
});

// ---- Mobile nav toggle ----------------------------------------------------
function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });

  // Close the menu after tapping a link
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

// ---- Header gets a border/shadow once you scroll --------------------------
function initHeaderShadow() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const update = () => header.classList.toggle("scrolled", window.scrollY > 10);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

// ---- Highlight the nav link for the section currently in view -------------
function initActiveLink() {
  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".nav-links a");
  if (!sections.length || !links.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) =>
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          )
        );
      });
    },
    { rootMargin: "-40% 0px -55% 0px" } // trigger when section crosses mid-screen
  );

  sections.forEach((s) => observer.observe(s));
}

// ---- Fade-in on scroll ----------------------------------------------------
function initScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  // Older browsers: just show everything
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((el, i) => {
    // Small stagger so grids cascade in rather than all at once
    el.style.transitionDelay = `${(i % 3) * 80}ms`;
    observer.observe(el);
  });
}

// ---- Contact form ---------------------------------------------------------
function initContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  const status = form.querySelector(".form-status");
  const button = form.querySelector(".btn-submit");

  const setStatus = (msg, type) => {
    status.textContent = msg;
    status.className = `form-status ${type || ""}`;
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.elements.name;
    const email = form.elements.email;
    const message = form.elements.message;
    const botcheck = form.elements.botcheck;

    // Basic validation
    let valid = true;
    [name, email, message].forEach((field) => {
      const ok = field.value.trim() !== "" && field.checkValidity();
      field.classList.toggle("invalid", !ok);
      if (!ok) valid = false;
    });

    if (!valid) {
      setStatus("Please fill in all fields with valid details.", "error");
      return;
    }

    // Honeypot tripped: pretend it worked, but don't send anything
    if (botcheck && botcheck.checked) {
      setStatus("Thanks! Your message has been sent.", "success");
      form.reset();
      return;
    }

    const captchaField = form.querySelector('textarea[name="h-captcha-response"]');
    const captchaToken = captchaField ? captchaField.value : "";

    if (!captchaToken) {
      setStatus("Please complete the captcha first.", "error");
      return;
    }

    button.disabled = true;
    button.textContent = "Sending...";
    setStatus("", "");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio enquiry from ${name.value.trim()}`,
          name: name.value.trim(),
          email: email.value.trim(),
          message: message.value.trim(),
          botcheck: false, // the real honeypot check is the one above
          "h-captcha-response": captchaToken,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Request failed");

      setStatus("Thanks! Your message has been sent.", "success");
      form.reset();
      if (window.hcaptcha) window.hcaptcha.reset();
    } catch (err) {
      setStatus("Something went wrong. Please try again, or email me directly.", "error");
    } finally {
      button.disabled = false;
      button.textContent = "Send Message";
    }
  });

  // Clear red border as soon as the user edits a field
  form.querySelectorAll("input, textarea").forEach((field) =>
    field.addEventListener("input", () => field.classList.remove("invalid"))
  );
}

// ---- Fill in GitHub stars/forks automatically -----------------------------
// Usage in HTML:  <article class="project-card" data-repo="username/repo-name"> ...
//                   <span class="stars">0</span> ... <span class="forks">0</span>
// If the request fails (rate limit, offline), the numbers already in your HTML stay.
function loadRepoStats() {
  document.querySelectorAll("[data-repo]").forEach(async (card) => {
    try {
      const res = await fetch(`https://api.github.com/repos/${card.dataset.repo}`);
      if (!res.ok) return;
      const repo = await res.json();

      const stars = card.querySelector(".stars");
      const forks = card.querySelector(".forks");
      if (stars) stars.textContent = repo.stargazers_count;
      if (forks) forks.textContent = repo.forks_count;
    } catch (err) {
      /* keep the hard-coded numbers */
    }
  });
}

// ---- Footer year ----------------------------------------------------------
function setFooterYear() {
  const el = document.querySelector("#year");
  if (el) el.textContent = new Date().getFullYear();
}