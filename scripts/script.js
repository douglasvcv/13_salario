let resultado = document.querySelector('.resultado')

function calcular(){
    let salario = Number(document.getElementById('salario').value)
    let meses = Number(document.getElementById('meses').value)
    if(isNaN(salario) || isNaN(meses)){
        resultado.innerHTML = `<p>Algum dos campos não foi preenchido</p>`
    }
    else{

        let contribuicao = salario/12
        let parcela = contribuicao * meses
        resultado.innerHTML = `<p>O pagamento será de: ${parcela.toFixed(2)}</p>
        <p>As parcelas serão de ${(parcela/2).toFixed(2)}</p> `
        console.log(parcela)
        return parcela
    }
}
