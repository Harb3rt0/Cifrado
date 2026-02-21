const express = require('express');
const { cesarEncryption, cesarDecryption, atbashEncryption } = require('./controllers/encryptionController');
const router = express.Router();

router.post('/cifrado/cesar', cesarEncryption);
router.post('/cifrado/atbash', atbashEncryption);
router.post('/descifrado/cesar', cesarDecryption);

module.exports = router;