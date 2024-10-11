class Hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    tipoAtaque(tipo){
        var arma
        if (tipo == "Mago"){
            arma = "Magia"
        } else if (tipo == "Guerreiro"){
            arma = "Espada"
        } else if (tipo == "Monge"){
            arma = "Artes Marciais"
        } else if (tipo == "Ninja"){
            arma = "Shuriken"
        } else{
            arma = "Soco"
        }
        return arma
    }

    atacar(){
        console.log(`O heroi ${this.nome} que é ${this.tipo} atacou usando ${this.tipoAtaque(this.tipo)}`)
    }
}

var heroi01 = new Hero("Gustavo", 20, "Guerreiro")
var heroi02 = new Hero("Cleber", 18, "Mago")
heroi01.atacar()
heroi02.atacar()