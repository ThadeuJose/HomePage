let express = require('express');
let path = require('path');
let app = express();
let env = require('dotenv').config();

const PORT = process.env.PORT;

app.set('views','./views');
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
  res.render('index'); 
}); 

app.listen(PORT);
console.log('Homepage running at http://localhost:'+PORT+'/');


