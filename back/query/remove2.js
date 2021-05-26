const axios = require('axios')
let pathServer = "http://localhost:4000/api/remove"

const configAx = {
    "pair": "EURJPY", 
    "rate": "1.5576"
}


axios.delete(
    pathServer,
    configAx 
)
    .then(res => {
        console.log(res.data)
    })

