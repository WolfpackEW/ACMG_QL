// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Alameda County Master Gardeners at Quarry Lake',
  plugins: [
     {
        use: 'gridsome-source-google-sheets',
        options: {
          sheetId: "1HUB6Z1-BfNtmc-v0jeEjFMrOKuR_Ky_Z8NOWqKF0v7g",// '1K93kOfQSgRlzk8WQGr9D1MMI2w0Fs2E1yZpKffMIuG4',
          apiKey: "AIzaSyCqfZdP590VRm9_03pdPmj1jpHizEORt9o", //'AIzaSyDlt3rs9wo4clM7yrbkqx_azo0JMibvazk',
          // type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
                 
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
