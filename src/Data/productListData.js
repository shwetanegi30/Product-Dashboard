import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export const columnFunction = (state, setState) => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'product',
          headerName: 'Product',
          width: 200,
          renderCell: ({row}) => {
              return (
                <div className='producListdata'>
                    <img src={ row.img } alt={row.name}
                    className='productListaImage'
                    />
                    {row.name}
                </div>
              )
          },  
        },
        {
          field: 'stock',
          headerName: 'Stock',
          width: 200,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: ({row}) => {

                const handleDelete = (id) => {
                    setState( state.filter( user => user.id !== id ) );
                }  
                return (
                    <>
                        <Link to={'/product/' + row.id}>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline 
                            className='productListDelete'
                            onClick={ () => handleDelete(row.id) }
                        />
                    </>
                  )    
            },  
        },
    ];
    return columns;
}


export const rows = [
    { 
        id: 1, 
        name: 'iPhone 14', 
        img: 'https://imageio.forbes.com/specials-images/imageserve/627fa3b6a736222d2161069c/Apple--iPhone-14--iPhone-14-Pro--iPhone-14-Max--iPhone-14-Pro-Max--new-iPhone-/0x0.jpg?format=jpg&crop=1835,1375,x402,y49,safe&width=960',
        stock: '149',
        status: 'active',
        price: '$120.00',
    },
    { 
        id: 2, 
        name: 'iPhone 14', 
        img: 'https://imageio.forbes.com/specials-images/imageserve/627fa3b6a736222d2161069c/Apple--iPhone-14--iPhone-14-Pro--iPhone-14-Max--iPhone-14-Pro-Max--new-iPhone-/0x0.jpg?format=jpg&crop=1835,1375,x402,y49,safe&width=960',
        stock: '149',
        status: 'active',
        price: '$120.00',
    },
    { 
        id: 3, 
        name: 'iPhone 14', 
        img: 'https://imageio.forbes.com/specials-images/imageserve/627fa3b6a736222d2161069c/Apple--iPhone-14--iPhone-14-Pro--iPhone-14-Max--iPhone-14-Pro-Max--new-iPhone-/0x0.jpg?format=jpg&crop=1835,1375,x402,y49,safe&width=960',
        stock: '149',
        status: 'active',
        price: '$120.00',
    },
    { 
        id: 4, 
        name: 'iPhone 14', 
        img: 'https://imageio.forbes.com/specials-images/imageserve/627fa3b6a736222d2161069c/Apple--iPhone-14--iPhone-14-Pro--iPhone-14-Max--iPhone-14-Pro-Max--new-iPhone-/0x0.jpg?format=jpg&crop=1835,1375,x402,y49,safe&width=960',
        stock: '149',
        status: 'active',
        price: '$120.00',
    },
    { 
        id: 5, 
        name: 'iPhone 14', 
        img: 'https://imageio.forbes.com/specials-images/imageserve/627fa3b6a736222d2161069c/Apple--iPhone-14--iPhone-14-Pro--iPhone-14-Max--iPhone-14-Pro-Max--new-iPhone-/0x0.jpg?format=jpg&crop=1835,1375,x402,y49,safe&width=960',
        stock: '149',
        status: 'active',
        price: '$120.00',
    },
    { 
        id: 6, 
        name: 'iPhone 14', 
        img: 'https://imageio.forbes.com/specials-images/imageserve/627fa3b6a736222d2161069c/Apple--iPhone-14--iPhone-14-Pro--iPhone-14-Max--iPhone-14-Pro-Max--new-iPhone-/0x0.jpg?format=jpg&crop=1835,1375,x402,y49,safe&width=960',
        stock: '149',
        status: 'active',
        price: '$120.00',
    },
    { 
        id: 7, 
        name: 'iPhone 14', 
        img: 'https://imageio.forbes.com/specials-images/imageserve/627fa3b6a736222d2161069c/Apple--iPhone-14--iPhone-14-Pro--iPhone-14-Max--iPhone-14-Pro-Max--new-iPhone-/0x0.jpg?format=jpg&crop=1835,1375,x402,y49,safe&width=960',
        stock: '149',
        status: 'active',
        price: '$120.00',
    },
    { 
        id: 8, 
        name: 'iPhone 14', 
        img: 'https://imageio.forbes.com/specials-images/imageserve/627fa3b6a736222d2161069c/Apple--iPhone-14--iPhone-14-Pro--iPhone-14-Max--iPhone-14-Pro-Max--new-iPhone-/0x0.jpg?format=jpg&crop=1835,1375,x402,y49,safe&width=960',
        stock: '149',
        status: 'active',
        price: '$120.00',
    },
    { 
        id: 9, 
        name: 'iPhone 14', 
        img: 'https://imageio.forbes.com/specials-images/imageserve/627fa3b6a736222d2161069c/Apple--iPhone-14--iPhone-14-Pro--iPhone-14-Max--iPhone-14-Pro-Max--new-iPhone-/0x0.jpg?format=jpg&crop=1835,1375,x402,y49,safe&width=960',
        stock: '149',
        status: 'active',
        price: '$120.00',
    },
    { 
        id: 10, 
        name: 'iPhone 14', 
        img: 'https://imageio.forbes.com/specials-images/imageserve/627fa3b6a736222d2161069c/Apple--iPhone-14--iPhone-14-Pro--iPhone-14-Max--iPhone-14-Pro-Max--new-iPhone-/0x0.jpg?format=jpg&crop=1835,1375,x402,y49,safe&width=960',
        stock: '149',
        status: 'active',
        price: '$120.00',
    },

]