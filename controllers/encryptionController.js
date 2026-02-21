const { cifradoCesar, cifradoAtbash } = require("../services/encryptionService");

// 3. Controladores de encriptacion
const cesarEncryption = (req, res) => {
    const { alfabeto, texto, desplazamiento } = req.body;
    try {
        return res.status(200).json(cifradoCesar(alfabeto, texto, desplazamiento));
    } catch (err) {
        return res.status(500).json({ error: 'Error al cifrar' });
    }
}

const cesarDecryption = (req, res) => {
    const { alfabeto, texto, desplazamiento } = req.body;
    try {
        return res.status(200).json(cifradoCesar(alfabeto, texto, -desplazamiento));
    } catch (err) {
        return res.status(500).json({ error: 'Error al descifrar' });
    }
}

const atbashEncryption = (req, res) => {
    const { alfabeto, texto } = req.body;
    try {
        return res.status(200).json(cifradoAtbash(alfabeto, texto));
    } catch (err) {
        return res.status(500).json({ error: 'Error al descifrar' });
    }
}

module.exports = {cesarEncryption, cesarDecryption, atbashEncryption}