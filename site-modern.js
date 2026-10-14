(function () {
  "use strict";

  const inquiryUrl = "https://automation.detleng.com/#desk";

  function projectLink(label, className) {
    const link = document.createElement("a");
    link.href = inquiryUrl;
    link.target = "_blank";
    link.rel = "noopener";
    link.className = className;
    link.textContent = label;
    return link;
  }

  function modernizeNavigation() {
    document.querySelectorAll(".menu-links").forEach((menu) => {
      menu.querySelectorAll("a").forEach((link) => {
        const label = link.textContent.trim();
        if (label === "Framework") link.textContent = "How We Work";
        if (label === "Policies") link.classList.add("dt-nav-secondary");
        if (label === "Contact") link.classList.add("dt-nav-secondary");
      });

      if (!menu.querySelector(".dt-project-cta")) {
        menu.appendChild(projectLink("Discuss Your Project", "dt-project-cta"));
      }
    });
  }

  function modernizeInquiryLinks() {
    document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
      const text = link.textContent.replace(/\s+/g, " ").trim().toLowerCase();
      const isInquiry =
        link.classList.contains("detleng-sticky-btn") ||
        text.includes("request proposal") ||
        text.includes("consultation") ||
        text === "support";

      if (!isInquiry) return;

      if (link.classList.contains("detleng-sticky-btn")) {
        link.remove();
        return;
      }

      link.href = inquiryUrl;
      link.target = "_blank";
      link.rel = "noopener";
      link.classList.add("dt-solution-cta");
      link.textContent = "Discuss This Solution";
    });
  }

  function modernizePricing() {
    if (!/pricing\.html$/i.test(window.location.pathname)) return;

    document.querySelectorAll(".dt-solution-cta").forEach((link) => {
      if (link.previousElementSibling?.classList.contains("dt-cta-note")) return;
      const note = document.createElement("p");
      note.className = "dt-cta-note";
      note.textContent =
        "Tell us about your current process, the data involved and the result you need. Mention this solution in your description.";
      link.parentNode.insertBefore(note, link);
    });
  }

  function modernizeContactPage() {
    if (!/contact\.html$/i.test(window.location.pathname)) return;
    const content = document.querySelector(".detleng-content");
    if (!content || content.querySelector(".dt-contact-gateway")) return;

    const gateway = document.createElement("section");
    gateway.className = "dt-contact-gateway";
    gateway.innerHTML = `
      <div>
        <span class="dt-eyebrow">START WITH THE WORK</span>
        <h1>Let’s understand what should work better.</h1>
        <p>Tell us what happens today, what should happen instead and how often the work repeats. You do not need a technical brief or a software choice.</p>
        <div class="dt-contact-points">
          <span>✓ No technical brief required</span>
          <span>✓ Secure inquiry delivery</span>
          <span>✓ Confirmation with a reference</span>
        </div>
      </div>
      <div class="dt-contact-action">
        <a class="dt-primary-cta" href="${inquiryUrl}" target="_blank" rel="noopener">Open the Project Inquiry Form <span>↗</span></a>
        <p>Prefer email? <a href="mailto:info@detleng.com">info@detleng.com</a></p>
      </div>`;
    content.prepend(gateway);
  }

  function modernizeFooter() {
    document.querySelectorAll(".detleng-footer-links").forEach((footer) => {
      const list = footer.querySelector("ul");
      if (!list || list.dataset.modernized === "true") return;
      list.dataset.modernized = "true";
      list.innerHTML = `
        <li><a href="https://www.detleng.com/">DeTLeng</a></li>
        <li><a href="https://network.detleng.com/" target="_blank" rel="noopener">DeTLeng Network</a></li>
        <li><a href="https://lfds.detleng.com/" target="_blank" rel="noopener">LFDS</a></li>
        <li><a href="https://automation.detleng.com/" target="_blank" rel="noopener">Automation</a></li>
        <li><a href="https://n8n.detleng.com/" target="_blank" rel="noopener">n8n Learn</a></li>
        <li><a href="https://n8nlab.detleng.com/" target="_blank" rel="noopener">n8n Lab</a></li>
        <li><a href="https://ops.detleng.com/" target="_blank" rel="noopener">DeTLeng Ops</a></li>
        <li><a href="https://insights.detleng.com/" target="_blank" rel="noopener">Insights</a></li>`;
    });
  }

  document.documentElement.classList.add("dt-modern");
  modernizeNavigation();
  modernizeInquiryLinks();
  modernizePricing();
  modernizeContactPage();
  modernizeFooter();
})();
