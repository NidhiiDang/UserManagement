import { useEffect,useState } from "react";

import { TableBody, TableCell, TableHead, TableRow ,Table, styled,Button} from "@mui/material";
import {Link} from 'react-router-dom'

import { All, Delete } from "../services/api";

const Thead = styled(TableRow)`
        background:#808080;
        & >th{
            font-size: 1.2rem;
            color:white;
        }
        
`
const FullTable = styled(Table)`
       width:60%;
       margin: 50px auto 0 auto;
`

const AllUsers = () =>{
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        getAllUsers();
    },[])

    const getAllUsers = async () => {
        try {
          const response = await All(); 
          setUsers(response.data);
        } catch (error) {
          console.error("Error fetching users", error);
        }
      };
      const deleteUser = (id) =>{
        try {
           Delete(id);
           All();
        } catch (error) {
          console.error("Error fetching users", error);
        }
      }

    return (
        <FullTable>
      <TableHead>
        <Thead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Actions</TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {
        users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button variant="contained" style={{ marginRight: 10,marginLeft:0 }} component={Link} to={`/edit/user/${user.id}`}> Edit </Button>
              <Button variant="contained" color="secondary" onClick={()=>deleteUser(user.id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))
        }
      </TableBody>
    </FullTable>
);
}
export default AllUsers;