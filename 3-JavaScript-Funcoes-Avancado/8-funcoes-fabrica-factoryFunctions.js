// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) {
    return {
      nome,
      sobrenome,
   
      // Setter
      set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
      },
     
      // Getter
      get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
      },
      
      fala(assunto = 'falando sobre NADA') {
        return `${this.nome} está ${assunto}.`;
      },
  
      altura: a,
      peso: p,
  
      // Getter
      get imc() {
        const indice = this.peso / (this.altura ** 2);
        return indice.toFixed(2);
      }
    };
  }
  
  //const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);

  const p1 = criaPessoa();
  p1.nome = 'Weslley';
  p1.sobrenome = 'Higor';
  p1.altura = 1.73;
  p1.peso = 103;

  const p2 = criaPessoa('João', 'Otávio', 1.90, 57);
  const p3 = criaPessoa('Junior', 'Otávio', 1.5, 110);
  
  console.log(p1.imc);
  console.log(p2.imc);
  console.log(p3.imc);
  
  console.log(p1.nomeCompleto);
  
  