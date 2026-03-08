import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home.jsx';
import AddEmployee from './components/AddEmployee.jsx';
import ShowEmployee from './components/ShowEmployee.jsx';
import UpdateEmployee from './components/UpdateEmployee.jsx';
import Error404 from './components/Error404.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/employee/add' element={<AddEmployee />} />
          <Route path='/employee/show' element={<ShowEmployee />} />
          <Route path='/employee/update/:id' element={<UpdateEmployee />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;