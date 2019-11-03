const mongoose = require('mongoose')
const Contacts = mongoose.model('Contact')

async function create(body) {
    return Contacts.create(body).catch(err => {throw err})
}

async function getOne(body) {
    return Contacts.findOne(body).catch(err => {throw err})
}

async function getAll() {
    return Contacts.find().catch(err => {throw err})
}

async function updateOne(body) {
    return Contacts.updateOne(body).catch(err => {throw err})
}

async function deleteOne(body) {
    return Contacts.deleteOne(body).catch(err => {throw err})
}


module.exports = {
    create, getOne, getAll, updateOne, deleteOne
}
