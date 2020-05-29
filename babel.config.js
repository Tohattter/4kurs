module.exports = {
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      corejs: 3,
      loose: true
     
    }],
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],

  plugins: ["@babel/plugin-proposal-class-properties"]
}