(() => {
  const copyButton = document.querySelector("[data-copy-bibtex]");
  const bibtex = document.getElementById("bibtex-code");

  if (copyButton && bibtex) {
    copyButton.addEventListener("click", async () => {
      const label = copyButton.querySelector(".copy-state");
      const text = bibtex.textContent;

      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.setAttribute("readonly", "");
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }

      label.textContent = "Copied";
      copyButton.dataset.copied = "true";
      window.setTimeout(() => {
        label.textContent = "Copy citation";
        delete copyButton.dataset.copied;
      }, 1800);
    });
  }

  const carousel = document.querySelector(".figure-carousel");
  const slides = Array.from(document.querySelectorAll(".carousel-slide"));
  const dots = Array.from(document.querySelectorAll(".carousel-dot"));
  let activeSlide = 0;
  let touchStartX = null;

  const showSlide = (index) => {
    if (!slides.length) return;
    activeSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeSlide;
      slide.hidden = !isActive;
      slide.classList.toggle("is-active", isActive);
    });

    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === activeSlide;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-selected", String(isActive));
      dot.tabIndex = isActive ? 0 : -1;
    });
  };

  document.querySelectorAll(".carousel-arrow").forEach((button) => {
    button.addEventListener("click", () => {
      showSlide(activeSlide + Number(button.dataset.direction));
    });
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => showSlide(Number(dot.dataset.target)));
  });

  if (carousel) {
    carousel.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        showSlide(activeSlide - 1);
      }
      if (event.key === "ArrowRight") {
        showSlide(activeSlide + 1);
      }
    });

    carousel.addEventListener("touchstart", (event) => {
      touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });

    carousel.addEventListener("touchend", (event) => {
      if (touchStartX === null) return;
      const delta = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(delta) > 48) {
        showSlide(activeSlide + (delta < 0 ? 1 : -1));
      }
      touchStartX = null;
    }, { passive: true });
  }

  const moreWorks = document.querySelector(".more-works");
  const moreWorksButton = document.querySelector(".more-works-button");
  const moreWorksPanel = document.getElementById("more-works-panel");

  const closeMoreWorks = () => {
    if (!moreWorksButton || !moreWorksPanel) return;
    moreWorksButton.setAttribute("aria-expanded", "false");
    moreWorksPanel.hidden = true;
  };

  if (moreWorksButton && moreWorksPanel) {
    moreWorksButton.addEventListener("click", () => {
      const willOpen = moreWorksButton.getAttribute("aria-expanded") !== "true";
      moreWorksButton.setAttribute("aria-expanded", String(willOpen));
      moreWorksPanel.hidden = !willOpen;
    });

    document.addEventListener("click", (event) => {
      if (moreWorks && !moreWorks.contains(event.target)) {
        closeMoreWorks();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMoreWorks();
        moreWorksButton.focus();
      }
    });
  }

  const scrollTopButton = document.querySelector(".scroll-top");
  if (scrollTopButton) {
    const updateScrollTop = () => {
      scrollTopButton.classList.toggle("is-visible", window.scrollY > 480);
    };

    window.addEventListener("scroll", updateScrollTop, { passive: true });
    updateScrollTop();

    scrollTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
