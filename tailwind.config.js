/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: [
    {
      mytheme: {
      
"primary": "#afffb5",
      
"secondary": "#166e8c",
      
"accent": "#4a86bf",
      
"neutral": "#141924",
      
"base-100": "#2F3551",
      
"info": "#2D9CE6",
      
"success": "#1FA35A",
      
"warning": "#CC710F",
      
"error": "#FB3239",
      },
    },
  ],
  plugins: [require("daisyui")],
}