function getCurrentTheme() {
    return localStorage.getItem('theme');
}
const toggleDarkModeButton = document.getElementById('toggleDarkMode');

toggleDarkModeButton?.addEventListener('click', () => {
    const toggleDarkModeEvent = new CustomEvent('theme-change', {
        detail: { theme: getCurrentTheme() === 'light' ? 'dark' : 'light' }
    });
    document.dispatchEvent(toggleDarkModeEvent);
});