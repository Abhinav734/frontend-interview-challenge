#!/usr/bin/env node


const data = require('./data.json');
const express = require('express');
const port = 8080
const app = express();
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.get('/data', (req, res) => {
  res.send(JSON.stringify(data))
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
