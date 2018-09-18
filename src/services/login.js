import request from '../utils/request';


const loginUrl = "/login"


export function Login(payload){
    console.log("login(payload)", payload)
    const options = {
        method: "POST",
        body: payload
    }
    return request(loginUrl, options)
}

export function fetchAdminIndex(){
    const url = "/admin/index"
    
    return request(url, {})
}