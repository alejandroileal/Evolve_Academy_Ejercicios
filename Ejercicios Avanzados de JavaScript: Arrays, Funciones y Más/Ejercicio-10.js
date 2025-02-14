// Gestión de Inscripciones a un Evento

// Crea un sistema para gestionar inscripciones:

const participantes = ["Juan", "Ana", "Pedro", "Luis"];

// Añade nuevos participantes. (Esta función la hice iterando en el array original)

const añadirParticipantes = (nuevosParticipantes) => {
  nuevosParticipantes.forEach((participante) =>
    participantes.push(participante)
  );
};

añadirParticipantes(["Alejandro", "Andoni"]);

console.log(participantes);

// Elimina un participante por nombre. (Decidí esta solución con for en vez de filter para iterar en el array original)

const eliminarParticipantePorNombre = (nombre) => {
  for (let i = 0; i < participantes.length; i++) {
    if (participantes[i] === nombre) {
      participantes.splice(i, 1);
      i--;
    }
  }
};

eliminarParticipantePorNombre("Alejandro");

console.log(participantes);

// Filtra participantes con nombres que contengan una letra específica.

const filterByLetter = (letter) =>
  participantes.filter((nombre) =>
    nombre.toLocaleLowerCase().includes(letter.toLocaleLowerCase())
  );

console.log(filterByLetter("A"));

// Convierte la lista de participantes a una sola cadena usando join.

console.log(participantes.join(", "));
