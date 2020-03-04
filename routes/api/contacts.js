const express = require('express');
const router = express.Router();
const ContactController = require('../../controllers/ContactController');

router.post('/', ContactController.create);
router.put('/', ContactController.update);
router.get('/', ContactController.retrieveAll);
router.get('/:id', ContactController.retrieve);
router.delete('/', ContactController.remove);

module.exports = router;