import { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { columnFunction, rows } from '../../Data/UserListData';
import './userList.css';



const UserList = () => {
    const [dataRows, setdataRows] = useState(rows)
  
    return (
        <div className='userList'>
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

export default UserList;
