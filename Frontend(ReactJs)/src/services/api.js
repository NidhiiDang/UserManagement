import axios from 'axios';

const BASE_URL = "http://localhost:8080";  

export const Add = async (user) => {
    try {
        const response = await axios.post(`${BASE_URL}/user/add`, user);
        console.log(response.data);
    } catch (error) {
        console.error("There was an error!", error);
    }
}

export const All = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users/show-all`);
        return response;
    } catch (error) {
        console.error("There was an error!", error);
    }
}

export const GetUser = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/user/show/${id}`);
        return response;
    } catch (error) {
        console.error("There was an error!", error);
    }
}

export const Edit = async (data, id) => {
    try {
        const response = await axios.put(`${BASE_URL}/edit/user/${id}`, data);
        return response;
    } catch (error) {
        console.error("There was an error!", error);
    }
}

export const Delete = (id) => {
    try {
      axios.delete(`${BASE_URL}/delete/${id}`)
        .then(response =>{
            console.log("Successful",response.data)
        })
        .catch(error =>{
            console.log("error",error)
        })
    } catch (error) {
      console.error("Error during deletion:", error); 
    }
}
