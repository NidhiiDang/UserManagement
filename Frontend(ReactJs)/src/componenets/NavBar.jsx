import {AppBar, Toolbar, styled} from '@mui/material'
import { NavLink } from 'react-router-dom'

const Header = styled(AppBar)`
    background: #808080; 
`
const Tabs = styled(NavLink)`
    font-size: 1.2rem;
    margin: 25px;
    color: inherit;
    text-decoration: none;

`



const NavBar = () =>{
    return (
        <Header position='static'>
            <Toolbar>
                <Tabs to='/'>UserManagement</Tabs>
                <Tabs to='/users/show-all'>All Users</Tabs>
                <Tabs to='/user/add'>Add User</Tabs>
            </Toolbar>
        </Header>
    )
}
export default NavBar;