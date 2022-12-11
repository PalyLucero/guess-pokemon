import { createContext, useContext, useMemo, useReducer } from "react"
import { AppReducer, initialState } from "./reducer"

const AppContext = createContext()

export const AppWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}