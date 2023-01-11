import {useToken} from "./Token";
import { useNavigate} from "react-router-dom";
import {useEffect} from "react";


export function useAdminRestriction(){
    const navigate = useNavigate();
    const token = useToken();
    const user = token.getUserConnected();
    if(!user?.admin){
        useEffect(() => {
            navigate('/');
        });
    }
}


export function alreadyConnectedRestriction(){
    const token = useToken();
    const navigate = useNavigate();
    const user = token.getUserConnected();

    if(user){
        useEffect(() => {
            navigate('/');
        });
    }
}

export function needConnectionRestriction(){
    const token = useToken();
    const navigate = useNavigate();
    const user = token.getUserConnected();
    if(!user) {
        useEffect(() => {
            navigate('/login');
        });
    }

}