const { Router } = require('express')
const router = Router()

const webPush = require('../webpush');
let pushSubscription;

/* SUBSCRIBIR AL USUARIO */
router.post('/subscription', async (req, res) =>{
    pushSubscription = req.body;
    res.status(200).json();
    
    const data = JSON.stringify({ 
        title: 'mi titulo',
        mensaje: 'test mensaje'
    })

    try {
        await webPush.sendNotification(pushSubscription, data);
    } catch (error) {
        console.log(error);
    }
})



module.exports = router;