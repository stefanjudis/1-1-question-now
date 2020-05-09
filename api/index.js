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
        }

        body {
          display: grid;
          place-items: center;
          font-family: sans-serif;
        }
      </style>
    </head>

    <body>
      <h1>${question}</h1>
    </body>
    </html>
  `);
};
