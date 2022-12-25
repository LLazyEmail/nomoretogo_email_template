module.exports = {
    "env": {
      "test": {
        "plugins": ["@babel/plugin-transform-modules-commonjs"]
      }
    },
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "node": true
          }
        }
      ]
    ]
  }
  
  
  
  
  // "babel-preset-react-app": "10.0.1",