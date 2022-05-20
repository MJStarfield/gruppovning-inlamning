const rimraf = require('rimraf')

rimraf('dist/*', {
  glob: {
    ignore: 'dist/.git/'
  }
}, () => {})
