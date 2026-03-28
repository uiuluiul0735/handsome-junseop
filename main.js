document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeText = document.getElementById('theme-text');
  const currentTheme = localStorage.getItem('theme') || 'light';

  // Apply saved theme on load
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateButtonText(currentTheme);

  themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let newTheme = theme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonText(newTheme);
  });

  function updateButtonText(theme) {
    themeToggle.textContent = theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
    themeText.textContent = `Current theme: ${theme}`;
  }
});
