const Curr = require('./model')



exports.getCurrs = async (req, res, next) => {
    let currs = await Curr.find()
        .catch(err => {
            res.status(400).send("err router.get " + err)
            console.log("err router.get ", err)
        })

    // let oneObj = {}    
    // let resAr = []
    // for (let i = 0; i < currs.length; i++) {
    //     oneObj = {}    
    //     oneObj.id = currs._id
    //     oneObj.pair = currs.pair
    //     oneObj.rate = currs.rate
    //     resAr.push(oneObj)
    // }


    res.json({
        currs: currs
    })
}



exports.getCurr = async (req, res, next) => {
    let curr = await Curr.findOne({ _id: req.params.id })
        .catch(err => {
            const errStr = `err router.get curr by id = ${req.params.id}`
            res.status(400).send(errStr + err)
            console.log(errStr, err)
        })
    let oneObj = {}
    oneObj.id = curr._id
    oneObj.pair = curr.pair
    oneObj.rate = curr.rate
    res.json({
        currs: oneObj
    })
}

exports.createCurr = function (req, res, next) {
    console.log("req.params : ", req.params)
    console.log("req.body : ", req.body)
    const curr = {
        pair: req.body.pair,
        rate: req.body.rate,
    }
    console.log(curr)
    console.log(req.body)
    Curr.create(curr, function (err, curr) {
        if (err) {
            res.json({
                error: err
            })
        }
        res.json({
            message: "Curr created successfully"
        })
    })
}

exports.updateCurr = async (req, res, next) => {
    // console.log("params update :", req.params.id)
    // console.log("params body :", req.body)
    const curr = {
        id: req.params.id,
        pair: req.body.pair,
        rate: req.body.rate
    }
    await Curr.updateOne({ _id: curr.id }, curr)
        .catch(err => {
            const errStr = `err router.update curr by id = ${curr.id}`
            res.status(400).send(errStr + err)
            console.log(errStr, err)
        })
    res.json({
        message: `Curr id = ${curr.id} updated successfully`
    })
}

exports.removeCurr = async (req, res, next) => {
    console.log("req.params : ", req.params)
    console.log("req.body : ", req.body)

    await Curr.deleteOne({ _id: req.params.id })
        .catch(err => {
            const errStr = `err router.delete curr by id = ${req.params.id}`
            res.status(400).send(errStr + err)
            console.log(errStr, err)
        })
    res.json({
        message: `Curr id = ${req.params.id} deleted successfully`
    })
}



exports.getCurrsTest = async (req, res, next) => {
    console.log("req.params : ", req.params)
    console.log("req.body : ", req.body)
    //console.log("req : ", req)
    res.json({
        message: `test`
    })

}