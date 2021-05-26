const axios = require('axios')
let pathServer = "http://localhost:4000/api/remove/60a3b4557e1e9a12b0f69584"

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

