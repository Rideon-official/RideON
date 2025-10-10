import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rideblue: "#3D7FFF",
        rideblack: "#0F0F0F",
        rideorange: "#FF8C42"
      },
      borderRadius: {
        "xl2": "1rem"
      }
    }
  },
  plugins: []
};
export default config;
