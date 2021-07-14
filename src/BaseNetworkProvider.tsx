import React from "react"
import { Thing } from "./CreateScreen"

export const BaseNetworkContext = React.createContext({
    things: [] as Array<Thing>,
    onCreateThing: (thing: Thing) => {},
})

export interface BaseNetworkProviderProps {
    things: Array<Thing>,
    onCreateThing: (thing: Thing) => void,
}

export const BaseNetworkProvider: React.FC<BaseNetworkProviderProps> = ({
    children,
    things,
    onCreateThing,
}) => {
    return (
        <BaseNetworkContext.Provider value={{things, onCreateThing}}>
            {children}
        </BaseNetworkContext.Provider>
    )
}