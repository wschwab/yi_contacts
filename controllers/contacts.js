const contactsRepo = require('../repositories/contacts')


async function create(req, res, next) {
    try {
        const newContact = await contactsRepo.create(req.body)
        res.status(200).json(newContact)
    } catch (err) {
        console.log(err)
        res.status(500).json({error: "This didn't work"})
    } finally {

    }
}

async function getOne(req, res, next) {
    try {
        const getOneContact = await contactsRepo.getOne(req.body)
    } catch (err) {
        console.log(err)
        res.status(500).json({error: "Get request failed"})
    } finally {

    }
}

async function getAll(req, res, next) {
    try {
        console.log(contactsRepo.getAll)
        const getAllContacts = await contactsRepo.getAll(req.body)
    } catch (err) {
        console.log(err)
        res.status(500).json({error: "Get request failed"})
    } finally {

    }
}

async function updateOne(req, res, next) {
    try {
        const updateContact = await contactsRepo.updateOne(req.body)
    } catch (err) {
        console.log(err)
        res.status(500).json({error: "Put request failed"})
    } finally {

    }
}

async function deleteOne(req, res, next) {
    try {
        const deleteContact = await contactsRepo.deleteOne(req.body)
    } catch (err) {
        console.log(err)
        res.status(500).json({error: "Delete request failed"})
    } finally {

    }
}

module.exports = {create, getOne, getAll, updateOne, deleteOne}
