import {useState,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom';

import { GetUser,Edit } from '../services/api'

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

const EditUser = () =>{

        const [userData,setUserData] = useState({
            name:'',
            email:'',
            phone:'',
        })

        useEffect(()=>{
            getUserData();
        },[])
        const {id} = useParams();
        const navigate = useNavigate();

        const getUserData = async () => {
            try {
                const response = await GetUser(id);
                setUserData(response.data); 
                console.log(response); 
            } catch (error) {
                console.error("Error fetching user data", error);
            }
        };

        const onValueChange=(e)=>{
            setUserData(prev=>{
                console.log(userData);
                return {...prev,[e.target.name]:e.target.value}
               
            })
        }
        const handleClick = async () => {
            try {
                await Edit(userData, id);
                navigate('/users/show-all');
            } catch (error) {
                console.error("Error updating user", error);
            }
        };

    return (

       <FormContainer>
          <Heading variant="h4">Edit User Details</Heading>
            
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

            <Btn className="btn"  variant="contained" onClick={handleClick}>Edit User</Btn>

       </FormContainer>
    )
}

export default EditUser;