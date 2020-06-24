//Llave publica
const PUBLIC_VAPID_KEY='Aquí va la llave publica del archivo .env';

const subscription = async () =>{

    //ANTES DE ENVIAR LA PETICION SE NECESITA SUSCRIBIR AL USUARIO AL SW
    const register = await navigator.serviceWorker.register('/serviceWorker.js',{
        scope: '/' //alcance de las rutas
    });

    //ESCUCHANDO LA NOTIFICACION
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey:urlBase64ToUint8Array(PUBLIC_VAPID_KEY)
    })

    //ENVIANDO LA NOTIFICACION
    await fetch('/subscription', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers:{"Content-Type":"application/json"}
    })
    console.log("suscrito");
}

//https://www.npmjs.com/package/web-push#using-vapid-key-for-applicationserverkey
const urlBase64ToUint8Array = base64String => {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');
   
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
   
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

//REGISTRO EL SERVICE WORKER Y SOPORTE
// Service Worker Support
if ("serviceWorker" in navigator) {
    subscription().catch(err => console.log(err));
  }