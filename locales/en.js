const index = {
  title: "INSTRUCTIONS:",
  instructions: {
    objective: "Identify 10 Pokemon based on their silhouette",
    gameplay: "Type in the name of the Pokemon as quickly as possible",
    scoring: "Game ends after 10 questions or when the timer runs out",
    skip: "You can skip a question, but it won't earn any points",
    time: "Initially you have 30 seconds, and each correct answer earns additional time",
  },
  playBtn: "Play",
  testBtn: "Test mode",
  listBtn: "PKMN list",
  aboutBtn: "About",
  scoreBtn: "Score table"
}
const list = {
  id: "DexID",
  height: "HEIGHT",
  weight: "WEIGHT",
  types: "TYPE(S)",
  loading: "Loading..."
}
const about = {
  project: [
    "Our Pokemon trivia web game uses modern web technologies to deliver a fast, responsive, and engaging user experience. Next.js allows us to create server-side rendered pages and provides optimization features like code splitting and automatic prefetching. Prisma simplifies database interactions with its type-safe queries, automatic migrations, and schema designer, while Planetscale's distributed database technology guarantees high availability. React Query streamlines API calls with its simple and flexible API, and NESS.css and Tailwind provide modern and efficient styling options.",
    "By prioritizing efficient data management, fast load times, and elegant design, our Pokemon trivia web game ensures an enjoyable experience for players."
  ],
  me: [
    "Hey there! I'm a young web developer from Argentina who is passionate about building awesome web applications that people love to use. While I don't have much professional experience yet, I'm a fast learner and always eager to improve my skills. I believe in the importance of agile development practices and being adaptable to new challenges. I'm a team player and value collaboration to achieve great results. I hope you enjoy playing my Pokemon trivia game as much as I enjoyed building it!",
    "If you have any questions or just want to say hello, feel free to get in touch with me using the buttons below. I'd love to connect with you and hear your feedback!"
  ],
  copyMsg: "Copied to clipboard",
  closeBtn: "Close"
}

const pokemon = {
  skipBtn: "Skip",
  clueBtn: "Clue",
  placeholder: "Enter your answer"
}
const navbar = {
  title: "Guess the Pokémon!",
  playBtn: "New game",
  aboutBtn: "About",
  scoreBtn: "Score table"
}
const submitScore = {
  gameOverTitle: "GAME OVER!",
  gameOverBadMessage: "Try again clicking the New game button",
  time: "Remaining time:",
  score: "Score:",
  placeholder: "Your name (4 characters max)",
  submitBtn: "Submit"
}
const table = {
  name: "NAME",
  score: "SCORE",
  loading: "Loading..."
}
const testData = {
  name: "Name",
  id: "DexID",
  types: "Type(s)",
}

const en = {
  index,
  list,
  about,
  pokemon,
  navbar,
  submitScore,
  table,
  testData
}
export default en