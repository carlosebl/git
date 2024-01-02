class Forma {
    constructor(cor) {
        this.cor = cor;
    }

    draw() {
        console.log(`Desenhando uma forma colorida ${this.cor}`);
    }
}

class Circulo extends Forma {
    constructor(cor, raio) {
        super(cor);
        this.raio = raio;
    }

    calculateArea() {
        return Math.PI * this.raio ** 2;
    }
}

class Quadrado extends Forma {
    constructor(cor, lado) {
        super(cor);
        this.lado = lado;
    }

    calculateArea() {
        return this.lado ** 2;
    }
}

const circuloVermelho = new Circulo('vermelho', 5);
const quadradoAzul = new Quadrado('azul', 4);
const formaVerde = new Forma('verde');

circuloVermelho.draw();
console.log(`Area of circuloVermelho: ${circuloVermelho.calculateArea()}`);

quadradoAzul.draw();
console.log(`Area of quadradoAzul: ${quadradoAzul.calculateArea()}`);

formaVerde.draw();