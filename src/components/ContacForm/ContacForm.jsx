import { useState } from 'react'

const ContacForm = ({ onCreate }) => {
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onCreate({ name })
    }




    return (
        <form onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <button>Generar orden</button>
        </form>
    )
}

export default ContacForm
