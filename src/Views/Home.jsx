<<<<<<< HEAD
const Home = (user) => {
    return (
        <div>
            <h1>HOME</h1>
            <h2>{user.name}</h2>
=======
import Menu from "./../Components/Menu.jsx";
import Searchbar from "./../Components/Searchbar.jsx";
import Trending from "./../Components/Trending.jsx";
import "./../Styles/Home.css"

// Accueil
const Home = () => {
    return (
        <div id="wrapper">
            <Menu />
            <Searchbar />
            <Trending />
>>>>>>> 7ae0586 (test)
        </div>
    );
}

export default Home;