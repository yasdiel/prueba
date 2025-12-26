import { useState } from 'react'
import './form.css'

export default function Form(){
    const [nombre,setNombre] = useState('')
    const [mensaje,setMensaje] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        let texto = `Hola Oreste, mi nombre es ${nombre}. ${mensaje}`
        const textoCodificado = encodeURIComponent(texto)
        let url = `https://wa.me/56931733435?text=${textoCodificado}`
        window.open(url,'_blank')
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre Completo:</label>
            <input value={nombre} onChange={(e)=> setNombre(e.target.value)} type="text" required placeholder="Inserte su nombre"/>
            <label htmlFor="message">Deje su mensaje:</label>
            <textarea value={mensaje} onChange={(e)=> setMensaje(e.target.value)} required name="message" id="message" placeholder="Estoy interesado en sus clases de ajedrez..."></textarea>
            <button type='submit'>Enviar</button>
        </form>
    )
}