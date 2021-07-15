// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Master Gardeners of Alameda County at Quarry Lakes',
  plugins: [
     {
        use: 'gridsome-source-google-sheets',
        options: {
          sheetId: "1HUB6Z1-BfNtmc-v0jeEjFMrOKuR_Ky_Z8NOWqKF0v7g",
          apiKey: "AIzaSyCqfZdP590VRm9_03pdPmj1jpHizEORt9o",     
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
