
async function LoginUser(email, password,LoginUrl) {
   
    const response = await fetch(LoginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            username: email,
            password: password
        })
    });

    const data = await response.json();
    
    localStorage.setItem('token', data.access_token);
    console.log('Successful login');
    window.location.href = 'index.html';
    
}

console.log(LoginUser)


const form = document.querySelector('#form');
form.addEventListener('submit',CreateClient)

console.log(LoginUser)

const API_BASE_URL = 'http://127.0.0.1:8000';
const CLIENTES_URL = `${API_BASE_URL}/users`;
const LOGIN_URL = 'http://127.0.0.1:8000/users/token';

async function CreateClient(e) {

    const nombre = document.querySelector('#nombre').value.trim();
    const email = document.querySelector('#email').value.trim();
    const telefono = document.querySelector('#telefono').value.trim();
    const password = document.querySelector('#contraseña').value;
    
    e.preventDefault();
    
    
    const client = {
        nombre: nombre,
        telefono: telefono,
        password: password,  //<--Hashear
        email: email,
    };
    
    const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(client)
    };
    
    const response = await fetch(CLIENTES_URL, opciones);
    const data = await response.json();
    
    console.log('Registro exitoso:', data);
    
    await LoginUser(email,password,LOGIN_URL);
    window.location.href = 'index.html';
        
  
}



// async function LoginUser(email,password){
//     const response = await fetch(LOGIN_URL,{
//         method:'POST',
//         headers:{
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         body: new URLSearchParams({
//             username:email,
//             password:password
//         }
//         )
//     })

//     const data = await response.json()
//     localStorage.setItem('token',data.access_token)
//     console.log('Succesful login')

// }








