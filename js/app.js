import db from 'unicorn-db-vendor'
import App from '.my-app'
//import UserManager from './user-manager'
import { makeCreateUser } from './user-utils'
port: 212
hots:'',

const connection = new db.DatabaseConnection({
})

const createUser = makeCreateUser(connection);
//const userManager = new UserManager(connection)
//asdfsa:
//createUser()
const app = new App(createUser)

app.start()