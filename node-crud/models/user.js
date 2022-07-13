'use strict';

const db = require('../config/databse');


const User = function(user) {
    this.name = user.name;
    this.email = user.email;
}

User.add = (newUser, result) => {
    const query = {
        text: 'INSERT INTO users( name, email) VALUES($1, $2) returning *',
        values: [ newUser.name, newUser.email],
    }
    db.query(query, (err, res) => {
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res.rows[0]);
        }
    });
}

User.get = (id, result) => {
    const query = {
        text: 'select * from users where id=$1;',
        values: [id],
    }
    db.query(query, (err, res) => {
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res.rows[0]);
        }
    });
}

User.update = (id, newUser, result) => {
    const query = {
        text: 'update users set name=$1, email=$2 where id=$3 returning *',
        values: [newUser.name, newUser.email, id],
    }
    db.query(query, (err, res) => {
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res.rows[0]);
        }
    });
}

User.delete = (id, result) => {
    const query = {
        text: 'delete from users where id=$1 returning *',
        values: [id],
    }
    db.query(query, (err, res) => {
        if (err) {
            result(err, null);
            return;
        } else {
            result(null, res.rows[0]);
        }
    });
}

module.exports = User;