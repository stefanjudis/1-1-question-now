const QUESTIONS = require('../data/questions.json');

module.exports = (req, res) => {
  const question = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];

  return res.status(200).send(`
    <!doctype html>
    <html class="no-js" lang="">

    <head>
      <meta charset="utf-8">
      <title></title>
      <meta name="description" content="The next question in your 1:1">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <style>
        body, html {
          height: 100%;
          margin: 0;
        }

        body {
          position: relative;
          display: grid;
          text-align: center;
          place-items: center;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
          "Droid Sans", "Helvetica Neue", sans-serif;;
          padding: 2em;
          font-size: 100%;
          background: #eeeeee;
          color: #393e46;
        }

        *, *::before, *::after {
          box-sizing: border-box;
        }

        h1 {
          font-size: 2em;
        }

        h2 {
          font-size: 2.5em;
          color: #222831;
        }

        @media (min-width: 35em) {
          h2 {
            font-size: 4em;
          }
        }

        .github-corner {
          position: absolute;
          top: 0;
          right: 0;
        }

        .btn {
          background: #00adb5;
          color: #eeeeee;
          padding: .75em 1em;
          margin: .5em;
          display: inline-block;
          text-decoration: none;
          box-shadow: 0 .25em .25em #dddddd;
          border-radius: 2px;
        }
      </style>
    </head>

    <body>
      <a href="https://github.com/stefanjudis/1-1-question-now" class="github-corner" aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>
      <div>
        <h1>1:1 Question Now</h1>
        <p>Ask a different question in every meeting</p>
        <h2>${question}</h2>
        <div class="">
          <a class="btn" href="https://github.com/stefanjudis/1-1-question-now#contributing">Add more questions</a>
          <a class="btn" href="https://github.com/stefanjudis/1-1-question-now/issues">Give feedback</a>
        </div>
      </div>
    </body>
    </html>
  `);
};
