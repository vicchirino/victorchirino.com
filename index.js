
const express = require("express");
const bodyParser = require('body-parser');

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/public/views');
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.get ('*', function (req, res){
  res.render(`${__dirname}/src/index.html`);    
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})