import React from "react"
import { Thing } from "./CreateScreen"

export const FakeNetworkContext = React.createContext({
    things: [] as Array<Thing>,
    onCreateThing: (thing: Thing) => {},
})

export const FakeNetworkProvider: React.FC = ({children}) => {
    const [things, setThings] = React.useState<Array<Thing>>([])

    const onCreateThing = (thing: Thing) => {
        setThings([...things, thing])
    }

    return (
        <FakeNetworkContext.Provider value={{things, onCreateThing}}>
            {children}
        </FakeNetworkContext.Provider>
    )
}