const produtos = [
  {nome: "Hambúrguer Completo", preco: 25.00 },
  {nome: "X-Salada", preco: 18.00 },
  {nome: "Batata Frita", preco: 12.00 },
  {nome: "Refrigerante em Lata", preco: 8.00 }
];
 
function formatarReais(valor) {
  return "R$ "+ valor.toFixed(2).replace(".", ",");
}
 
function fazerPedido() {
  let total = 0;
  let resumo ="RESUMO DA COMPRA\n\n";
  let algumSelecionado = false;
 
  for(let i = 0; i < produtos.length; i++){
    let quantidade;
    let valido = false;
    
    while(!valido){     
      let resposta = prompt(produtos[i].nome.toUpperCase()+ "—"+formatarReais(produtos[i].preco) +"\nQuantas unidades? Digite de 0 a 99.");
        if (resposta === null) {
        alert("Compra cancelada!");
        return;
      }
      quantidade = Number(resposta);
 
      if (resposta.trim()!== "" && Number.isInteger(quantidade)&& quantidade>=0 && quantidade<= 99) {
        valido = true;
      }else {
        alert("Valor inválido. Digite um número inteiro de 0 a 99.");
      }
    }
    
    let subtotal = produtos[i].preco*quantidade;
 
    if(quantidade > 0) {
      algumSelecionado = true;
      resumo += produtos[i].nome + ": "+ quantidade + " x " + formatarReais(produtos[i].preco) +" = " + formatarReais(subtotal) + "\n";
      total += subtotal;
    }
  }
 
  if(!algumSelecionado) {
    alert("Nenhum produto foi selecionado.");
  }else{
    resumo += "\nTOTAL: "+ formatarReais(total);
    alert(resumo);
  }
}
 