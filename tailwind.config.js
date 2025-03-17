/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif', 'Archivo'],
      },
    },
  },
  plugins: [],
};
// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         'A3C3BC': '#A3C3BC',
//         '8CBEB7': '#8CBEB7',
//         '061611': '#061611',
//         '0A1F1A': '#0A1F1A'
//       },
//       borderRadius: {
//         'custom': '20px 40px 60px 80px'
//       }
//     }
//   }
// }
// module.exports = {
//   theme: {
//     extend: {
//       borderRadius: {
//         '26': '26px',
//       },
//       colors: {
//         'border-green': '#41B883',
//       }
//     }
//   }
// }
// module.exports = {
//   theme: {
//     extend: {
//       borderRadius: {
//         'mixed-vision': '30px 60px 30px 60px',
//       },
//       colors: {
//         'vision-blue': '#2563eb',
//       }
//     }
//   }
// }

