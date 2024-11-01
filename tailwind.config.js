/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        principal:['Roboto',  ...defaultTheme.fontFamily.sans]
      },
      colors: {
        // color light
        'cor-destaque': '#FFB568',
        'cor-btn': '#2B2B2B',
        'cor-action': '#363636',
        'cor-titulo': '#2E2E2E',
        'text-color': '#595959',
        'text-color-lg': '#8C8C8C',
        'cor-body': '#FCFCFC',
        'container-cor': '#FFFFFF',
        'border-cor': '#F0F0F0',
        // color dark
        'dk-cor-destaque':'#EFBE8A',
        'dk-cor-action': '#3D3D3D',
        'dk-cor-action-alt': '#474747',
        'dk-cor-titulo': '#F2F2F2',
        'dk-text-color': '#BFBFBF',
        'dk': '#8C8C8C',
        'dk-cor-body': '#1F1F1F',
        'dk-container-cor': '#292929',
        'dk-border-cor': '#333333'
      }
    },
  },
  plugins: [],
}

