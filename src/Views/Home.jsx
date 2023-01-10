import Header from '../Components/Header';
const Home = (user) => {
    return (     
        <div id='vue'>
            <Header/>
            <h1>HOME</h1>
            <h2>{user.name}</h2>
        </div>
    );
}

export default Home;