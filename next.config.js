const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const path = require('path')

module.exports =withCss( withSass({
    images: {
        domains: ["res.cloudinary.com"],
    },
//   webpack: config => {
//     config.module.rules.forEach(rule => {
//       if (rule.test.toString().includes('.scss')) {
//         rule.rules = rule.use.map(useRule => {
//           if (typeof useRule === 'string') {
//             return { loader: useRule };
//           }
//           if (useRule.loader === 'css-loader') {
//             return {
//               oneOf: [
//                 {
//                   test: new RegExp('.global.scss$'),
//                   loader: useRule.loader,
//                   options: {},
//                 },
//                 {
//                   loader: useRule.loader,
//                   options: { modules: true }
//                 },
//               ],
//             };
//           }
//           return useRule;
//         });
//         delete rule.use;
//       }
//     });
//    return config;
//  },
}));