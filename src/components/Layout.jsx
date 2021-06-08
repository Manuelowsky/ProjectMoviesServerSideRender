//Importando React
import React from 'react';
//Importando Header
import Header from './Header';
//Importando Footer 
import Footer from './Footer';

//Creando componente
const Layout = ({children}) => {
    return ( 
        <div>
                {   //Layout recibe un hijo desde App.js donde estan las rutas
                    children
                }
            <Footer/>
        </div>
    );
}

//Exportando componente
export default Layout;