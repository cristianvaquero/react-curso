// import { useState } from 'react'
// import Titulo from '../components/Titulo/Titulo';
import NavBar from '../components/NavBar/NavBar';
import Tarjeta from '../components/Tarjeta/Tarjeta'
import Titulo from '../components/Titulo/Titulo'
import ItemListContainer from "./ItemListContainer"



function RoutesApp() {

    const manejarCount = (count) => {
        alert(`Agregaste ${count} productos`); }
    
    // let titulo = 'Soy el TITULO';
    // const titu = 'Soy un titulo de children' //estado
    return (    

        <>
            <NavBar />
            {/* <Titulo 
                subti='Soy el titulo del componentes I'
            /> */}
            
            <header className="App-header">
                    <br/><br/>
                <Tarjeta />
                    <br/>
                
                <ItemListContainer manejarCount = { manejarCount } />
                <br/><br/>

                {/* <ItemListContainer greeting="Desafio React" /> */}
                    {/* <br/>
                    <hr />
                    <Titulo 
                        tituloProps={ titulo }
                        subti='Subtitulo'
                        texto='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'                    />
                    <br/>
                    <hr />
                    <Titulo
                        subti='Soy un texto de children'
                        tituloProps= { titu }
                    />
                </ItemListContainer> */}
            </header>
        </>
    );
}

export default RoutesApp;






  // // Ejemplo 1
  // const [count, setCount] = useState(0)
  //   let condition = true
  //   let result = ''

  //   if (condition) {
  //     result = 'verdadero'
  //   } else{
  //     result = 'falso'
  //   }
  //   console.log(`El resultado es: ${ condition ? 'verdadero' : 'falso'} `);

  //   // Ejemplo 2
  //   const array = [ 'b', 'c', 'd' ]
  //   let a = 'a'

  //   const newArray = [ ...array, a ]
  //   console.log(newArray);

  //   // Ejemplo 3 - Destructuracion
  //   const obj = {
  //     nombre : 'josé',
  //     apellido : 'pérez'
  //   }

  //   // const nombre = obj.nombre
  //   // const apellido = obj.apellido
  //   const { nombre, apellido: lastName, edad = 29 } = obj

  //   console.log(nombre, lastName, edad)


