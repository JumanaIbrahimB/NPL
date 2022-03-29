This is the fourth project in Udacity front end development course, it is about Evaluate a News Article with Natural Language Processing

We will build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

we will use Aylien to interact with their NLP system. This tool will help us classify the information available in the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

The project structure
.vscode
   settings.json
dist
    index.html
    main.css
    main.js
    main.js.map
node_modules
src
    client
      js
         formHandler.js
         nameChecker.js
      styles
         base.scss
         footer.scss
         form.scss
         header.scss
         main.scss
         resets.scss
      test
         handleSubmit.test.js 
         nameChecker.test.js
      views
       index.html 
      index.js   
    server
      .env
      index.js
      mockAPI.js
.babelrc
.gitignore
package-lock.json
package.json
README.md
webpack.dev.js
webpack.prod.js 