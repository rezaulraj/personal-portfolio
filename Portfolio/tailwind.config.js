module.exports = {
  theme: {
    extend: {
      keyframes: {
        ripple: {
          "0%": {
            transform: "scale(0)",
            opacity: "0.4",
          },
          "100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
      },
      animation: {
        ripple: "ripple 1s linear",
      },
    },
  },
  plugins: [],
};
