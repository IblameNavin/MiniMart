import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppProvider = ({children}) =>{
    const [searchInput, setSearchInput] = useState("")

    return(
        <AppContext.Provider value={{ searchInput, setSearchInput }}>
            {children}
        </AppContext.Provider>
    )
}