const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2'); // Connexion à la base de données
const router = express.Router();
require('dotenv').config();


const JWT_SECRET = process.env.JWT_SECRET;

// Configuration de la connexion à la base de données
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Connexion à la base de données
db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        return;
    }
    console.log('Connecté à la base de données MySQL');
});

// Route d'inscription
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Veuillez remplir tous les champs.' });
    }

    try {
        // Vérifier si l'utilisateur existe déjà
        const [results] = await db.promise().query('SELECT * FROM user WHERE email = ?', [email]);
        if (results.length > 0) {
            return res.status(400).json({ message: 'Ce compte existe déjà.' });
        }

        // Hachage du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insertion dans la base de données
        await db.promise().query(
            'INSERT INTO user (username, email, password) VALUES (?, ?, ?)',
            [name, email, hashedPassword]
        );

        res.status(201).json({ message: 'Compte créé avec succès.' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur.' });
    }
});

// Route de connexion
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Veuillez remplir tous les champs.' });
    }

    try {
        const [results] = await db.promise().query('SELECT * FROM user WHERE email = ?', [email]);
        if (results.length === 0) {
            return res.status(400).json({ message: 'Email ou mot de passe incorrect.' });
        }

        const user = results[0];

        // Vérification du mot de passe
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Email ou mot de passe incorrect.' });
        }

        // Générer un token JWT
        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

        // Envoyer le token dans un cookie
        res.cookie('token', token, { httpOnly: true }).json({ message: 'Connexion réussie.' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur.' });
    }
});
// Route de déconnexion
router.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Déconnexion réussie.' });
});

module.exports = router;
