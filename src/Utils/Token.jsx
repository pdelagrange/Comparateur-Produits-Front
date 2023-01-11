import jwtDecode from "jwt-decode";

let TOKEN_INSTANCE;

export function useToken() {
    if(!TOKEN_INSTANCE) {
        TOKEN_INSTANCE = new Token();
    }
    return TOKEN_INSTANCE;
}

export class Token {
    getUserConnected() {
        const tokenString = sessionStorage.getItem('token');
        if(!tokenString){
            return null;
        }
        try {
            const decode = jwtDecode(tokenString);
            return decode;
        } catch(err) {
            return null;
        }
    }

    setToken(token) {
        sessionStorage.setItem('token', JSON.stringify(token));
    }
}