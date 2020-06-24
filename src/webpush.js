//https://www.npmjs.com/package/web-push
const webpush = require('web-push')

webpush.setVapidDetails(
    'mailto:test@test.com',
    process.env.PUBLIC_VAPID_KEY, 
    process.env.PRIVATE_VAPID_KEY
);

//EXPORTO EL MODULO
module.exports = webpush;

//console.log(process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY);