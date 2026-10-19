/*
 * Sumit Shekhar portfolio: small enhancements only. The site works without this file.
 *
 * EDIT THE CONFIG BELOW to add your real contact details. Any value left empty
 * keeps its bracketed placeholder text on the page, so nothing fake is published.
 */
const CONFIG = {
  email: "",        // e.g. "you@example.com"
  phone: "",        // e.g. "+91 00000 00000"
  youtube: "",      // full URL, e.g. "https://www.youtube.com/@yourchannel"
  linkedin: "",     // full URL
  instagram: "",    // full URL
};

(function () {
  "use strict";

  /* ---------- Contact details ---------- */
  function fillContact() {
    document.querySelectorAll("[data-contact]").forEach(function (el) {
      var key = el.getAttribute("data-contact");
      var value = (CONFIG[key] || "").trim();
      if (!value) return; // keep the placeholder text

      var link = document.createElement("a");
      if (key === "email") {
        link.href = "mailto:" + value;
      } else if (key === "phone") {
        link.href = "tel:" + value.replace(/[^+0-9]/g, "");
      } else {
        link.href = value;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      link.textContent = value;
      el.textContent = "";
      el.appendChild(link);
    });
  }

  /* ---------- Theme toggle ---------- */
  function currentTheme() {
    var explicit = document.documentElement.getAttribute("data-theme");
    if (explicit === "light" || explicit === "dark") return explicit;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) { /* storage blocked: keep for this page only */ }
    syncToggle();
  }

  function syncToggle() {
    var button = document.getElementById("theme-toggle");
    if (!button) return;
    var next = currentTheme() === "dark" ? "light" : "dark";
    button.setAttribute("aria-label", "Switch to " + next + " theme");
    button.setAttribute("title", "Switch to " + next + " theme");
  }

  function initTheme() {
    var button = document.getElementById("theme-toggle");
    if (!button) return;
    syncToggle();
    button.addEventListener("click", function () {
      setTheme(currentTheme() === "dark" ? "light" : "dark");
    });
  }

  /* ---------- Header border after scrolling ---------- */
  function initHeaderState() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var update = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  /* ---------- Footer year ---------- */
  function setYear() {
    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  function init() {
    fillContact();
    initTheme();
    initHeaderState();
    setYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
