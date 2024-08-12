import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Axios from "axios";
import { useEffect, useState } from "react";


const Users = () => {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isSelectedUser, setIsSelectedUser] = useState({});

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    Axios.get(process.env.REACT_APP_ENDPOINT+"/api/users")
      .then((response) => {
        setUsers(response?.data?.response || []);
      })
      .catch((error) => {
        console.error("Axios error", error);
      });
  };

  const addUser = (data) => {
    setSubmitted(true);
    const payload = {
      id: data.id,
      name: data.name,
    };
    Axios.post(process.env.REACT_APP_ENDPOINT+"/api/adduser", payload)
      .then((response) => {
        getUsers();
        setSubmitted(false);
        isEdit(false);
      })
      .catch((error) => {
        console.error("Axios error", error);
      });
  };
  const updateUser = (data) => {
    setSubmitted(true);
    const payload = {
      id: data.id,
      name: data.name,
    };
    Axios.post(process.env.REACT_APP_ENDPOINT+"/api/updateusers", payload)
      .then((response) => {
        getUsers();
        setSubmitted(false);
        isEdit(false);
      })
      .catch((error) => {
        console.error("Axios error", error);
      });
  };

  const deleteUser = (data) => {
    Axios.post(process.env.REACT_APP_ENDPOINT+"/api/deleteusers", data)
      .then(() => {
        getUsers();
        
      })
      .catch((error) => {
        console.error("Axios error", error);
      });
  };

  
  return (
    <Box
      sx={{ width: "calc(100% - 100px)", margin: "auto", marginTop: "100px" }}
    >
      <UserForm 
        addUser={addUser} 
        updateUser={updateUser}
        submitted={submitted} 
        data={isSelectedUser} 
        isEdit={isEdit}
        
      />

      <UsersTable
        rows={users}
        selectedUser={(data) => {
          setIsSelectedUser(data);
          setIsEdit(true);
        }}
        deleteUser={data =>window.confirm('Are you sure you want to delete this user?') && deleteUser(data)}
      />
    </Box>
  );
};
export default Users;
