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

sessionStorage.setItem('valor-total', totalValor)