import { useEffect } from 'react';
import { useState } from 'react';
import Select from 'react-select';
import { getCategories } from '../Services/Category.Service';
import { getCategoryCharacteristics } from '../Services/Category.Service';
import { createProduct } from '../Services/Product.Service';

const ProductForm = ({ onClick }) => {
    
    const submit = () => {
        onClick();
      };    

    const [options, setOptions] = useState([""]);
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [cars, setCars] = useState();
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState();
    const [caracteristiques, setCaracteristiques] = useState("");
  
    
    useEffect(() => {
        const getData = async () => {
          const arr = [];
          getCategories().then((response) => response.json()).then((res) => {
            res.map((category) => {
              return arr.push({value: category.id, label: category.name});
            });
            setOptions(arr)
          });
        };
        getData();
      }, []);



    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        setSelectedFile(e.target.files[0])
    }

    const onSelectCategory = e => {
        getCategoryCharacteristics(e.value).then((response) => response.json())
        .then((res) => {
            setCars(res.characteristic_types);
        });
    }

    const createProduct = () => {
        let caracteristiques = [];
        let inputsCara = document.querySelectorAll("input.caracteristiqueValue");
        let empty = false;
        inputsCara.forEach(cara => {
            if (cara.value){
                caracteristiques.push({
                    id: cara.id,
                    value: cara.value
                  })
            }else{
                empty = true;
            }
    
        });
        if (name, price, description, category, !empty){
            createProduct(name,description,price,category,caracteristiques);
            navigate('/product/add')
        }else{
            console.log("erreur");
        }
        
    
        
      }

    
    return (
        <div id="form-wrapper">
            <form>
                <section className="layout">
                    <div>
                        <span id="elem-wrapper">
                            <label>Nom :</label> <br/>
                            <input type="text" required onChange={(e) => setName(e.target.value)}/>
                        </span><br/><br/>
                        <span id="elem-wrapper">
                        <label>Prix :</label><br/>  
                            <input required type="number" name="prix" onChange={(e) => setPrice(e.target.value)} placeholder=" €"/>
                        </span><br/><br/>

                        <span id="elem-wrapper">
                            <label>Description :</label> <br/>
                            <input required type="text" name="description" onChange={(e) => setDescription(e.target.value)}/>
                        </span><br/><br/>
                            
                        <span id="elem-wrapper">
                            <label>Image :</label> <br/>
                            <input required type="file" onChange={onSelectFile} name="image" accept="image/png, image/jpeg" />
                            {selectedFile &&  <img src={preview} /> }
                        </span>
                    </div>
                    <div>
                        <span id="elem-wrapper">
                            <label htmlFor="category">Catégorie  :</label>
                            <Select placeholder= "Select an individual" options={options} onChange={onSelectCategory} required />
                                
                        </span>
                        <br/>
                        <div id="caracteristiques">
                        {cars != null && Array.from(cars).map((c, index) => {
                            return <div><label>{c.name} : </label><br/><input className='caracteristiqueValue' id={c.id} type={c.type}></input><br/></div> ;
                        })}
                        </div>
                        <br/>

                        <button onClick={submit}>Valider</button>
                    </div>
                </section>
            </form>
        </div>
    );
}
export default ProductForm;