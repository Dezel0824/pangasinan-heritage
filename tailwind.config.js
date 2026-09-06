/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: { extend: { colors: { ocean: '#0B4F71', sky: '#2E8BB8', gold: '#D9A441', ink: '#172033', mist: '#F5F8FA', leaf: '#3C7A57' }, fontFamily: { sans: ['var(--font-manrope)', 'Arial', 'sans-serif'], display: ['var(--font-playfair)', 'Georgia', 'serif'] }, boxShadow: { float: '0 16px 45px rgba(11,79,113,.16)' } } },
  plugins: []
};
