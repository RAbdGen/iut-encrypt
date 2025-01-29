'use strict';

const crypto = require('crypto');

class Encrypt {
    /**
     * Hash un mot de passe avec l'algorithme SHA-1
     * @param {string} password - Le mot de passe à hasher
     * @returns {string} - Le hash du mot de passe
     */
    static sha1(password) {
        return crypto.createHash('sha1').update(password).digest('hex');
    }

    /**
     * Compare un mot de passe avec un hash SHA-1
     * @param {string} password - Le mot de passe en clair
     * @param {string} hashedPassword - Le hash SHA-1 à comparer
     * @returns {boolean} - True si correspond, sinon false
     */
    static compareSha1(password, hashedPassword) {
        return Encrypt.sha1(password) === hashedPassword;
    }
}

module.exports = Encrypt;