
import {HEADERS} from "../shared/constans"
import baseURL from "../shared/baseURL";
import { storageService } from './storageService';


class Authentication {

    async register({ email, password, firstName, lastName }) {
        return await baseURL.post('auth/register', { email, password, firstName, lastName }, HEADERS())
            .then((response)=>{
                console.log(response);
                if(response.status === 200){
                    storageService.set('token', response.data.token)
                    return response
                }
            })
    }

    async logIn({ email, password }) {
        return await baseURL.post('auth/login', { email, password }, HEADERS())
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    storageService.set('token', response.data.token)
                    return response
                }
            })
    }

    async changePassword({ email, password, newPassword}){
        return await baseURL.patch('auth/password/change', { email, password, newPassword }, {
            headers: HEADERS()
        })
        .then(response => {
            if(response.status === 200){
                alert(response.data.data)
            }
        })
    }
}

export const authentication = new Authentication();