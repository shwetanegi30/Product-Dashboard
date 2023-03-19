import { Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Chart from '../../components/charts/Chart';
import { productData } from '../../Data/chartData';
import './product.css';


const Product = () => {
    return (
        <div className='product'>
            <div className='productTitleContainer'>
                <h1 className='productTitle'>Product</h1>
                <Link to='/newProduct'>
                    <button className='productAddButton'>Create</button>
                </Link>
            </div>

            <div className='productTop'>
                <div className='productTopLeft'>
                    <Chart data={ productData } dataKey='Sales' title='Sales Performance' />
                </div>
                <div className='productTopRight'>
                    <div className='productInfoTop'>
                        <img src='https://as01.epimg.net/meristation/imagenes/2021/06/25/betech/1624657908_253233_1624658099_noticia_normal_recorte1.jpg' alt='airpods' className='productInfoImg' />
                        <span className='productName'>Apple Airpods</span>
                    </div>
                    <div className='productInfoBottom'>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>id: </span>
                            <span className='productInfoValue'>123</span>
                        </div>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>sales:</span>
                            <span className='productInfoValue'>5.123</span>
                        </div>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>active:</span>
                            <span className='productInfoValue'>yes</span>
                        </div>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>in stock:</span>
                            <span className='productInfoValue'>no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='productBottom'>
                <form className='productForm'>
                    <div className='productFormLeft'>
                        <label className='productFormLeft'>Product Name</label>
                        <input type='text' placeholder='Apple Airpod' />

                        <label>In Stock</label>
                        <select name='inStock' id='inStock' >
                            <option value='yes'>Yes</option>
                            <option value='no' >No</option>  
                        </select>

                        <label className='productFormLeft'>Active</label>
                        <select name='inStock' id='inStock' >
                            <option value='yes'>Yes</option>
                            <option value='no' >No</option>  
                        </select>
                    </div>
                    <div className='productFormRight'>
                        <div className='productUpload'>
                            <img src='https://us.123rf.com/450wm/sebastiangauert/sebastiangauert1503/sebastiangauert150300051/38263012-empresaria-que-lee-la-informaci%C3%B3n-en-su-pc-de-la-tableta-como-ella-se-sienta-en-su-escritorio-en-la-.jpg?ver=6' alt='formImage' className='productUploadImg' />
                            <label htmlFor='file'>
                                <Publish className='buttonFile'/>
                            </label>
                            <input type='file' id='file' style={{display: 'none'}}/>
                        </div>
                        <button className='productButton'>Update</button>
                    </div>      
                </form>
            </div>
        </div>
    )
}

export default Product;
