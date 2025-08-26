import { createContext, useContext, useState } from "react";

export const CaptainDataContext = createContext()



const CaptainContext = ({children}) => {
    const [captain, setcaptain] = useState(null)
    const [isLoading, setisLoading] = useState(false)
    const [error, seterror] = useState(null)




const updateCaptain = (captainData) => {
    setcaptain(captainData)
}


const value = {
    captain,
    setcaptain,
    isLoading,
    error,
    seterror,
    updateCaptain
}

return (
    <CaptainDataContext.Provider value={value}>
        {children}
    </CaptainDataContext.Provider>
)
}

export default  CaptainContext