const express = require('express');
var cors = require('cors')
const app = express();
const { sequelize } = require('./Schema');
 const { router } = require('./routes/movies.router');
app.use(express.json())

app.use(cors())

app.get('/', (req, res)=>{
    res.send({msg:"This is the home page"});
})

app.use('/movie', router);

const port = 8000

sequelize.sync().then(()=>{
    console.log('Mysql database is connected');
    app.listen(port, ()=>{
        console.log(`Listening on port ${port}`);
    })
}).catch((err)=>{
    console.log(err);
})