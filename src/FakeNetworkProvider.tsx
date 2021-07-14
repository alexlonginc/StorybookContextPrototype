import React from "react"
import { Thing } from "./CreateScreen"
import { BaseNetworkProvider } from './BaseNetworkProvider';

export const FakeNetworkProvider: React.FC = ({children}) => {
    const [things, setThings] = React.useState<Array<Thing>>([])

    const onCreateThing = (thing: Thing) => {
        setThings([...things, thing])
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