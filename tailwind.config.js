/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {},
      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out",
        "slide-in-right":
          "slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        fullSpin: "fullSpin 3s linear infinite",
        "scale-in-hor-left":
          "scale-in-hor-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "scale-out-hor-left":
          "scale-out-hor-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
        "flip-in-diag-2-br":
          "flip-in-diag-2-br 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "flip-out-diag-2-br":
          "flip-out-diag-2-br 0.45s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
        "fade-in-fwd":
          "fade-in-fwd 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "fade-out-fwd":
          "fade-out-fwd 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "color-change-5x": "color-change-5x 8s linear  infinite alternate both",
        "scale-up-ver-top":
          "scale-up-ver-top 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "scale-out-ver-top":
          "scale-out-ver-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
        "slide-out-top":
          "slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(1000px)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        fullSpin: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "scale-in-hor-left": {
          "0%": {
            transform: "scaleX(0)",
            "transform-origin": "0% 0%",
            opacity: "1",
          },
          to: {
            transform: "scaleX(1)",
            "transform-origin": "0% 0%",
            opacity: "1",
          },
        },
        "scale-out-hor-left": {
          "0%": {
            transform: "scaleX(1)",
            "transform-origin": "0 0",
            opacity: "1",
          },
          to: {
            transform: "scaleX(0)",
            "transform-origin": "0 0",
            opacity: "1",
          },
        },
        "flip-in-diag-2-br": {
          "0%": {
            transform: "rotate3d(-1, 1, 0, -80deg)",
            opacity: "0",
          },
          to: {
            transform: "rotate3d(1, 1, 0, 0deg)",
            opacity: "1",
          },
        },
        "flip-out-diag-2-br": {
          "0%": {
            transform: "rotate3d(1, 1, 0, 0deg)",
            opacity: "1",
          },
          to: {
            transform: "rotate3d(-1, 1, 0, 70deg)",
            opacity: "0",
          },
        },
        "fade-in-fwd": {
          "0%": {
            transform: "translateZ(-80px)",
            opacity: "0",
          },
          to: {
            transform: "translateZ(0)",
            opacity: "1",
          },
        },
        "fade-out-fwd": {
          "0%": {
            transform: "translateZ(0)",
            opacity: "1",
          },
          to: {
            transform: "translateZ(80px)",
            opacity: "0",
          },
        },
        "color-change-5x": {
          "0%": {
            background: "#19dcea",
          },
          "25%": {
            background: "#b22cff",
          },
          "50%": {
            background: "#ea2222",
          },
          "75%": {
            background: "#f5be10",
          },
          to: {
            background: "#3bd80d",
          },
        },
        "scale-up-ver-top": {
          "0%": {
            transform: "scaleY(.4)",
            "transform-origin": "100% 0%",
          },
          to: {
            transform: "scaleY(1)",
            "transform-origin": "100% 0%",
          },
        },
        "scale-out-ver-top": {
          "0%": {
            transform: "scaleY(1)",
            "transform-origin": "100% 0%",
            opacity: "1",
          },
          to: {
            transform: "scaleY(0)",
            "transform-origin": "100% 0%",
            opacity: "1",
          },
        },
        "slide-out-top": {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          to: {
            transform: "translateY(-1000px)",
            opacity: "0",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ["motion-safe"],
    },
  },
  plugins: [],
};
