class Retangulo {
    constructor(altura, largura) {
      this.altura = altura; 
      this.largura = largura;
    }
  
    setAltura(altura){
        return this.altura = altura;
    }

    setLargura(largura){
        return this.largura = largura;
    }

    get getArea() {
        return this.calculaArea()
    }

    calculaArea() {
        return this.altura * this.largura;
    }
}

var quadrado = new Retangulo(10,10);

console.log(quadrado.getArea);

var quadrado = new Retangulo(5,5);

console.log(quadrado.getArea);

quadrado.setAltura(100);

