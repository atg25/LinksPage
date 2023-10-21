function message(){
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var msg = document.getElementById('message');
    const success = document.getElementById('success');

    if(name.value !== '' || email.value !== '' || msg.value !=='') {
        success.style.display = 'block';

        setTimeout(() =>{
            name.value = '';
            email.value = '';
            msg.value = '';
            phone.value = '';
        }, 2000);
    }

    setTimeout(() =>{
        success.style.display = 'none';
    }, 4000);
}