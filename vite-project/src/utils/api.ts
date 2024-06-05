import axios from 'axios'

export const getUserList = async () =>{
    const response = await axios.get('https://reqres.in/api/users')
    return response.data
}

export const getUserDetail = async (id: string) => {
    const response = await axios.get('https://regress.in/api/users/' + id)
    return response.data
}
