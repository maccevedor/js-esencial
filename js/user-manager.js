class UserManager{
    constructor(databaseConnection){
        this._connection = databaseConnection
    }

    createUser(name){
        return this._connection.table('users').insert({
            is_new: true,
            full_nmae: name
        }).then(user => user.id)
    }
}

export default UserManager