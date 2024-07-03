const { override } = require('customize-cra')

const overrideEntry = (config) => {
  config.entry = {
    main: './src/popup', // the extension UI
    background: './src/background',
    content: './src/content',
  }

  return config
}

const overrideOutput = (config) => {
  config.output = {
    ...config.output,
    filename: 'static/js/[name].js', // Use [name] to generate unique filenames for main bundles
    chunkFilename: 'static/js/[name].[chunkhash].js', // Use [name] and [chunkhash] for unique chunk filenames
  };

  return config
}

module.exports = {
  webpack: (config) => override(overrideEntry, overrideOutput)(config),
}