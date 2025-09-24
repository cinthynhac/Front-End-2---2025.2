function circulo() {
    let raio = parseFloat(prompt("Digite o raio do círculo:"));
    let area = Math.PI * Math.pow(raio, 2);
    let perimetro = 2 * Math.PI * raio;

    console.log(`Área: ${area.toFixed(2)}`);
    console.log(`Perímetro: ${perimetro.toFixed(2)}`);
}

circulo();