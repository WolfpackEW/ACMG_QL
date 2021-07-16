**Table of Contents:**

<hr />

# About the starter



Gridsome starter based on the minimal styling.  Content data is imported from Google Sheet using GraphQL. Vuetify CSS framework is used for styling

## Key features

- Built with Vuetify CSS
- Responsive
- GraphQL
- Author pages
- Tags
- Categories
- Dynamic custom pages


## Setup step-by-step guide

1.  Pick a general purpose code editor -- VS Code from Microsoft
1.  Set up a workspace in your home path
1.  Learn some Markdown language to be used for content data page
1.  Use Gridsome as front end static site generator
1.  Use a Gridsome starter kit to set up your project
1.  Learn how Git work, and how it keep track of your change to the data

### Pick a general purpose code editor

I recommend download VS Code from Microsoft

https://code.visualstudio.com/

### Set up a workspace in your home path

Create workspace folder under your home path

```
mkdir workspace

cd workspace
```

## Learn some Markdown language to be used for content data page

You may be familiar with Markdown if you are familar with [Python Jupyter](https://pythonawesome.com/jupyter-notebooks-as-markdown-documents/) notebooks

Learn Markdown in 30 minutes! Watch this https://www.youtube.com/watch?v=bTVIMt3XllM

## Use Gridsome as front end static site generator

Check out Gridsome awesome site feature: https://gridsome.org

### Install Gridsome

Use [YARN](https://yarnpkg.com) to install

```
yarn global add @gridsome/cli
```

### Build your site using the following command


```
cd workspace
gridsome create my-site https://github.com/hisgarden/gridsome-googlesheet

cd my-site

gridsome develop
```
Open your browser and type in:

[http://localhost:8080/](http://localhost:8080)


## Credits

This starter is based on:

[Gridsome Headless CMS Tutorial With Google Sheets](https://www.youtube.com/watch?v=-i6C9GE0oTA)


Happy coding 🎉🙌