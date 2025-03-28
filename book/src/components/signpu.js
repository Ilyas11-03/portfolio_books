const {Client,  Account} = require('appwrite')
const { response } = require('express')

//Initialisation du client
const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1') // Votre endpoint API
.setProject('67c179e700030085cf05') // Votre ID de projet

//Créer un utilisateur
const account = new Account(client)

account.create('unique()', 'user@example.com', 'password', 'User Name')
  .then(response => console.log('Utilisateur créé', response))

  .catch(error => {
    console.error('Erreur lors de la création de l\'utilisateur', error)
  })
