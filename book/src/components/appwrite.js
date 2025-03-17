import { Client, Account} from 'appwrite'

const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
.setProject('67c179e700030085cf05') // Your project ID

const account = new Account(client)

export {account, client}
