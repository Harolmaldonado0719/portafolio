// Capturamos los elementos del HTML
const btnAbrir = document.getElementById('btn_abrir_modal');
const modalInfo = document.getElementById('modal_info');
const btnCerrar1 = document.getElementById('btn_cerrar_modal_1');
const btnCerrar2 = document.getElementById('btn_cerrar_modal_2');

// Función para abrir
btnAbrir.addEventListener('click', () => {
    modalInfo.classList.remove('hidden');
});

// Función para cerrar
const cerrarModal = () => {
    modalInfo.classList.add('hidden');
};

// Escuchamos los clics
btnCerrar1.addEventListener('click', cerrarModal);
btnCerrar2.addEventListener('click', cerrarModal);

// Cerrar al hacer clic por fuera
modalInfo.addEventListener('click', (evento) => {
    if (evento.target === modalInfo) {
        cerrarModal();
    }
});