import './App.css';
import NavBar from './componenets/NavBar';
import AddUser from './componenets/AddUser';
import AllUsers from './componenets/AllUsers';
import Usermanagement from './componenets/Usermanagement';
import EditUser from './componenets/EditUser';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path='/' element={<Usermanagement/>}></Route>
                    <Route path='/user/add' element={<AddUser/>}></Route>
                    <Route path='/users/show-all' element={<AllUsers/>}></Route>
                    <Route path='/edit/user/:id' element={<EditUser/>}></Route>
                </Routes>
        </BrowserRouter>

    </div>
  );
}
export default App;
