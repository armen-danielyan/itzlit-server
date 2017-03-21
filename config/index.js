'use strict';

module.exports = {
    jwt: {
        expires: 3600,
        tokenLiveTime: 24 * 60 * 60,
        secret: 'SNSkkcTTibRl5Csu7DpArEfCZ5zIa6pU59gjEN9T8Wk7T5ud1QrTjfQ1VLRPH'
    },
    ip: process.env.IP,
    port: process.env.PORT || 3400,
    mysql: {
        host: 'localhost',
        username: 'root',
        password: '',
        dbname: 'itzlit'
    }
};