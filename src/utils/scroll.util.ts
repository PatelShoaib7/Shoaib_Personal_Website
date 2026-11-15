const STICKY_HEADER_OFFSET = 84;
const HIGHLIGHT_CLASS = 'section-arrival-pulse';

export function scrollToSectionSmoothly(href: string): void {
  if (typeof window === 'undefined' || !href.startsWith('#')) {
    return;
  }

  if (href === '#top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const targetId = href.slice(1);
  const targetElement = document.getElementById(targetId);

  if (!targetElement) {
    return;
  }

  const elementTop =
    targetElement.getBoundingClientRect().top +
    window.scrollY -
    STICKY_HEADER_OFFSET;

  window.scrollTo({
    top: Math.max(0, elementTop),
    behavior: 'smooth',
  });

  targetElement.classList.remove(HIGHLIGHT_CLASS);
  // Trigger reflow so repeated clicks replay the subtle arrival pulse
  void targetElement.offsetWidth;
  targetElement.classList.add(HIGHLIGHT_CLASS);

  window.setTimeout(() => {
    targetElement.classList.remove(HIGHLIGHT_CLASS);
  }, 900);
}
