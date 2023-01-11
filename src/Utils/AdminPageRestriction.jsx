import {useToken} from "./Token";
import { useNavigate} from "react-router-dom";
import {useEffect} from "react";


export function useAdminRescriction(){
    const navigate = useNavigate();
    const token = useToken();
    const user = token.getUserConnected();
    if(!user?.admin){
        useEffect(() => {
            navigate('/');
        });
    }
}


export function alreadyConnectedRescriction(){
    const token = useToken();
    const navigate = useNavigate();
    const user = token.getUserConnected();

    if(user){
        useEffect(() => {
            navigate('/');
        });
    }
}