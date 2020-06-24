console.log('sw');

//referencia del documento
self.addEventListener('push', e =>{
    const data = e.data.json();
    console.log(data);
    console.log('notificacion recibida');
    self.registration.showNotification(data.title,{
        body: data.message
        //icon:''
    })
})