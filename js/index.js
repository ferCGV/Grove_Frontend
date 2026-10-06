
const nav = document.querySelector('.nav-links')

const register = document.querySelector('.linregister')
const login = document.querySelector('.linlogin')
let LogOutLink

const CURRENT_USER_URL = 'http://127.0.0.1:8000/users/current/user'


console.log(localStorage.getItem('token'))

async function LoadPage (){
    if (localStorage.getItem('token')){
        let Current_User_Data = await current_user()
        console.log(Current_User_Data)
        const admin = isAdmin(Current_User_Data.rol)
        
        if (admin){
            window.location.href='/pages/admin/adminindex.html'
            
        }else{
            
            register.style.display='none'
            login.style.display='none'    
        }
        LogOutLink = document.createElement('a')
        LogOutLink.textContent = 'Cerrar Sesion'
        LogOutLink.style.cursor='pointer'
        nav.appendChild(LogOutLink)

        LogOutLink.addEventListener('click', (e) => {
            e.preventDefault();
            const confirmLogout = confirm('¿Estás seguro de que deseas cerrar tu sesión?');
            if (confirmLogout) {
                localStorage.removeItem('token');
                
                setTimeout(() => {
                    window.location.href = 'index.html'; 
                }, 300); 
            }

            });
        
    }else{
    register.style.display='inline'
    login.style.display='inline'
}
}





async function current_user(){
    const response = await fetch(CURRENT_USER_URL,{
        method:'GET',
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })

    const data = await response.json()
    return data

}

function isAdmin(rol){
    return rol =='admin'

}


LoadPage()






