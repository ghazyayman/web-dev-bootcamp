const express = require('express');
const app = express();

const port = 3000

app.get('/', function(request, response){
    response.send("<h1>Hello World</h1>");
});

app.listen(3000, function(){
    console.log('Server is running on port 3000');
});
