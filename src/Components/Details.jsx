const Details = ({description}, {characteristics}) => {

    // TODO
    function test() {
        console.log("Description: " + description);
        console.log("Caractéristiques: " + characteristics);
    }

    return (
        <div>
            <h3>Description : </h3>
            <p>{description}</p>
            <h3>Charactéristiques : </h3>
            { characteristics.forEach(char => { <p>{char}</p> }) }
            <input type="submit" onClick={test} />
        </div>
    );
}

export default Details;