function generateRandomIds() {
    const numerosAleatorios = [];

    for (let i = 0; i < 12; i++) {
        const numeroAleatorio = Math.floor(Math.random() * (53001 - 52764)) + 52764;
        numerosAleatorios.push(numeroAleatorio);
    }

    return numerosAleatorios;
}


export {generateRandomIds};