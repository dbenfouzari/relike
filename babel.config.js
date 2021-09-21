module.exports = {
  plugins: ["styled-jsx/babel"],
  presets: [
    [
      "@babel/env",
      {
        targets: {
          esmodules: true,
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
};
