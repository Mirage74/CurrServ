const axios = require('axios')
let pathServer = "http://localhost:4000/api/update/"


const configAx = {
    "pair": "EURQQQ", 
    "rate": "100.500"
}

axios.put(
    pathServer,
    configAx
)
    .then(res => {
        console.log(res.data)
    })



