let count = 0
let n = 0
function print(msg) {
    console.log(msg)
}

function showMessage(id, msg) {
    const resp = document.getElementById("resp" + id)
    resp.innerText = msg
}

function ex(exer) {
    if (exer == 1) {
        let num = 0
        while (n !== "sair") {
            n = prompt("Digite um número (Digite sair para encerrar):")
            if (n !== "sair") {

                num = num + parseInt(n)
            }
        }
        showMessage(exer, "Soma dos números é: " + num)

    } else if (exer == 2) {
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

    } else if (exer == 3) {
        const ganhoBruto = prompt("Digite o ganho bruto da empresa:")
        const gastosMensais = prompt("Digite os gastos mensais da empresa:")
        let situacao = "Lucro"
        if (ganhoBruto - gastosMensais < 0) {
            situacao = "Prejuízo"
        }
        showMessage(exer, `Ganho bruto: ${ganhoBruto}\nGastos mensais: ${gastosMensais}\nSaldo final: ${ganhoBruto - gastosMensais}\nSituação da empresa: ${situacao}`)

    } else if (exer == 4) {
        count = 4
        var soma = 0
        var arr = []
        while (count !== 0) {
            count -= 1
            n = prompt("Digite um número:")
            arr[count] = n
        }
        arr.sort(function (a, b) { return b - a });
        showMessage(exer, arr)
    } else if (exer == 5) {
        n = prompt("Digit um número:")
        var odd = "impar"
        if (n % 2 == 0) {
            odd = "par"
        }
        showMessage(exer, `O número ${n} é ${odd}\nAgora não é mais: ${n - 1}`)

    } else if (exer == 6) {
        n = prompt("Digite uma letra:")
        // slk prof nn to mto afim de usar switch e case
        if (n == "a" || n == "e" || n == "i" || n == "o" || n == "u") {
            showMessage(exer, `A letra ${n} é vogal`)
        } else {
            showMessage(exer, `A letra ${n} é consoante`)
        }

    } else if (exer == 7) {
        showMessage(exer, `
        - Chocolate\n  
        - Morango\n  
        - Creme\n  
        - Manga\n  
        - Melancia\n  
        - Vanilla Ice\n  
        - Céu Azul\n  
        - Brownie\n  
        - Hawaiano`)
        setTimeout(() => {
            var preco = 0
            n = prompt("Qual sabor de picolé desejas?")
            switch (n) {
                case "chocolate":
                    preco = 1, 50
                case "morango":
                    preco = 2, 50
                case "creme":
                    preco = 2, 50
                case "manga":
                    preco = 3, 20
                case "melancia":
                    preco = 3, 40
                case "Vanilla ice":
                    preco = 3
                case "céu azul":
                    preco = 3, 60
                case "brownie":
                    preco = 4
                case "hawaiano":
                    preco = 5
            }
            showMessage(exer, `O preço do ${n} é R$${preco}`)
        }, 1000);

    } else if (exer == 8) {
        var randnum = Math.floor(Math.random() * (100 - 1))
        n = prompt("Tente adivinhar um número de 1 à 100:")
        if (n !== randnum) {
            showMessage(exer, `Errado, o número certo é ${randnum}`)
        } else {
            showMessage(exer, `Você acertou o número, parabéns!`)
        }
        
    } else if (exer == 9) {
        n = prompt("Escreva uma palavra:")
        var strlength = n.length
        var vogais = ["a", "e", "i", "o", "u"]
        var vognum = 0
        for (var i = 0; i < strlength; i++) {
            for (var j = 0; j < 5; j++) {
                if (n[i] == vogais[j]) {
                    vognum += 1
                }
            }
        }
        showMessage(exer, `A palavra inserida tem ${vognum} vogais.`)

    } else if (exer == 10) {
        var senha = "Leandro13"
        n = prompt("Digite a senha:")
        if (n !== senha) {
            showMessage(exer, `A senha inserida está incorreta.`)
        } else {
            showMessage(exer, `A senha inserida está certa.`)
        }

    } else if (exer == 11) {
        n = prompt("Digite um número:")
        showMessage(exer, `1 = ${n}\n2 = ${n * 2}\n3 = ${n * 3}\n4 = ${n * 4}\n5 = ${n * 5}\n6 = ${n * 6}\n7 = ${n * 7}\n8 = ${n * 8}\n9 = ${n * 9}\n10 = ${n * 10}`)

    } else if (exer == 12) {
        var i = 0
        var name = []
        var price = []
        while (i <= 4) {
            n = prompt("Digite o nome do produto:")
            name[i] = n
            n = prompt("Digite o preço:")
            price[i] = n
            i += 1
        }
        for (var j = 0; j < 5; j++) {
            var h3 = document.createElement("h3")
            var div = document.getElementById("respsex12")
            div.appendChild(h3)
            h3.innerText = (`${name[j]} ${price[j]}`)
        }
    }
}

