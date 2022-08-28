const cancel = document.getElementById('cancel');
const total = document.getElementById('total');

let lanches = sessionStorage.getItem('valor-lanche')
let lanchesNum = Number.parseFloat(lanches)

total.value = lanches

// Refri

let valorFinalRefri = 0;

const qntRefri = document.getElementById('qntRefri');
const btnRefri = document.getElementById('btnRefri');
const aumRefri = document.getElementById('aumRefri');
const dmRefri = document.getElementById('dmRefri');

qntRefri.value = 0

let quantidadeRefri = aumRefri.addEventListener('click', () => {
    qntRefri.value++
    valorFinalRefri = Number(qntRefri.value) * 5;
    return valorFinalRefri;
})

quantidadeRefri = dmRefri.addEventListener('click', () => {
    qntRefri.value--
    valorFinalRefri = Number(qntRefri.value) * 5;
    return valorFinalRefri;
})

// Hein

let valorFinalHein = 0

const qntHein = document.getElementById('qntHein');
const btnHein = document.getElementById('btnHein');
const aumHein = document.getElementById('aumHein');
const dmHein = document.getElementById('dmHein');

let quantidadeHein = aumHein.addEventListener('click', () => {
    qntHein.value++
    valorFinalHein = Number(qntHein.value) * 8;
    return valorFinalHein;
})

quantidadeHein = dmHein.addEventListener('click', () => {
    qntHein.value--
    valorFinalHein = Number(qntHein.value) * 8;
    return valorFinalHein;
})

// Suco

let valorFinalSuco = 0

const qntSuco = document.getElementById('qntSuco');
const btnSuco = document.getElementById('btnSuco');
const aumSuco = document.getElementById('aumSuco');
const dmSuco = document.getElementById('dmSuco');

let quantidadeSuco = aumSuco.addEventListener('click', () => {
    qntSuco.value++
    valorFinalSuco = Number(qntSuco.value) * 6;
    return valorFinalSuco;
})

quantidadeSuco = dmSuco.addEventListener('click', () => {
    qntSuco.value--
    valorFinalSuco = Number(qntSuco.value) * 6;
    return valorFinalSuco;
})

//

const cancelButton = document.getElementById('cancelButton');
const cancelModal = document.querySelector('.modal-cancel');
const cancelOverlay = document.querySelector('.contrast');
const closeModal = document.getElementById('close');
const continueModal = document.getElementById('continue')

cancelButton.addEventListener('click', () => {
    cancelModal.classList.remove('hide')
    cancelOverlay.classList.remove('hide-contrast')
})

closeModal.addEventListener('click', () => {
    sessionStorage.clear()
})

continueModal.addEventListener('click', () => {
    cancelModal.classList.add('hide')
    cancelOverlay.classList.add('hide-contrast')
})

// Armazena os valores

setInterval(
    function atualizaValor() {
        soma = (lanchesNum + valorFinalRefri + valorFinalHein + valorFinalSuco).toFixed(2).replace('.',',');
        total.value = soma

        let totalItens = Number(qntRefri.value) + Number(qntHein.value) + Number(qntSuco.value)
        
        sessionStorage.setItem('valor-bebidas', soma)
        sessionStorage.setItem('itens-bebidas', totalItens)

        // Armazena as quantidades

        sessionStorage.setItem('quantidade-Refri', qntRefri.value)
        sessionStorage.setItem('quantidade-Hein', qntHein.value)
        sessionStorage.setItem('quantidade-Suco', qntSuco.value)

        // Modal

        const checkout = document.getElementById('checkout');

        if(lanchesNum > 0 || totalItens > 0) {
            checkout.classList.remove('disabled')
            checkout.setAttribute('href', '../checkout.html')
        } else {
            checkout.classList.add('disabled')
            checkout.setAttribute('href', '#')

            checkout.onclick = () => {
                document.querySelector('.modal').classList.remove('hide')
                setTimeout(() => {
                    document.querySelector('.modal').classList.add('hide')
                }, 2500)
            }
        }

    }, 100
)