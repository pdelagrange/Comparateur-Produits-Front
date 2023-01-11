import Header from '../Components/Header';
import {useToken} from "../Utils/Token";
const Home = () => {
    const token = useToken();
    const user = token.getUserConnected();
    return (     
        <div id='vue'>
            <Header/>
            <h1>HOME</h1>
            {user &&
                <h2>{user.login}</h2>
            }

        </div>
    );
}

export default Home;