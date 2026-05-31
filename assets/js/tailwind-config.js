/* ----------------------------------------------------------------
 * Shared Tailwind theme.
 * Load this AFTER the tailwindcss CDN script and BEFORE any other JS.
 * ---------------------------------------------------------------- */
tailwind.config = {
    theme: {
        extend: {
            fontFamily: { sans: ['"Noto Sans TC"', 'sans-serif'] },
            colors: {
                ems: {
                    navy:   '#1e293b',
                    blue:   '#0284c7',
                    light:  '#f8fafc',
                    orange: '#ea580c',
                    gray:   '#64748b',
                    danger: '#dc2626'
                }
            }
        }
    }
};
