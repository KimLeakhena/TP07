const express = require('express')
const fs = require('fs');

const app = express()

app.get('/', function (req, res) {
  fs.readFile('./src/EX03.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.send("There is a server error");
    }
  
    res.send(data);
  });
})


app.get('/detail', function (req, res) {

    fs.readFile('./src/EX03(1).html', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return res.send("There is a server error");
        }
      
        res.send(data);
      });
})

app.listen(3000, () => {
  console.log("The server is running on port 3000");
})