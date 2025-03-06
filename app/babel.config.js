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
    api.cache(true);
    return {
        presets: [
            ["babel-preset-expo", { jsxImportSource: "nativewind" }]
        ],
        plugins: [
            require.resolve("nativewind/babel") // ✅ Correct way
        ]
    };
};
