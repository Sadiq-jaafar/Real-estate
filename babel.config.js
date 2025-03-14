// const { plugin } = require("postcss");

// module.exports = function (api) {
//     api.cache(true);
//     return {
//       presets: [
//         ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      
//       ],
//        plugins:[ "nativewind/babel"],
//     };
//   };
module.exports = function (api) {
  api.cache(true); // Cache the configuration for better performance

  return {
    presets: ['babel-preset-expo'], // Use Expo's Babel preset
    plugins: [
      // Add any additional plugins here
      'react-native-reanimated/plugin', // Example: Reanimated plugin
    ],
  };
};
