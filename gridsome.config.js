// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Quarry Lakes Demonstration Garden',
  siteDescription: 'The Quarry Lakes Demonstration Garden in Fremont is situated within the East Bay Regional Park’s (EBRP) beautiful water-oriented recreation area. Its 450 acres includes several ponds, a swimming beach, fishing areas, picnic areas, boating, volleyball courts, hiking trails, and a rare fruit orchard. Quarry Lakes has something for everyone. And if that isn’t enough, you can just sit in the Demonstration Garden and do nothing but enjoy the fabulous views of Mission Peak, the East Bay hills, the Livermore hills, and various wildlife.',
  plugins: [
    {
      use: 'gridsome-source-google-sheets-v2',
      options: {
        apiKey: process.env.GOOGLE_API_KEY, //'GOOGLE_API_KEY',
        spreadsheets: [
          {
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            sheets: [
              {
                sheetName: 'WebSiteList', // Example: "Sheet1" "QL_Plants"
                collectionName: 'googleSheet', // Example: "Projects" (Must be unique)
              },
              //{
              //  sheetName: 'Natives', // Example: "Sheet2"
              //  collectionName: "googleSheet", // Example: "Users" (Must be Unique)
              //},
            ],
          },
        ],
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'articles/**/*.md',
        typeName: 'Article',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        'typeName' : 'googleSheet',
        'sourceField': 'remoteImage',
        'targetField': 'imageDownloaded',
        'targetPath': './src/assets/remoteImages'
      }
    },
    {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        'typeName' : 'googleSheet',
        'sourceField': 'remoteImages',
        'targetField': 'imagesDownloaded',
        'targetPath': './src/assets/remoteImages'
      }
    }
  ],
  templates: {
    googleSheet: [
      {
        path: '/:ID',
        component: './src/templates/googleSheet.vue',
      },
    ],
  },
  transformers: {
    remark: {
      plugins: ['@gridsome/remark-prismjs'],
    },
  },
}
