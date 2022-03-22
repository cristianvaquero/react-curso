import React from "react";
import RoutesApp from "./container/RoutesApp";
// import ItemListContainer from "./container/ItemListContainer";

// estilos css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

    // const manejarCount = (count) => {
    //     alert(`Agregaste ${count} productos`);
    
    
    return (    
        <>
            {/* <ItemListContainer manejarCount = { manejarCount } /> */}
            <RoutesApp />
            
        </>
    )
}

export default App;