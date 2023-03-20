import { useState } from 'react';
import './productList.css';
import { DataGrid } from '@material-ui/data-grid';
import { columnFunction, rows } from '../../Data/productListData';


const ProductList = () => {
    const [dataRows, setdataRows] = useState(rows);

    return (
        <div className='productList'>
             <DataGrid
                rows={dataRows}
                columns={ columnFunction(dataRows,setdataRows) }
                pageSize={10}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default ProductList;
