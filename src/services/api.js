import axios from "axios";

const api = axios.create({
    baseURL: "http://172.20.10.4:1337/"
})
export default api;