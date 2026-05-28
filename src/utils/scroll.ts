/**
 * Custom robust smooth scroll utility using requestAnimationFrame
 * and quadratic in-out easing.
 */

export const ease = (t: number, b: number, c: number, d: number): number => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

export const scrollTo = (targetPosition: number, duration: number = 1000): void => {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let start: number | null = null;

  const animation = (currentTime: number) => {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};

export const scrollToId = (id: string, offset: number = 120): void => {
  const target = document.getElementById(id);
  if (!target) return;
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
  scrollTo(targetPosition);
};
