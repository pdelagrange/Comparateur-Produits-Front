import Header from '../Components/Header';
import useToken from "../Utils.jsx/UseToken";
const Home = () => {
    const { token, setToken } = useToken();
    console.log(token);
    return (     
        <div id='vue'>
            <Header/>
            <h1>HOME</h1>
            {token &&
                <h2>{token.login}</h2>
            }

        </div>
    );
}

export default Home;