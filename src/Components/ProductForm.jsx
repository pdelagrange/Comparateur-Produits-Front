import { useEffect } from 'react';
import { useState } from 'react';
import Select from 'react-select';

const ProductForm = () => {

    const selectableOptions = [
        { value: 'Adam', label: 'Adam Geoffrey' },
        { value: 'Jane', label: 'Jane Hibbard' },
        { value: 'Anabelle', label: 'Anabelle Einstein' },
        { value: 'Zeus', label: 'Zeus McQueen' }
      ]

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

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
                            <input type="file" onChange={onSelectFile} name="image" accept="image/png, image/jpeg" />
                            {selectedFile &&  <img src={preview} /> }
                        </span>
                    </div>
                    <div>
                        <span id="elem-wrapper">
                            <label for="category">Catégorie  :</label>
                            <Select
                            placeholder= "Select an individual"
                            options={selectableOptions}
                            />
                        </span>
                    </div>
                </section>
            </form>
        </div>
    );
}
export default ProductForm;