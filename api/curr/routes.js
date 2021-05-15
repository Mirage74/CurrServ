const Curr= require ('./controller ')

module.exports = function(router) {
//    router.post('/create', Seq.createSeq);
    router.get('/get', Curr.getCurrs);
    router.get('/get/:id', Curr.getCurr;
    //router.put('/update/:id', Seq.updateSeq);
    //router.delete('/remove/:id', Seq.removeSeq);
}
