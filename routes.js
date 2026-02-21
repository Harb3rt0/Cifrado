const express = require('express');
const { cesarEncryption, cesarDecryption, atbashEncryption } = require('./controllers/encryptionController');
const router = express.Router();

// 2. Definicon de rutas
router.post('/cifrado/cesar', cesarEncryption);
router.post('/cifrado/atbash', atbashEncryption);
router.post('/descifrado/cesar', cesarDecryption);

module.exports = router;