'use strict'

const app = require('./app');
const port = 80;

//Deploy on Port
app.listen (port, () => {
     console.log("Listening on port " + port);
   });
