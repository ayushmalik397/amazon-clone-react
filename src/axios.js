import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/amzon-clone/us-central1/api' // The API (cloud function) URL
})

export default instance