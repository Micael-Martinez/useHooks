import React, {useState, useEffect} from "react";
import axios from "axios";

const Note = ({id, title, body}) => {
    return(
        <ol>
            <li>{id}</li>
            <li>{title}</li>
            <li>{body}</li>
        </ol>
    )
}
export default function App() {

    //Al useState de abajo le puedo mandar como parametro listNotes si quiero que se inicie por defecto como seria en una base de datos que traigo el array de objetos, o vacio [].
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                console.log("seteando data de la API a setNotes")
                console.log(response.data)
                const {data} = response
                setNotes(data)
                setLoading(false)
            })
    }, [])

    const handleChange = (event) => {
        setNewNote(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //Creo un objeto y lo añado al estado notes
        const noteToAddToState = {
            id: notes.length + 1,
            title: "Se agrego recien",
            body: newNote,
        }

        setNotes([...notes, noteToAddToState])
        setNewNote('')

        console.log(notes);
    }

    //? Fijarme que se renderiza primero esto antes de que el fetch, porque react SIEMPRE trata de renderizar lo antes posible, una vez que carga la data renderiza lo del fetch
    //$ Lo que puedo hacer aca, es pintar con un loading hasta que se carguen los datos del fetch.
    // console.log("render interface de carga")
    // if(notes.length === 0) return "UNA INTERFACE DE CARGA"

    return(
        <div>
            <h1>Notes</h1>
            {loading ? 'Cargando...' : ''}
            {notes.map(note => (
                <Note key={note.id} {...note} />
            ))}

            <h1>Add new Note:</h1>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={newNote} type="text" />
                    <button>Crear Nota</button>
                </form>
        </div>
        )
    }
