import { createContext } from "react"

const Context = createContext()

export default Context


export const ContextProvider = ({children}) =>{
    const ContextData = {

    }
    return (
        <Context.Provider value={ContextData}>
            {children}
        </Context.Provider>
    )
}