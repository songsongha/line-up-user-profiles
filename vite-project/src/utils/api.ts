import axios from 'axios'

export const getUserList = async () =>{
    const response = await axios.get('https://reqres.in/api/users')
    return response.data
}

export const getUserDetail = async (id: string) => {
    const url = 'https://regress.in/api/users/' + id
    console.log({url})
    const response = await axios.get(url)
    return response.data
}
