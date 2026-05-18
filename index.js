class hero {
  constructor(nome, idade,tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    console.log(`O ${this.tipo} atacou usando ${tipoAtaque(this.tipo)}`)
  }
  

}
  function tipoAtaque(tipo) {
    let ataque = '';
    if(tipo.toLowerCase() === "mago"){
      return ataque = "magia";
    }else if(tipo.toLowerCase() === "guerreiro"){
      return ataque = "espada";
    }else if(tipo.toLowerCase() === "monge"){
      return ataque = "artes marciais";
    }else if(tipo.toLowerCase() === "ninja"){
      return ataque = "shuriken";
    }
  }

let ninja = new hero("Naruto", 13, "Ninja");
ninja.atacar()