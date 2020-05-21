var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var apiRouter = require('./routes/apiRouter')
var app = express()

app.set('views', path.join(__dirname+'/views'))
app.set('view engine' , 'ejs')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/', apiRouter )
//app.use('/', (req, res)=>{
//    res.send("hello")
//   })

//  get방식으로 라우팅(중계) 처리했다고 표현함
//  app.get('/', function(request,response){ 
//  console.log(request)
//  response.render('index')
//   })
//app.listen(포트, url, backlog, callback)
app.listen(8080, function (){
    console.log("server is starting at http://localhost:8080")
} )