module.exports = {
    // Other webpack configuration settings...
  
    module: {
      rules: [
        // Other rules...
  
        {
          test: /\.pdf$/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/pdf/[name][ext]',
          },
        },
      ],
    },
  };
  