const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require(`body-parser`);

app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, function(error)  {
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

// installation
// npm i mongoose body-parser express 
