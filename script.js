function print(msg) {
    console.log(msg)
}

function showMessage(id, msg) {
    const resp = document.getElementById("resp" + id)
    resp.innerText = msg
}

function ex(exer){
    if (exer == 1) {
        let n = 0
        let num = 0
        while (n !== "sair") {
            n = prompt("Digite um número (Digite sair para encerrar):")
            if (n !== "sair") {

                num = num + parseInt(n)
            }
        }
    showMessage(exer, "Soma dos números é: " + num)
    } else if (exer == 2){
        count = 11
        let debounce = false
        let inter = setInterval(() => {
            if (count > 0) {
                count -= 1
                showMessage(exer, count)
                debounce = false
            } else {
                if (debounce == false) {
                    debounce = true
                    alert("Lançamento")
                    showMessage(exer, "Lançamento")
                }
            }
        }, 1000);
    } else if (exer == 3){
        const ganhoBruto = prompt("Digite o ganho bruto da empresa:")
        const gastosMensais = prompt("Digite os gastos mensais da empresa:")
        let situacao = "Lucro"
        if (ganhoBruto - gastosMensais < 0) {
            situacao = "Prejuízo"
        }
        showMessage(exer, `Ganho bruto: ${ganhoBruto}\nGastos mensais: ${gastosMensais}\nSaldo final: ${ganhoBruto - gastosMensais}\nSituação da empresa: ${situacao}`)
    } else if (exer == 4){
        
    } else if (exer == 5){

    } else if (exer == 6){

    } else if (exer == 7){

    } else if (exer == 8){

    } else if (exer == 9){

    } else if (exer == 10){

    } else if (exer == 11){

    } else if (exer == 12){

    }
}

