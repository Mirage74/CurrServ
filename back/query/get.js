const axios = require('axios')
let pathServer = "http://localhost:4000/api/get"

const configAx = {
    "pair": "EURJPY", 
    "rate": "1.5576"
}

let qs = axios.get(
    pathServer,
	configAx
).then(res => {
        console.log(res.data)
    })
