let valorFinal = 0;

const cancel = document.getElementById('cancel');
const total = document.getElementById('total');

// Misto

const qntMisto = document.getElementById('qntMisto');
const btnMisto = document.getElementById('btnMisto');
const aumMisto = document.getElementById('aumMisto');
const dmMisto = document.getElementById('dmMisto');

qntMisto.value = 0

let quantidadeMisto = aumMisto.addEventListener('click', () => {
    qntMisto.value++
    valorFinal = Number(qntMisto.value) * 4;
    return valorFinal;
})

quantidadeMisto = dmMisto.addEventListener('click', () => {
    qntMisto.value--
    valorFinal = Number(qntMisto.value) * 4;
    return valorFinal;
})

// Bomba

let valorFinalBomba = 0

const qntBomba = document.getElementById('qntBomba');
const btnBomba = document.getElementById('btnBomba');
const aumBomba = document.getElementById('aumBomba');
const dmBomba = document.getElementById('dmBomba');

let quantidadeBomba = aumBomba.addEventListener('click', () => {
    qntBomba.value++
    valorFinalBomba = Number(qntBomba.value) * 8;
    return valorFinalBomba;
})

quantidadeBomba = dmBomba.addEventListener('click', () => {
    qntBomba.value--
    valorFinalBomba = Number(qntBomba.value) * 8;
    return valorFinalBomba;
})

// X-Tudo

let valorFinalXTudo = 0

const qntXTudo = document.getElementById('qntXTudo');
const btnXTudo = document.getElementById('btnXTudo');
const aumXTudo = document.getElementById('aumXTudo');
const dmXTudo = document.getElementById('dmXTudo');

let quantidadeXTudo = aumXTudo.addEventListener('click', () => {
    qntXTudo.value++
    valorFinalXTudo = Number(qntXTudo.value) * 17;
    return valorFinalXTudo;
})

quantidadeXTudo = dmXTudo.addEventListener('click', () => {
    qntXTudo.value--
    valorFinalXTudo = Number(qntXTudo.value) * 17;
    return valorFinalXTudo;
})

// X-Frango

let valorFinalFrango = 0

const qntFrango = document.getElementById('qntFrango');
const btnFrango = document.getElementById('btnFrango');
const aumFrango = document.getElementById('aumFrango');
const dmFrango = document.getElementById('dmFrango');

let quantidadeFrango = aumFrango.addEventListener('click', () => {
    qntFrango.value++
    valorFinalFrango = Number(qntFrango.value) * 19;
    return valorFinalFrango;
})

quantidadeFrango = dmFrango.addEventListener('click', () => {
    qntFrango.value--
    valorFinalFrango = Number(qntFrango.value) * 19;
    return valorFinalFrango;
})

// Brocadão

let valorFinalBrocadao = 0

const qntBrocadao = document.getElementById('qntBrocadao');
const btnBrocadao = document.getElementById('btnBrocadao');
const aumBrocadao = document.getElementById('aumBrocadao');
const dmBrocadao = document.getElementById('dmBrocadao');

let quantidadeBrocadao = aumBrocadao.addEventListener('click', () => {
    qntBrocadao.value++
    valorFinalBrocadao = Number(qntBrocadao.value) * 25;
    return valorFinalBrocadao;
})

quantidadeBrocadao = dmBrocadao.addEventListener('click', () => {
    qntBrocadao.value--
    valorFinalBrocadao = Number(qntBrocadao.value) * 25;
    return valorFinalBrocadao;
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
    cancelModal.classList.add('hide')
    cancelOverlay.classList.add('hide-contrast')
})

continueModal.addEventListener('click', () => {
    cancelModal.classList.add('hide')
    cancelOverlay.classList.add('hide-contrast')
})

// Armazena o valor

setInterval(
    function atualizaValor() {
        soma = (valorFinal + valorFinalBomba + valorFinalXTudo + valorFinalFrango + valorFinalBrocadao).toFixed(2).replace('.',',');
        total.value = soma

        let totalItens = Number(qntMisto.value) + Number(qntBomba.value) + Number(qntXTudo.value) + Number(qntFrango.value) + Number(qntBrocadao.value)
        
        sessionStorage.setItem('valor-lanche', soma)
        sessionStorage.setItem('itens-lanche', totalItens)   
    }, 100
)

// Limpa o sessionStorage

cancel.onclick = () => {
    sessionStorage.clear()
}