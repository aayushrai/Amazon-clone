import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:5001/clone-e5042/us-central1/api' // you need to change plan to blaze and put functions deploy link here
});

export default instance;