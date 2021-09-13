import axios from "axios";
import iHttps from "https";

const https = axios.create({
    baseURL: "http://secure.vollicon.com:8080",
    httpsAgent: new iHttps.Agent({
        rejectUnauthorized: false,
    })
});

export default https;