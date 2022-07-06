import axios from "axios"

export const createNote = ({ title, body, userId, id }) => {
    return axios
        .post('https://jsonplaceholder.typicode.com/posts', { id, title, body, userId })
        .then(response => {
            const { data } = response;
            return data
        })
}