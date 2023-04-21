const express = require('express')
const app = express()
app.use(express.json());
app.use( (request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.post('/dependent', (req,res) => {
    const input = req.body;
    return res.json(input);
})
app.use(function(err, req, res, next) {
    // 'SyntaxError: Unexpected token n in JSON at position 0'
    err.message;
    next(err);
  });
app.listen(process.env.PORT || 3000)