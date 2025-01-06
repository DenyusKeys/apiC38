const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8000;

app.use(cors());


const rappers = {
    '21 Savage': {
    'age': 29,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England' 
    },
    'DeNyusKeys': {
        'age': 32,
        'birthName': 'Homey',
        'birthLocation': 'Honolulu Hawaii'
    },
    'Dylan': {
        'age': 32,
        'birthName': 'CLONE',
        'birthLocation': 'CLONE'
    }


}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html'); //Where the server.js is located, it'll begin looking for the html.
})

app.get('/api/:rapperName', (request, response)=>{ //:rapperName can be grabbed
    
    const rappersName = request.params.rapperName;    //Grab the query parameter from url
    
    if(rappers[rappersName]){                         //If the rapper exists in the list, it'll respond with the info
        response.json(rappers[rappersName]);
    } else { 
        response.json(rappers['Dylan']);
    }
})






app.listen(PORT, ()=>{
    console.log(`Server is running on Port: ${PORT}`);
});