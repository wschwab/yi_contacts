const mongoose = require('mongoose')
const Contacts = mongoose.model('Contact')

async function create(body) {
    console.log("From repo")
    return Contacts.create(body).catch(err => {throw err})
}

// put more functions following above func that correspond to api calls in router/contacts

// usually call delete duncs 'del' or the like since delete is reserved

module.exports = {
    create,
}
