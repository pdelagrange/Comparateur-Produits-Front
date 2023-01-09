import React, {useState} from 'react';

// Composant barre de recherche
const Searchbar = () => {
    
    // Gestion de la recherche de produits
    const searchHandler = (e) => {
        e.preventDefault();

        // Valeur du champ de recherche
        const [searchInput, setSearchInput] = useState('');
        setSearchInput(e.target.value);
        if (searchInput.length > 0) {
            // Affichage résultats recherche
            /*
            const result = x.name.match(searchInput); // jsp lol
            x.filter((x) => {
                return x.name.match(searchInput);
                return (
                    <div>
                    {   
                        x.map((x, *index*) => {
                            <div id="itemPreview">
                                <img>{x.image}</img>
                                <h3>{x.name}</h3>
                                <p>{x.prix}</p>
                            </div>
                        });
                    }
                    </div>
                );
            });
            */
        }
    }

    // Affichage
    return (
        <input id="search" type="text" placeholder="Rechercher..." onChange={searchHandler} />
    );
}

export default Searchbar;