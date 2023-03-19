import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { columnFunction, rows } from '../../Data/UserListData';
import { useState } from 'react';


const UserList = () => {
    const [dataRows, setdataRows] = useState(rows)
  
    return (
        <div className='userList'>
           <DataGrid
                rows={dataRows}
                columns={ columnFunction(dataRows,setdataRows) }
                pageSize={8}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default UserList;
