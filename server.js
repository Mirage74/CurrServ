const express = require('express')
const log = require('morgan')('dev')
const favicon = require('express-favicon')
const bodyParser = require('body-parser')
require('./config/mongoose')
require('./api/curr/model')
const seqRoutes = require('./api/curr/routes')

const app = express()
app.use(favicon(__dirname + '/public/favicon.ico'))
const bodyParserJSON = bodyParser.json()
const bodyParserURLEncoded = bodyParser.urlencoded({extended:true})
const router = express.Router()

app.use(express.static('public'))
app.use(favicon(__dirname + '/public/favicon.ico'))
app.use(log)
//app.use(bodyParser)
app.use(bodyParserJSON)
app.use(bodyParserURLEncoded)

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded






app.use(function(req, res, next) {
  //console.log("req ", req.rawHeaders)
  res.setHeader("Access-Control-Allow-Origin", "*")
   res.setHeader("Access-Control-Allow-Credentials", "true")
   res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE")
   res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization")
 next()
});


app.use('/api', router)
seqRoutes(router)


app.listen(process.env.PORT || 4000)

