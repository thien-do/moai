const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  "stories": [
    "../core/src/**/*.stories.mdx",
    "../core/src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    "storybook-css-modules-preset"
  ],
  "typescript": {
    "reactDocgen": 'react-docgen-typescript',
    "reactDocgenTypescriptOptions": {
      "compilerOptions": {
        "allowSyntheticDefaultImports": false,
        "esModuleInterop": false,
      },
    }
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      // this is for both less and scss
      test: /.*\.(?:le|c|sc)ss$/,
      loaders: [
        'style-loader',
        'css-loader',
        'less-loader', // if scss then add 'sass-loader'
      ]
    });
    config.plugins.push(new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css',
      chunkFilename: '[id]-[contenthash].css',
    }));
    return config;
  },
}
