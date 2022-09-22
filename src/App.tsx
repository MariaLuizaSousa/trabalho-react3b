
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Contato } from "./paginas/Contatos";
import {Home} from './paginas/Home';
import { Servico } from "./paginas/Servico";
import { Menu} from "./componentes/Menu";


function App() {
  return (
   <>
   <BrowserRouter>
      <Menu />
       <Routes> 
            <Route path='/home' element={<Home/>}> </Route>
            <Route path='/contato' element={<Contato/>}> </Route>
            <Route path='/servico' element={<Servico/>}> </Route>
       </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
