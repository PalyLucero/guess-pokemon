export const initialState = {
  gameDone: false,
  currentPokemon: {},
  currentPokemonIndex: 0,
  currentClueIndex: 0,
  correctAnswer: false,
  skippedPokemon: [],
  remainingTime: 0,
  totalScore: 0
}

export const ACTIONS = {
  GAME_DONE: 'GAME_DONE',
  RESET: 'RESET',
  SET_POKEMON: 'SET_POKEMON',
  NEXT_POKEMON: 'NEXT_POKEMON',
  NEXT_CLUE: 'NEXT_CLUE',
  SKIP_POKEMON: 'SKIP_POKEMON',
  CORRECT_ANSWER: 'CORRECT_ANSWER',
  REMAINING_TIME: 'REMAINING_TIME',
  TOTAL_SCORE: 'TOTAL_SCORE'
}

export const AppReducer = (state, action) => {
  const { gameDone, currentPokemon, currentPokemonIndex, currentClueIndex, correctAnswer, skippedPokemon, remainingTime, totalScore } = state
  switch (action.type) {
    case ACTIONS.GAME_DONE:
      return {
        ...state,
        gameDone: true
      }
    case ACTIONS.RESET:
      action.payload()
      return initialState
    case ACTIONS.SET_POKEMON:
      return {
        ...state,
        currentPokemon: action.payload
      }
    case ACTIONS.NEXT_POKEMON:
      return {
        ...state,
        currentPokemonIndex: currentPokemonIndex + 1
      }
    case ACTIONS.SKIP_POKEMON:
      return {
        ...state,
        currentPokemonIndex: currentPokemonIndex + 1,
        skippedPokemon: [...skippedPokemon, action.payload]
      }
    case ACTIONS.NEXT_CLUE:
      if (currentPokemon.clues.length - 1 === currentClueIndex) {
        return {
          ...state,
          currentClueIndex: 0
        }
      }
      return {
        ...state,
        currentClueIndex: currentClueIndex + 1
      }
    case ACTIONS.CORRECT_ANSWER:
      return correctAnswer ? { ...state, correctAnswer: false } : { ...state, correctAnswer: true }
    case ACTIONS.REMAINING_TIME:
      return {
        ...state,
        remainingTime: action.payload
      }
    case ACTIONS.TOTAL_SCORE:
      const calculateTotal = () => {
        console.log(remainingTime, 'AWEAWRETGATEWAR')
        const updatedTotalScore = (totalScore + ((remainingTime * 100) / 30)) * ((10 - skippedPokemon.length) / 10)
        console.log(updatedTotalScore, '????????')
        return Math.floor(updatedTotalScore)
      }
      console.log(totalScore)
      return {
        ...state,
        totalScore: calculateTotal()
      }
    default:
      return state
  }
}