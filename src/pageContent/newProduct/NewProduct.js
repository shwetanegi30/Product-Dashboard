import './newProduct.css';


const NewProduct = () => {
    return (
        <div className='newProduct'>
            <div class='productTitleContainer'>
                <h1 className='productTitle'>New Product</h1>
            </div>
            <form className='newProductForm'>
                <div className='productFormLeft'>
                    <label className='productFormLeft'>Product Name</label>
                    <input type='text' placeholder='Apple Airpod' />

                    <label>In Stock</label>
                    <select name='inStock' id='inStock' >
                        <option value='yes'>Yes</option>
                        <option value='no' >No</option>  
                    </select>

                    <label for='file'>
                        File
                    </label>
                    <input type='file' id='file' />

                    <button className='productButton'>Create</button>
                </div>      
            </form>
        </div>
    )
}

export default NewProduct;
