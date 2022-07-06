import axios from "axios"

export const getAllNotes = () => {
    return axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            console.log("seteando data de la API a setNotes")
            console.log(response.data)
            const { data } = response

            return data
        })
}