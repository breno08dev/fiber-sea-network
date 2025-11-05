/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Cor de fundo principal da página
        'base-white': '#FFFFFF',
        // Cor de texto principal (um cinza escuro/preto suave)
        'base-text': '#1f2937', // (Tailwind gray-800)
        // Cor de texto secundária (para parágrafos)
        'base-text-secondary': '#6b7280', // (Tailwind gray-500)

        // Cor clara para fundos de seção (como About e Contact)
        'primary-light': '#EBF8FF', // (Um azul bem claro)

        // Cor escura para botões, ícones e links
        'primary-dark': '#005A9C', // (Um azul corporativo escuro)
        // Cor para o hover do primary-dark
        'primary-dark-hover': '#004A80',

        // Cor de borda padrão para o light-mode
        'border-color': '#E2E8F0', // (Tailwind slate-200)

        // *** NOVO *** - Cor para o plano Premium
        'premium-gold': '#F59E0B', // (Tailwind amber-500)
      },
    },
  },
  plugins: [],
};