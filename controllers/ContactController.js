const ContactModel = require('../models/ContactModel');

const create = (req, res) => {
    const { firstName, lastName, email } = req.body;

    const contact = new ContactModel({ firstName, lastName, email });

    contact.save()
        .then(result => {
            res.json({ success: true, result });
        })
        .catch(err => {
            res.json({ success: false, result: err.message });
        });
};

const update = (req, res) => {
    const { id, firstName, lastName, email } = req.body;

    ContactModel.updateOne({ _id: id }, { firstName, lastName, email })
        .then(result => {
            const success = Boolean(result.n && result.nModified && result.ok);

            res.json({ success, result });
        })
        .catch(err => {
            res.json({ success: false, result: err.message });
        });
};

const retrieveAll = (req, res) => {
    ContactModel.find()
        .then(result => {
            res.json({ success: true, result });
        })
        .catch(err => {
            res.json({ success: false, result: err.message });
        });
};

const retrieve = (req, res) => {
    const { id } = req.params;

    ContactModel.findOne({ _id: id })
        .then(result => {
            res.json({ success: true, result });
        })
        .catch(err => {
            res.json({ success: false, result: err.message });
        });
};

const remove = (req, res) => {
    const { id } = req.body;

    ContactModel.remove({ _id : id })
        .then(result => {
            const success = Boolean(result.n && result.deletedCount && result.ok);

            res.json({ success, result });
        })
        .catch(err => {
            res.json({ success: false, result: err.message });
        });
};

module.exports = { create, update, retrieveAll, retrieve, remove };