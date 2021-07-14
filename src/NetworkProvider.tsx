import React, { useEffect } from "react"
import { Thing } from "./CreateScreen"
import { BaseNetworkProvider } from './BaseNetworkProvider';

export const NetworkProvider: React.FC = ({children}) => {
    const [things, setThings] = React.useState<Array<Thing>>([])
    
    const getThings = async () => {
        // Make network request (e.g. with axios) to get things from database
        // then call "setThings(things)"
    }

    useEffect(() => {getThings()}, [])

    const onCreateThing = (thing: Thing) => {
        // Execute a network request to a database
    }

    return (
        <BaseNetworkProvider
            things={things}
            onCreateThing={onCreateThing}
        >
            {children}
        </BaseNetworkProvider>
    )
}