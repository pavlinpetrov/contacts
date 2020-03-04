const ContactModel = require('../models/ContactModel');

module.exports = {
    create: (req, res) => {
        const { firstName, lastName, email } = req.body;

        const contact = new ContactModel({ firstName, lastName, email });

        contact.save()
            .then(result => {
                res.json({ success: true, result });
            })
            .catch(err => {
                res.json({ success: false, result: err.message });
            });
    },
    update: (req, res) => {
        const { _id, firstName, lastName, email } = req.body;

        ContactModel.updateOne({ _id }, { firstName, lastName, email })
            .then(result => {
                res.json({ success: true, result });
            })
            .catch(err => {
                res.json({ success: false, result: err.message });
            });
    }
}