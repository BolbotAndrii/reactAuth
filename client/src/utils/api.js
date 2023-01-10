import axios from 'axios'
// user

export const loginUser = (data) => {
    return axios.post(`/api/user/login`, data)
}

export const createUser = (data) => {
    return axios.post(`/api/user/`, data)
}
export const getUser = (id) => {
    return axios.get(`/api/user/${id}`)
}

export const getUsers = () => {
    return axios.get(`/api/user/`)
}

export const deleteUser = (id) => {
    return axios.delete(`/api/user/`, id)
}

export const updateUsers = (id) => {
   return axios.put(`/api/user/${id}`)
}