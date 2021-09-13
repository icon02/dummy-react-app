import axios from "axios";
import iHttps from "https";

const https = axios.create({
    baseURL: "https://secure.vollicon.com:8443",
    httpsAgent: new iHttps.Agent({
        rejectUnauthorized: false,
    })
});

export default https;