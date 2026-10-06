function CrearTabla(citas) {
  contenidotabla.innerHTML = ''; 

  citas.forEach(cita => {
    const row = document.createElement('tr');
    for (let atributo in cita) {
      const celda = document.createElement('td');
      celda.textContent = cita[atributo];
      row.appendChild(celda);
    }
    contenidotabla.appendChild(row);
  });
}

const contenidotabla = document.querySelector('table tbody');
const botonfiltrar = document.querySelector('#botonfiltrar')
const contenedorDeFiltros = document.querySelector('#contenedordefiltros')
const botoncerrar =document.querySelector('#botoncerrar')
const botonconfirmfiltro =document.querySelector('#botonconfirmfiltro')

fetch('/js/admin/citas.json')
    .then(response => response.json())
    .then(citas=>CrearTabla(citas))

botonfiltrar.addEventListener('click', () => {
  contenedorDeFiltros.classList.add('mostrar');
});

botoncerrar.addEventListener('click', () => {
  contenedorDeFiltros.classList.remove('mostrar');
});
  

botonconfirmfiltro.addEventListener('click', () => {
    const idcliente = document.querySelector('#iddelcliente').value.trim();
    const idbarbero = document.querySelector('#iddelbarbero').value.trim();
    const idservicio = document.querySelector('#iddelservicio').value.trim();
    const estado = document.querySelector('#estadodelacita').value.trim();
    const fechainicio = document.querySelector('#fechainicio').value;
    const fechafinal = document.querySelector('#fechafinal').value;

    fetch('/js/admin/citas.json')
    .then(response => response.json())
    .then(citas => {
        const filtradas = citas.filter(cita => {
            if (idcliente && cita.id_cliente != Number(idcliente)) return false;
            if (idbarbero && cita.id_barbero != Number(idbarbero)) return false;
            if (idservicio && cita.id_servicio != Number(idservicio)) return false;
            if (estado && cita.estado != Number(estado)) return false;
            if (fechainicio && cita.fecha_cita < fechainicio) return false;
            if (fechafinal && cita.fecha_cita > fechafinal) return false;
            return true;
            });

        CrearTabla(filtradas);
    });
});

