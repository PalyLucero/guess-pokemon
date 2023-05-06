const index = {
  title: "INSTRUCCIONES:",
  instructions: {
    objective: "Identifica 10 Pokémon por su silueta",
    gameplay: "Escribe el nombre del Pokémon lo más rápido posible",
    scoring: "El juego termina después de 10 preguntas o cuando se acabe el tiempo",
    skip: "Puedes saltar una pregunta, pero no ganarás puntos",
    time: "Inicialmente tienes 30 segundos, y cada respuesta correcta te da tiempo adicional",
  },
  playBtn: "Jugar",
  testBtn: "Modo de prueba",
  listBtn: "Lista PKMN",
  aboutBtn: "Acerca de",
  scoreBtn: "Puntuaciones",
  loading: "Cargando..."
}

const list = {
  id: "DexID",
  height: "ALTURA",
  weight: "PESO",
  types: "TIPO(S)",
}

const about = {
  project: [
    "Pokémon Guesser recrea la famosa sección del inicio y final de la tanda publicitaria del show Pokémon. Utiliza tecnologías web modernas para ofrecer una experiencia de usuario rápida, receptiva y atractiva. Next.js nos permite crear páginas renderizadas en el servidor y proporciona características de optimización como la división de código y el prefetching automático. React Query simplifica las llamadas a la API con su API simple y flexible. NESS.css en conjunto con Tailwind proporcionan opciones de estilo modernas y eficientes. Prisma simplifica las interacciones con la base de datos con sus consultas seguras por tipo, migraciones automáticas y diseñador de esquemas, mientras que la tecnología de base de datos distribuida de Planetscale garantiza una alta disponibilidad.",
    "Al priorizar la gestión eficiente de datos, los tiempos de carga rápidos y un diseño elegante, nuestro juego web de trivia de Pokémon garantiza una experiencia agradable para los jugadores."
  ],
  me: [
    "¡Hola! Soy un joven desarrollador web de Argentina que está apasionado por construir aplicaciones web increíbles que la gente disfrute usar. Aunque todavía no tengo mucha experiencia profesional, aprendo rápido y siempre estoy dispuesto a poner a prueba mis habilidades. Creo en la importancia de las metodologías ágiles de desarrollo y ser adaptable a nuevos desafíos. Prefiero trabajar en equipo, y valoro la colaboración para lograr grandes resultados. ¡Espero que disfruten mi juego de trivia de Pokémon tanto como yo disfruté construyéndolo!",
    "Si tienes alguna pregunta o simplemente quieres saludar, no dudes en ponerte en contacto conmigo utilizando los botones de abajo. ¡Me encantaría conectarme contigo y escuchar tus comentarios!"
  ],
  copyMsg: "Copiado al portapapeles",
  closeBtn: "Cerrar"
}

const pokemon = {
  skipBtn: "Saltar",
  clueBtn: "Pista",
  placeholder: "Escribe tu respuesta"
}

const navbar = {
  title: "¡Adivina el Pokémon!",
  playBtn: "Nuevo juego",
  aboutBtn: "Acerca de",
  scoreBtn: "Puntuaciones"
}

const submitScore = {
  gameOverTitle: "¡FIN DEL JUEGO!",
  gameOverBadMessage: "Inténtalo de nuevo haciendo clic en el botón de Nuevo juego",
  time: "Tiempo restante:",
  score: "Puntuación:",
  placeholder: "Tu nombre (4 caracteres máx.)",
  submitBtn: "Enviar"
}

const table = {
  name: "NOMBRE",
  score: "PUNTUACIÓN",
  loading: "Cargando..."
}

const testData = {
  name: "Nombre",
  id: "ID Pokédex",
  types: "Tipo(s)",
}

const es = {
  index,
  list,
  about,
  pokemon,
  navbar,
  submitScore,
  table,
  testData
}

export default es