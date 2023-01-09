const ProductForm = () => {

    return (
        <div id="form-wrapper">
            <form>
                <section class="layout">
                    <div>
                        <span id="elem-wrapper">
                            <label>Nom :</label> <br/>
                            <input type="text" />
                        </span><br/><br/>

                        <span id="elem-wrapper">
                        <label>Prix :</label><br/>  
                            <input type="text" name="prix" placeholder=" €"/>
                        </span><br/><br/>

                        <span id="elem-wrapper">
                            <label>Description :</label> <br/>
                            <input type="text" name="description" />
                        </span><br/><br/>
                            
                        <span id="elem-wrapper">
                            <label>Image :</label> <br/>
                            <input type="file" name="image" accept="image/png, image/jpeg" />
                            <img type="image/png, image/jpeg" placeholder="preview" src="" />
                        </span>
                    </div>
                    <div>
                        <span id="elem-wrapper">
                            <label for="category">Catégorie  :</label>
                            <select name="category"></select>
                        </span>
                    </div>
                </section>
            </form>
        </div>
    );
}
export default ProductForm;