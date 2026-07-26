import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";
import "./style.css";

// Initialize Vercel Analytics & Speed Insights
inject({
  mode: import.meta.env.DEV ? "development" : "production",
});
injectSpeedInsights({
  debug: import.meta.env.DEV,
});

const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

/* Smooth in-page anchors */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", id);
  });
});
