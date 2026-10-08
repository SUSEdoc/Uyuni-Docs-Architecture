if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('data-theme', 'dark');
  document.documentElement.setAttribute('data-theme-choice', 'dark');
  try {
    window.localStorage.setItem('theme', 'dark');
  } catch {
    // Ignore private-mode storage failures.
  }
}
