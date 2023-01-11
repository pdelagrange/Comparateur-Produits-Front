const Product = ({name, price}) => {

    // TODO
    function test() {
        console.log("Nom: " + name);
        console.log("Prix: " + price);
    }

    return (
        <div>
            <h2>{name}</h2>
            <img src="" placeholder="visuel produit"/>
            <a onClick={test}>+ Ajouter un objet à comparer</a>
            <h3>{price}</h3>
        </div>
    );
}

export default Product;