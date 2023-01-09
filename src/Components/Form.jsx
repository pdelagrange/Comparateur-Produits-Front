// Composant formulaire de création produit
const Form = () => {

    // TODO

    return (
        <div id="form-wrapper">

            <form>

                <span id="elem-wrapper">
                    <label>Nom  </label> 
                    <input type="text" />
                </span>

                <span id="elem-wrapper">
                <label>Prix  </label>  
                    <input type="text" name="prix" placeholder=" €"/>
                </span>

                <span id="elem-wrapper">
                    <label>Description  </label> 
                    <input type="text" name="description" />
                </span>
                    
                <span id="elem-wrapper">
                    <label>Image  </label> 
                    <input type="file" name="image" accept="image/png, image/jpeg" />
                    <img type="image/png, image/jpeg" placeholder="preview" src="" />
                </span>

                <span id="elem-wrapper">
                    <label for="category">Catégories  </label>
                    <select name="category">
                        <option value="nvidia">NVIDIA</option>
                        <option value="amd">AMD</option>
                        <option value="intel">INTEL</option>
                    </select>
                </span>

            </form>

        </div>
    );
}

export default CreateProduct;