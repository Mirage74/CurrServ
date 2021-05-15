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
    console.log("seq param : ", req.params)       
    let seq = await Seq.findOne({ _id: req.params.id })
        .catch(err => {
            const errStr = `err router.get seq by id = ${req.params.id}`
            res.status(400).send(errStr + err)
            console.log(errStr, err)
        })
    let seqCut = {}
    seqCut._id = seq._id
    seqCut.a1_index = seq.a1_index
    seqCut.a1_value = seq.a1_value
    seqCut.a2_index = seq.a2_index
    seqCut.a2_value = seq.a2_value
    seqCut.n_index  = seq.n_index
    res.json({
        seq: seqCut
    })
}
