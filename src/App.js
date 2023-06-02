
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import FrontPage from './Component/FrontPage';
import AddBook from './Component/AddBook';
import Library from './Component/Library';
import { LibraryContext } from './Component/Context';
import { useState } from 'react';

function App() {
  
  const [formData,setFormData]= useState([])
  return (
    
    <div className="App">
      <BrowserRouter>
      <LibraryContext.Provider value={{formData, setFormData}} >
      <Routes>
        <Route path='/' Component={FrontPage}/>
        <Route path='/addbook' Component={AddBook} />
        <Route path='/library/:id' Component={Library} />
      
      </Routes>
      </LibraryContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
