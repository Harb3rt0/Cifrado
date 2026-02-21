function isLower(char) {
    return char === char.toLowerCase() && char !== char.toUpperCase();
}

function sumarEnRango(valor, n, max) {
    return ((valor + n) % max + max) % max;
}

const cifradoCesar = (alfabeto, texto, desplazamiento) => {
    if (!alfabeto) {
        return texto.split("").map(char => {
            const asciiCode = char.charCodeAt(0);
            const newAsciiCode = sumarEnRango(asciiCode, desplazamiento, 256);
            return String.fromCharCode(newAsciiCode);
        }).join("");
    }
    const splitedAlphabet = alfabeto.toLowerCase().split("");
    const splitedText = texto.split("");
    let cipherText = [];
    splitedText.forEach(char => {
        if (char !== " ") {
            const pos = splitedAlphabet.indexOf(char.toLowerCase());
            if (pos != -1) {
                const newPos = sumarEnRango(pos, desplazamiento, splitedAlphabet.length);
                if (isLower(char)) {
                    cipherText.push(splitedAlphabet[newPos]);
                } else {
                    cipherText.push(splitedAlphabet[newPos].toUpperCase());
                }
            } else {
                cipherText.push(char);
            }
        } else {
            cipherText.push(" ");
        }
    });
    return cipherText.join("");
}

const cifradoAtbash = (alfabeto, texto) => {
    if (!alfabeto) {
        return texto.split("").map(char => {
            const asciiCode = char.charCodeAt(0);
            const invertedAscii = 255 - asciiCode;
            return String.fromCharCode(invertedAscii);
        }).join("");
    }
    const splitedAlphabet = alfabeto.toLowerCase().split("");
    const splitedText = texto.split("");
    let cipherText = [];
    splitedText.forEach(char => {
        if (char !== " ") {
            const pos = splitedAlphabet.indexOf(char.toLowerCase());
            if (pos != -1) {
                if (isLower(char)) {
                    cipherText.push(splitedAlphabet[splitedAlphabet.length-1 - pos]);
                } else {
                    cipherText.push(splitedAlphabet[splitedAlphabet.length-1 - pos].toUpperCase());
                }
            } else {
                cipherText.push(char);
            }
        } else {
            cipherText.push(" ");
        }
    });
    return cipherText.join("");
}

module.exports = { cifradoCesar, cifradoAtbash }