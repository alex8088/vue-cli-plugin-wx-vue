const fs = require('fs')

module.exports = (api, options = {}) => {
  api.extendPackage({
    dependencies: {
      'wx-vue': '^2.0.0'
    }
  })

  api.injectImports(api.entryFile, [
    `import './plugins/wx-vue.js'`
  ])

  api.render({ './src/plugins/wx-vue.js': './template/src/plugins/wx-vue.js' }, {})

  if (options.customTheme) {
    api.render({ './src/styles/wx-theme.css': './template/src/styles/wx-theme.css' }, {})
  }

  if (options.import === 'partial') {
    api.extendPackage({
      devDependencies: {
        'babel-plugin-import': '^1.13.0'
      }
    })
  }

  api.onCreateComplete(() => {
    if (options.import === 'partial') {
      const path = api.resolve('./babel.config.js')
      const config = fs.existsSync(path) ? require(path) : {}

      config.plugins = config.plugins || []

      const babelPluginConfig = ['import', {
        'libraryName': 'wx-vue',
        'style': true
      }]

      config.plugins.push(babelPluginConfig)

      fs.writeFileSync(path, api.genJSConfig(config))
    }
  })
}
