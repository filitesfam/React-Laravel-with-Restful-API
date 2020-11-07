import axios from 'axios'

export const getName = () => {
    return axios
        .get('/api/notes', {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            return res.data
        })
}

export const addName = title => {
    return axios
        .post(
            '/api/notes',
            {
                title: title
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function(response) {
            console.log(response)
        })
}

export const deleteName = id => {
    axios
        .delete(`/api/notes/${id}`, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function(response) {
            console.log(response)
        })
        .catch(function(error) {
            console.log(error)
        })
}

export const updateName = (title, id) => {
    return axios
        .put(
            `/api/notes/${id}`,
            {
                title: title
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function(response) {
            console.log(response)
        })
}