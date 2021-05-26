const axios = require('axios')
let pathServer = "http://localhost:4000/api/update/60a567218c760e2740d1ea21"


const configAx = {
    "pair": "EURJPY", 
    "rate": "1.5576"
}

axios.put(
    pathServer,
    configAx
)
    .then(res => {
        console.log(res.data)
    })



