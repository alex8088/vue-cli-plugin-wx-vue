module.exports = [
  {
    type: 'list',
    name: 'import',
    message: 'How do you want to import wx-vue: (Use arrow keys)',
    choices: [
      {
        name: "Fully import",
        value: "full"
      },
      {
        name: "Import on demand",
        value: "partial"
      }
    ],
    default: "full"
  },
  {
    type: 'confirm',
    name: 'customTheme',
    message: 'Do you wish to custom theme',
    default: false
  }
]