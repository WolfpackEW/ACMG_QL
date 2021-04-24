// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Natives',
  plugins: [
     {
        use: 'gridsome-source-google-sheets',
        options: {
          sheetId: "1j9lzemspeD8r3Z7gWJWlCsp04_m6-iDU3b7k19yCJX0",// '1K93kOfQSgRlzk8WQGr9D1MMI2w0Fs2E1yZpKffMIuG4',
          apiKey: "AIzaSyCrVgZ14AUMDNpGHdMu_ZvVCfrYDmlLHvo", //'AIzaSyDlt3rs9wo4clM7yrbkqx_azo0JMibvazk',
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
