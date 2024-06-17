import axios from "axios";

export const consumeBack = (method, url, body = null) => {
    let token = localStorage.getItem("token")
    let config = {
        headers: {
          Authorization: 'Bearer ' + token,
        }
    }
    if(method == "GET"){
        return axios.get(url, config)
    }

    if(method == "POST"){
        return axios.post(url, body, config)
    }

    if(method == "PUT"){
        return axios.put(url, body, config)
    }

    if(method == "DELETE"){
        return axios.delete(url, config)
    }
}