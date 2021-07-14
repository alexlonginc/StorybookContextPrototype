import React from "react"
import { FakeNetworkContext } from './FakeNetworkProvider';

export interface Thing {
    name: string,
}

export interface CreateScreenProps {
}

export const CreateScreen: React.FC<CreateScreenProps> = () => {
    const [name, setName] = React.useState('')
    const {onCreateThing, things} = React.useContext(FakeNetworkContext)
    
    return (
        <div>
            <p>I'm a create screen!</p>
            <div><input type='text' value={name} onChange={e => setName(e.target.value)} /></div>
            <button onClick={() => onCreateThing({name})}>Create it!</button>
            <div>
                Previously created things:
                <ul>
                    {things.map((thing, index) => <li key={index}>{thing.name}</li>)}
                </ul>
            </div>
        </div>
    )
}