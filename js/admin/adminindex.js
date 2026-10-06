const LogOutLink = document.querySelector('.LogOut')
console.log(LogOutLink)

LogOutLink.addEventListener('click', (e) => {
            e.preventDefault();
            const confirmLogout = confirm('¿Estás seguro de que deseas cerrar tu sesión?');
            if (confirmLogout) {
                localStorage.removeItem('token');
                
                
                setTimeout(() => {
                    window.location.href = '/index.html'; 
                    console.log('se cerro la cesion')
                }, 300); 
            }

            });