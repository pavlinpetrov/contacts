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
    }
}