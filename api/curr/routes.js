const Curr = require('./controller ')

module.exports = function (router) {
    router.post('/create', Curr.createCurr);
    router.get('/get', Curr.getCurrs);
    router.get('/get/test/:par', Curr.getCurrsTest);
    router.get('/get/:id100500', Curr.getCurr);
    router.put('/update/:id', Curr.updateCurr);
    router.delete('/remove/:id', Curr.removeCurr);
    //router.put('/update', Curr.removeCurrParam);
}
