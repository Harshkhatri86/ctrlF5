

import express from 'express';
import path from 'path';
// import dotenv from 'dotenv';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import App from '../src/App';

// dotenv.config();

const PORT =  3006;
const app = express();


app.get('^/$', (req, res) => {
    // const appHtml = ReactDOMServer.renderToString(React.createElement(App));

    const indexFile = path.resolve('./build/index.html');
  
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
  
      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${ ReactDOMServer.renderToString(<App/>)}</div>`)
      );
    });
});

app.use(express.static(path.resolve(__dirname, '..' ,'build' )))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
