export const makeCreateUser = connection => name =>
    this._connection.table('users').insert({
        is_new: true,
        full_name
    }).then(user => user.id)