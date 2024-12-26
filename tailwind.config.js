import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'playWrite': ['Playwrite CO Guides'],
      'NunitoSans': ['Nunito Sans'],
      'Handlee':['Handlee'],
     

    },


    extend: {
      backgroundImage: {
        'slider1': "url('/src/assets/bgImages/165263.jpg')",
        'slider2': "url('/src/assets/bgImages/3014596.jpg')",
        'slider3': "url('/src/assets/bgImages/4117465.jpg')",
        'slider4': "url('/src/assets/bgImages/7066805.jpg')",
        'slider5': "url('/src/assets/bgImages/7066809.jpg')",
        'slider6': "url('/src/assets/bgImages/7066826.jpg')",
        'slider7': "url('/src/assets/bgImages/7066857.jpg')",
        'slider8': "url('/src/assets/bgImages/7066860.jpg')",
        'slider9': "url('/src/assets/bgImages/images (25).jpg')",
        'allfoodsbg': "url('/src/assets/bgImages/image.restaurant_brochure_hero.1734439500886.jpg')",
        'gallarybg': "url('/src/assets/bgImages/images (26).jpg')",
       
      }
    },
  },
  plugins: [daisyui],
}

