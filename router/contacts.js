var express = require('express')
var router = express.Router()
const contactCtrl = require('../controllers/contacts')

router.post('/', contactCtrl.create)

router.get('/:id', contactCtrl.findById)

router.get('/', contractCtrl.find) // get all

router.put('/:id', contactCtrl.updateOne)

router.delete('/:id', contactCtrl.deleteOne)


module.exports = router
