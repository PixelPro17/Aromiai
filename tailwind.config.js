export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6', // Soft White as base
        primary: {
          DEFAULT: '#CDB4DB', // Lavender
          hover: '#9D4EDD',   // Light Plum
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#FFC8DD', // Baby Pink
          hover: '#F8C8DC',   // Blush Pink
          foreground: '#831843',
        },
        accent: {
          DEFAULT: '#EED6C4', // Warm Beige
          foreground: '#B08968', // Muted Brown (corrected hex)
        },
        wellness: {
          leaf: '#A7F3D0',
          ocean: '#BAE6FD',
        },
        // Custom palette
        lavender: '#CDB4DB',
        babyPink: '#FFC8DD',
        softWhite: '#FAF9F6',
        lightPlum: '#9D4EDD',
        mistGrey: '#E0E0E0',
        blushPink: '#F8C8DC',
        softCream: '#FFF6E9',
        dustyRose: '#E8A0BF',
        warmBeige: '#EED6C4',
        mutedBrown: '#B08968', // Corrected from #B0896 to 6 digits
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        }
      },
    },
  },
  plugins: [],
}
