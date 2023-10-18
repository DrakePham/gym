const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3003;
const workoutRouter = require('./components/work_out/entry_points/routers')
const cors = require('cors')

app.use(cors()) // Use this after the variable declaration

// Middleware to parse JSON data
app.use(express.json());
app.use(bodyParser.json());

app.use('/workout', workoutRouter);

app.post('/data',(req, res) =>{
    if(req.body.bodyPart){
        console.log(req.body.bodyPart);
    }else{
        console.log('no data');
    }
    res.send('finish in /data');
});

app.get('/', (req, res) => {

    res.send('Hello, World! Bye Bye');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


