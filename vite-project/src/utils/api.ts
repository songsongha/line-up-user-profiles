import axios from 'axios'

export const getUserList = async () =>{
    const response = await axios.get('https://reqres.in/api/users')
    return response.data
}

export const getUserDetail = async (id: string) => {
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    if (!response.ok) throw new Error("Network Error");
    return response.json();
  };