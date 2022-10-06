const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Frontend',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/asritakuchibhotla/CSC510_43_Project1/frontend/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Frontend',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/asritakuchibhotla/CSC510_43_Project1/frontend',
          templates:
            '/Users/asritakuchibhotla/CSC510_43_Project1/frontend/node_modules/docz-core/dist/templates',
          docz: '/Users/asritakuchibhotla/CSC510_43_Project1/frontend/.docz',
          cache:
            '/Users/asritakuchibhotla/CSC510_43_Project1/frontend/.docz/.cache',
          app: '/Users/asritakuchibhotla/CSC510_43_Project1/frontend/.docz/app',
          appPackageJson:
            '/Users/asritakuchibhotla/CSC510_43_Project1/frontend/package.json',
          appTsConfig:
            '/Users/asritakuchibhotla/CSC510_43_Project1/frontend/tsconfig.json',
          gatsbyConfig:
            '/Users/asritakuchibhotla/CSC510_43_Project1/frontend/gatsby-config.js',
          gatsbyBrowser:
            '/Users/asritakuchibhotla/CSC510_43_Project1/frontend/gatsby-browser.js',
          gatsbyNode:
            '/Users/asritakuchibhotla/CSC510_43_Project1/frontend/gatsby-node.js',
          gatsbySSR:
            '/Users/asritakuchibhotla/CSC510_43_Project1/frontend/gatsby-ssr.js',
          importsJs:
            '/Users/asritakuchibhotla/CSC510_43_Project1/frontend/.docz/app/imports.js',
          rootJs:
            '/Users/asritakuchibhotla/CSC510_43_Project1/frontend/.docz/app/root.jsx',
          indexJs:
            '/Users/asritakuchibhotla/CSC510_43_Project1/frontend/.docz/app/index.jsx',
          indexHtml:
            '/Users/asritakuchibhotla/CSC510_43_Project1/frontend/.docz/app/index.html',
          db:
            '/Users/asritakuchibhotla/CSC510_43_Project1/frontend/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
