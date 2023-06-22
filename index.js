const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chef  = require('./data/chef.json')
const recepies = require('./data/recepies.json')

app.use(cors());

app.get('/', (req, res)=>{
    res.send('classic is running')
});

app.get('/chef', (req, res)=>{
    res.send(chef)
})


app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedChief = chef.find(c => c.id == id)
    res.send(selectedChief)


})


app.get('/recepies', (req, res)=>{
    res.send(recepies)
})


app.get('/recepies/:chef_id', (req, res)=>{
    const id = parseInt(req.params.chef_id)
    const recepiesData = recepies.find(recepie => parseInt(recepie.chef_id)===id)
   res.send(recepiesData)
})



app.listen(port, () =>{
    console.log(`classic project API is runnig: ${port}}`);
})