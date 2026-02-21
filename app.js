// 1. Archivo principal de configuracion
const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const frontPath = path.join(__dirname, 'dist', 'frontend_cifrado', 'browser');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/apiCifrado', routes);
app.use(express.static(frontPath));

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(frontPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor ejecutandose en el puerto ${port}`);
});