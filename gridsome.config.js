// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'UC Master Gardener Program of Alameda County',
  plugins: [
     {
        use: 'gridsome-source-google-sheets',
        options: {
          sheetId: process.env.GOOGLE_SHEET_ID,
          apiKey: process.env.GOOGLE_API_KEY, //'GOOGLE_API_KEY',
        }
      }
    ],
    templates: {
      googleSheet: [
        {
          path: '/:ID',
          component: './src/templates/googleSheet.vue'
        }
      ]
    }
    
}
