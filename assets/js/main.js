/* ============================================================
   Zero-Perspective-Book · 交互脚本
   - 浅色/深色模式(羊皮纸 ↔ 夜读)
   - 平滑滚动锚点
   ============================================================ */

(function () {
  'use strict';

  const THEME_KEY = 'zero-perspective-book-theme';

  function getStoredTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  }
  function storeTheme(t) {
    try { localStorage.setItem(THEME_KEY, t); } catch (e) {}
  }
  function systemPrefers() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'parchment';
  }
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
  }
  function updateThemeIcon(theme) {
    const btn = document.getElementById('bkThemeToggle');
    if (!btn) return;
    const isNight = theme === 'night';
    btn.setAttribute('aria-label', isNight ? '切换为日间(羊皮纸)' : '切换为夜读');
    btn.setAttribute('title',    isNight ? '切换为日间(羊皮纸)' : '切换为夜读');
    btn.textContent = isNight ? '☀' : '☾';
  }

  let current = getStoredTheme() || systemPrefers();
  applyTheme(current);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!getStoredTheme()) {
      current = e.matches ? 'night' : 'parchment';
      applyTheme(current);
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('bkThemeToggle');
    if (btn) {
      btn.addEventListener('click', () => {
        current = current === 'night' ? 'parchment' : 'night';
        storeTheme(current);
        applyTheme(current);
      });
    }
  });

  // 平滑滚动锚点
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    if (id === '#' || id.length < 2) return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
})();
