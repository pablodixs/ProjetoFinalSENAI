const total = document.getElementById('total');
const itens = document.getElementById('itens');

let valorLanches = Number.parseFloat(sessionStorage.getItem('valor-lanche'));
let totalItensLanches = Number.parseFloat(sessionStorage.getItem('itens-lanche'));
let valorBebidas = Number.parseInt(sessionStorage.getItem('valor-bebidas'));
let totalItensBebidas = Number.parseInt(sessionStorage.getItem('itens-bebidas'));

let totalItens = totalItensLanches + totalItensBebidas;
let totalValor = (valorLanches + valorBebidas - valorLanches).toFixed(2).replace('.',',');

itens.innerText = `${totalItens} ITENS`;
total.innerText = `R$ ${totalValor}`;

sessionStorage.setItem('valor-total', totalValor);

// Resgata os itens

let qntMisto = Number.parseInt(sessionStorage.getItem('quantidade-misto'))
let qntBomba = Number.parseInt(sessionStorage.getItem('quantidade-bomba'))
let qntXTudo = Number.parseInt(sessionStorage.getItem('quantidade-xtudo'))
let qntFrango = Number.parseInt(sessionStorage.getItem('quantidade-frango'))
let qntBrocadao = Number.parseInt(sessionStorage.getItem('quantidade-brocado'))
let qntRefri = Number.parseInt(sessionStorage.getItem('quantidade-Refri'))
let qntHein = Number.parseInt(sessionStorage.getItem('quantidade-Hein'))
let qntSuco = Number.parseInt(sessionStorage.getItem('quantidade-Suco'))

// Misto

const card1 = document.querySelector('.card1');
const quantidade1 = document.querySelector('#quantidade1');
const lanche1 = document.querySelector('#lanche1');
const totalItem1 = document.querySelector('#totalItem1');

if(qntMisto > 0) {
    card1.classList.remove('hide')
    quantidade1.innerText = `${qntMisto} x`
    lanche1.innerText = 'Misto-Quente'
    totalItem1.innerText = `R$ ${(qntMisto * 4).toFixed(2).replace(".", ",")}`
}

// Bomba

const card2 = document.querySelector('.card2');
const quantidade2 = document.querySelector('#quantidade2');
const lanche2 = document.querySelector('#lanche2');
const totalItem2 = document.querySelector('#totalItem2');

if(qntBomba > 0) {
    card2.classList.remove('hide')
    quantidade2.innerText = `${qntBomba} x`
    lanche2.innerText = 'Bomba'
    totalItem2.innerText = `R$ ${(qntBomba * 8).toFixed(2).replace(".", ",")}`
}

// X-Tudo

const card3 = document.querySelector('.card3');
const quantidade3 = document.querySelector('#quantidade3');
const lanche3 = document.querySelector('#lanche3');
const totalItem3 = document.querySelector('#totalItem3');

if(qntXTudo > 0) {
    card3.classList.remove('hide')
    quantidade3.innerText = `${qntXTudo} x`
    lanche3.innerText = 'X-Tudo'
    totalItem3.innerText = `R$ ${(qntXTudo * 17).toFixed(2).replace(".", ",")}`
}

// Frango

const card4 = document.querySelector('.card4');
const quantidade4 = document.querySelector('#quantidade4');
const lanche4 = document.querySelector('#lanche4');
const totalItem4 = document.querySelector('#totalItem4');

if(qntFrango > 0) {
    card4.classList.remove('hide')
    quantidade4.innerText = `${qntFrango} x`
    lanche4.innerText = 'X-Tudo de Frango'
    totalItem4.innerText = `R$ ${(qntFrango * 19).toFixed(2).replace(".", ",")}`
}

// Brocadao

const card5 = document.querySelector('.card5');
const quantidade5 = document.querySelector('#quantidade5');
const lanche5 = document.querySelector('#lanche5');
const totalItem5 = document.querySelector('#totalItem5');

if(qntBrocadao > 0) {
    card5.classList.remove('hide')
    quantidade5.innerText = `${qntBrocadao} x`
    lanche5.innerText = 'X-Brocadao'
    totalItem5.innerText = `R$ ${(qntBrocadao * 25).toFixed(2).replace(".", ",")}`
}

// Refri

const card6 = document.querySelector('.card6');
const quantidade6 = document.querySelector('#quantidade6');
const lanche6 = document.querySelector('#lanche6');
const totalItem6 = document.querySelector('#totalItem6');

if(qntRefri > 0) {
    card6.classList.remove('hide')
    quantidade6.innerText = `${qntRefri} x`
    lanche6.innerText = 'Refrigerante Lata'
    totalItem6.innerText = `R$ ${(qntRefri * 5).toFixed(2).replace(".", ",")}`
}

// Hein

const card7 = document.querySelector('.card7');
const quantidade7 = document.querySelector('#quantidade7');
const lanche7 = document.querySelector('#lanche7');
const totalItem7 = document.querySelector('#totalItem7');

if(qntHein > 0) {
    card7.classList.remove('hide')
    quantidade7.innerText = `${qntHein} x`
    lanche7.innerText = 'Heineken Long Neck'
    totalItem7.innerText = `R$ ${(qntHein * 8).toFixed(2).replace(".", ",")}`
}

// Suco

const card8 = document.querySelector('.card8');
const quantidade8 = document.querySelector('#quantidade8');
const lanche8 = document.querySelector('#lanche8');
const totalItem8 = document.querySelector('#totalItem8');

if(qntSuco > 0) {
    card8.classList.remove('hide')
    quantidade8.innerText = `${qntSuco} x`
    lanche8.innerText = 'Suco Natural'
    totalItem8.innerText = `R$ ${(qntSuco * 6).toFixed(2).replace(".", ",")}`
}

// Modal

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