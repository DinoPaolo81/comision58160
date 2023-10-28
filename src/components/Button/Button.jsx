import { useEffect, useRef } from "react"

const Button = () => {
    const buttonRef = useRef()

    useEffect(() => {
        const button = buttonRef.current

        const handleClick = (e) => console.log('click!', e)

        button.addEventListener('click', handleClick)

        return () => {
            button.removeEventListener('click', handleClick)
        }
    }, [])


    return <button ref={buttonRef} onClick={(e) => console.log('click sintentico!', e)}>boton</button>
}

export default Button