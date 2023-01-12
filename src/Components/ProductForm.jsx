import { useEffect, useState } from 'react';
import Select from 'react-select';
import { getCategories } from '../Services/Category.Service';
import { getCategoryCharacteristics } from '../Services/Category.Service';
import { createProduct } from '../Services/Product.Service';
import { useNavigate } from "react-router-dom";
import Error from "./Error";


const ProductForm = ({ onClick }) => {

    const [options, setOptions] = useState([""]);
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [cars, setCars] = useState();
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState();
    const [toggle, setToggle] = useState(false)
    const [customStyles, setCustomStyles] = useState()


    const navigate = useNavigate();


    useEffect(() => {
        const getData = async () => {
            const arr = [];
            getCategories().then((response) => response.json()).then((res) => {
                res.map((category) => {
                    return arr.push({ value: category.id, label: category.name });
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
    }, [selectedFile]);

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
                setCategory(res.id);
            });
    }

    function handleClick(e) {
        e.preventDefault();
        let caracteristiques = [];
        let inputsCara = document.querySelectorAll("input.caracteristiqueValue");
        let empty = false;
        inputsCara.forEach(cara => {
            if ((cara.value && cara.type != "checkbox") || cara.type == "checkbox") {
                if (cara.type == "checkbox") {
                    caracteristiques.push({
                        characteristicTypeId: cara.id,
                        value: cara.checked
                    })
                } else {
                    caracteristiques.push({
                        characteristicTypeId: cara.id,
                        value: cara.value
                    })
                }
            } else {
                empty = true;
            }

        })
        if (name != "" && price != 0 && description != "" && category && empty == false) {
            console.log('caracteristique', caracteristiques);
            createProduct(name, description, price, category, caracteristiques);
            navigate('/products');
        } else {
            setToggle(true);
        }


    }


    return (
        <div className='container'>
            <div className='row '>
                <div className='col-6 pe-5 border-end border-primary'>
                    <div className='me-3'>
                        {toggle && (<Error message="Un champs ou plusieurs sont vide" />)}
                        <span id="elem-wrapper">
                            <label className='text-white h2'>Nom :</label> <br />
                            <input className='bg-info mt-1 text-primary border-0 rounded w-100 inputHeight' type="text" onChange={(e) => setName(e.target.value)} />
                        </span><br /><br />
                        <span id="elem-wrapper">
                            <label className='text-white h2'>Prix :</label><br />
                            <input className='bg-info mt-1 text-primary border-0 rounded w-100 inputHeight' type="number" name="prix" onChange={(e) => setPrice(e.target.value)} placeholder=" €" />
                        </span><br /><br />

                        <span id="elem-wrapper">
                            <label className='text-white h2'>Description :</label> <br />
                            <textarea className='bg-info mt-1 text-primary border-0 rounded w-100' rows="3" name="description" onChange={(e) => setDescription(e.target.value)} />
                        </span><br /><br />

                        <span id="elem-wrapper">
                            <label className='text-white h2'>Image :</label> <br />
                            <input className='bg-info mt-1 text-primary border-0 rounded w-100 inputHeight' type="file" onChange={onSelectFile} name="image" accept="image/png, image/jpeg" />
                            {selectedFile && <img className='rounded imagePreview pt-3' src={preview} />}
                        </span>
                    </div>
                </div>
                <div className='col-6' >
                    <div className='ms-4 ps-4'>
                        <span id="elem-wrapper">
                            <label htmlFor="category" className='text-white h2'>Catégorie  :</label>
                            <div className='pb-4 border-bottom border-primary'>
                                <Select placeholder="Select an individual" options={options} onChange={onSelectCategory} required />
                            </div>
                        </span>
                        <br />

                        <div id="caracteristiques">
                            {cars != null && Array.from(cars).map((c, index) => {
                                return <div key={index}><label className='text-white h2'>{c.name} : </label><br /><input className='caracteristiqueValue bg-info mt-1 text-primary border-0 rounded w-100 inputHeight mb-2' id={c.id} type={c.type}></input><br /></div>;
                            })}
                        </div>
                        <br/>
                        <button className='btn btn-primary mb-3' type="submit" onClick={handleClick}>
                            Valider
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default ProductForm;