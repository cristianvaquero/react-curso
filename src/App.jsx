import { useState } from 'react'
import Titulo from './components/Titulo/Titulo';
import NavBar from './components/NavBar/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

function App() {



  return (
    
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> React </p>
        <Titulo />

      </header>
    </div>
  );
}

export default App;

















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


