import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-skincare-store-5d090.cloudfunctions.net/api",
            // "http://127.0.0.1:5001/skincare-store-5d090/us-central1/api" // test url
    headers: {'Content-Type':'application/json'} 
});

export default instance;