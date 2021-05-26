const axios = require('axios')
let pathServer = "http://localhost:4000/api/create/"


const configAx = {
    "pair": "EURQQQ", 
    "rate": "100.500"
}

axios.post(
    pathServer,
    configAx
)
    .then(res => {
        console.log(res.data)
    })



