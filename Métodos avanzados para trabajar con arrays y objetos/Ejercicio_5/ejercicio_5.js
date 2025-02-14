function calcularEstadisticas(números) {
  const suma = (númerosASumar) => {
    let sumaFinal = 0;

    númerosASumar.forEach((numero) => {
      sumaFinal += numero;
    });

    return sumaFinal;
  };

  const promedio = (númerosAPromediar) => {
    const sumaTotal = suma(númerosAPromediar);
    const cantidadDeNúmeros = númerosAPromediar.length;
    return sumaTotal / cantidadDeNúmeros;
  };

  return {
    suma: suma(números),
    promedio: promedio(números),
    max: Math.max(...números),
    min: Math.min(...números),
  };
}

console.log(calcularEstadisticas([4, 8, 15, 16, 23, 42]));
