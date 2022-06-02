import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar/navBar';
import Home from './Pages/Home/home';
import Quartos from './Pages/Quartos/quartos';
import Detalhes from './Pages/Detalhes/detalhes';
import Hotel from './Pages/Hotel/hotel';
import Restaurante from './Pages/Restaurante/restaurante';
import Spa from './Pages/Spa/spa';
import Academia from './Pages/Academia/academia';
import Pet from './Pages/Pet/pet';
import Login from './Pages/Login/login';
import ListaEmail from './Components/ListaEmail/listaEmail';
import Footer from './Components/Footer/footer';
import Error from './Pages/Error/error';

export default function App(){
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/hotel" element={<Hotel/>}/>
                <Route exact path="/restaurante" element={<Restaurante/>}/>
                <Route exact path="/spa" element={<Spa/>}/>
                <Route exact path="/academia" element={<Academia/>}/>
                <Route exact path="/pet" element={<Pet/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/quartos" element={<Quartos/>}/>
                <Route exact path="/detalhes" element={<Detalhes/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
            <ListaEmail/>
            <Footer/>
        </BrowserRouter>
    );
}

