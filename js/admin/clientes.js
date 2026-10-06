const botonfiltrar = document.querySelector('#botonfiltrar')
const contenedordefiltros = document.querySelector('#contenedordefiltros')
const botoncerrar = document.querySelector('#botoncerrar')

const contenidotabla = document.querySelector('table tbody')


const botonconfirmfiltro = document.querySelector('#botonconfirmfiltro')
const idcliente = document.querySelector('#idcliente')
const nombrecliente = document.querySelector('#nombrecliente')

function creartabla (citas){
    contenidotabla.innerHTML=''
    citas.forEach(cita=>{
        let fila = document.createElement('tr')
        let celda;

        for(let campo in cita){
            celda = document.createElement('td')
            celda.textContent=cita[campo]
            fila.appendChild(celda)
        
        contenidotabla.appendChild(fila)
    }})
            
    }


fetch('/js/admin/clientes.json')
    .then(response => response.json())
    .then(citas=>creartabla(citas))


botonfiltrar.addEventListener('click',()=>{
    contenedordefiltros.classList.add('mostrar')
})

botoncerrar.addEventListener('click',()=>{
    contenedordefiltros.classList.remove('mostrar')
})

botonconfirmfiltro.addEventListener('click',()=>{
    fetch('/js/admin/clientes.json')
    .then(response => response.json())
    .then(citas=>{
        let Idcliente = idcliente.value.trim()
        let Nombrecliente = nombrecliente.value.trim().toLowerCase()

        let citasfiltradas = citas.filter(cita=>{
                if (Idcliente && Idcliente!=cita.ID_Cliente) return false;
                if(Nombrecliente && Nombrecliente!=cita.Nom_Cliente.toLowerCase()) return false ;
                return true;
        })

        creartabla(citasfiltradas)
    })
})
