import { DeleteOutline } from "@material-ui/icons";

export const columnFunction = (state, setState) => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: ({ row }) => {
        return (
          <div className="producListdata">
            <img src={row.img} alt={row.name} className="productListaImage" />
            {row.name}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: ({ row }) => {
        const handleDelete = (id) => {
          setState(state.filter((user) => user.id !== id));
        };
        return (
          <>
            <button className="userListEdit">Edit</button>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(row.id)}
            />
          </>
        );
      },
    },
  ];
  return columns;
};

export const rows = [
  {
    id: 1,
    name: "iPhone 14",
    img: "https://i.dummyjson.com/data/products/1/1.jpg",
    stock: "149",
    status: "active",
    price: "$120.00",
  },
  {
    id: 2,
    name: "iPhone X",
    img: "https://i.dummyjson.com/data/products/2/1.jpg",
    stock: "34",
    status: "active",
    price: "$100.00",
  },
  {
    id: 3,
    name: "Samsung Universe 9",
    img: "https://i.dummyjson.com/data/products/3/1.jpg",
    stock: "36",
    status: "active",
    price: "$70.00",
  },
  {
    id: 4,
    name: "OPPOF19",
    img: "https://i.dummyjson.com/data/products/4/1.jpg",
    stock: "123",
    status: "active",
    price: "$70.00",
  },
  {
    id: 5,
    name: "Huawei P30",
    img: "https://i.dummyjson.com/data/products/5/1.jpg",
    stock: "32",
    status: "active",
    price: "$50.00",
  },
  {
    id: 6,
    name:"MacBook Pro",
    img: "https://i.dummyjson.com/data/products/6/1.png",
    stock: "83",
    status: "active",
    price: "$170.00",
  },
  {
    id: 7,
    name: "Samsung Galaxy Book",
    img: "https://i.dummyjson.com/data/products/7/1.jpg",
    stock: "50",
    status: "active",
    price: "$50.00",
  },
  {
    id: 8,
    name: "Infinix INBOOK",
    img: "https://i.dummyjson.com/data/products/9/1.jpg",
    stock: "96",
    status: "active",
    price: "$75.00",
  },
  {
    id: 9,
    name: "iPhone 9",
    img: "https://i.dummyjson.com/data/products/1/4.jpg",
    stock: "55",
    status: "active",
    price: "$100.00",
  },
  {
    id: 10,
    name: "MacBook Pro",
    img: "https://i.dummyjson.com/data/products/6/1.png",
    status: "active",
    price: "$130.00",
  },
];
