const form = document.querySelector('.login-form')
const LOGIN_URL = 'http://127.0.0.1:8000/users/token';

export default async function LoginUser(email,password){

    const response = await fetch(LOGIN_URL,{
        method:'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            username:email,
            password:password
        }
        )
    })

    const data = await response.json()
    localStorage.setItem('token',data.access_token)
    console.log('Succesful login')
    window.location.href = 'index.html';

}

async function ConfirmLogin (e){
    e.preventDefault();
    const email = document.querySelector('.email').value.trim()
    const password = document.querySelector('.password').value
    await LoginUser(email,password)
    
}

form.addEventListener('submit',ConfirmLogin)