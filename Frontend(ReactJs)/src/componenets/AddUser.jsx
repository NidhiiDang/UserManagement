import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

import { Add } from '../services/api'

import { FormGroup,FormControl, InputLabel ,Input, Typography,styled,Button} from "@mui/material";

const FormContainer = styled(FormGroup)`
    width:50%;
    margin:40px auto 0 auto;
    & > div{
    margin:7px;
    }
`
const Heading = styled(Typography)`
        text-align:center;
        color: #808080;
        margin: 20px auto 10px auto;
        font-size: 1.5rem;
`
const Btn = styled(Button)`
        background: #808080;
        width:max-content;
        margin: 30px;
`

const AddUser = () =>{

        const [userData,setUserData] = useState({
            name:'',
            email:'',
            phone:'',
        })

        const navigate = useNavigate();

        const onValueChange=(e)=>{
            setUserData(prev=>{
                console.log(userData);
                return {...prev,[e.target.name]:e.target.value}
               
            })
        }
        const handleClick = async () => {
            console.log('Submitted Data:', userData);
            try {
              await Add(userData);  
              navigate('/users/show-all');  
            } catch (error) {
              console.error('Error adding user:', error);
            }
          };

    return (
       <FormContainer>
          <Heading variant="h4">Add User Details</Heading>
            
            <FormControl>
                 <InputLabel>Name</InputLabel>
                 <Input value={userData.name} name="name" onChange={ (e)=> onValueChange(e)}/>
            </FormControl>
            
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input value={userData.email} name="email" onChange={ (e)=> onValueChange(e)}/>
            </FormControl>

            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input value={userData.phone} name="phone" onChange={ (e)=> onValueChange(e)}/>
            </FormControl>

            <Btn className="btn"  variant="contained" onClick={handleClick}>Add User</Btn>

       </FormContainer>
    )
}

export default AddUser;