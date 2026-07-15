/**
 * Resolves a public asset path using Vite's BASE_URL.
 * This ensures assets load correctly on GitHub Pages subpaths.
 * @param {string} path - Path relative to the public folder (e.g. "/images/bg.png")
 * @returns {string} Full path prefixed with the base URL
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const assetPath = (path) => `${base}${path}`;
