import { DeleteOutline } from "@material-ui/icons";

export const columnFunction = (state, setState) => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: ({ row }) => {
        return (
          <div className="userListUser">
            <img
              src={row.avatar}
              alt={row.userName}
              className="UserListImage"
            />
            {row.userName}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
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
              className="userListDelete"
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
    userName: "Eun Berth",
    avatar: "https://robohash.org/porronumquamid.png",
    email: "eun@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 2,
    userName: "Terry",
    avatar:  "https://robohash.org/hicveldicta.png",
    email: "atuny0@sohu.com",
    status: "active",
    transaction: "$160.00",
  },
  {
    id: 3,
    userName: "Sheldon",
    avatar:  "https://robohash.org/doloremquesintcorrupti.png",
    email: "hbingley1@plala.or.jp",
    status: "active",
    transaction: "$55.00",
  },
  {
    id: 4,
    userName: "Terrill",
    avatar: "https://robohash.org/consequunturautconsequatur.png",
    email: "rshawe2@51.la",
    status: "active",
    transaction: "$26.00",
  },
  {
    id: 5,
    userName: "Miles",
    avatar:  "https://robohash.org/facilisdignissimosdolore.png",
    email: "yraigatt3@nature.com",
    status: "active",
    transaction: "$40.00",
  },
  {
    id: 6,
    userName:  "Mavis",
    avatar:  "https://robohash.org/adverovelit.png",
    email: "kmeus4@upenn.edu",
    status: "active",
    transaction: "$170.00",
  },
  {
    id: 7,
    userName:"Alison",
    avatar: "https://robohash.org/laboriosamfacilisrem.png",
    email: "jtreleven5@nhs.uk",
    status: "active",
    transaction: "$87.00",
  },
  {
    id: 8,
    userName: "Oleta",
    avatar:  "https://robohash.org/cupiditatererumquos.png",
    email: "dpettegre6@columbia.edu",
    status: "active",
    transaction: "$20.00",
  },
  {
    id: 9,
    userName: "Ewell",
    avatar: "https://robohash.org/quiaharumsapiente.png",
    email: "ggude7@chron.com",
    status: "active",
    transaction: "$44.00",
  },
  {
    id: 10,
    userName: "Corkery",
    avatar: "https://robohash.org/excepturiiuremolestiae.png",
    email: "nloiterton8@aol.com",
    status: "active",
    transaction: "$200.00",
  },
];
