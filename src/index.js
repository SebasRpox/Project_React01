import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import InsigniaNew from './page/InsigniaNew.jsx';
ReactDOM.render(
  <>
  <InsigniaNew/>
  </>, document.getElementById("root")
);
//import App from './App';
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/
/* 
const container = document.getElementById("root");
ReactDOM.render(
  <Insignia firtsName="Sebastian" LastName="Restrepo" Facebook="Sebas Restrepo"/>, container
) */


//Code JSX
/*const jsx = <h1>Hola, estudiantes de la media</h1>
const container = document.getElementById('root')

ReactDOM.render(jsx,container)*/

//Code JS
/* 
const elemento = React.createElement('h1', {}, 'Hola, estudiante')
const container = document.getElementById("root")

ReactDOM.render(
  elemento,
  container
) */

/* 
const elemento = React.createElement('a', {href: 'https://github.com/SebasRpox'}, 'GitHub')

const container = document.getElementById("root")
ReactDOM.render(
  elemento,
  container
) */
/* 
const name = "Sebas"
const elemento = React.createElement('h1', {}, `Hola, soy ${name}`)
const container = document.getElementById("root")

ReactDOM.render(
  elemento,
  container
) *//* 
const elemento = React.createElement('div', {}, 
React.createElement('h1', {}, 'Hola Sebas'),
React.createElement("p", {}, "Soy desarollador Fronted y Backend"))
const container = document.getElementById("root")

ReactDOM.render(
  elemento,
  container
) */
//En JSX
/* 
const name = "Sebas"
const jsx = <h1>Hola soy {name}</h1>
const container = document.getElementById("root")

ReactDOM.render(
  jsx,
  container
)
 */
/* 
const suma = () => 3^5;
const jsx = <h1>Hola la suma es: {suma()}</h1>
const container = document.getElementById("root")

ReactDOM.render(
  jsx,container
) */

// JSX 
/* 
const jsx = 
<div>
  <h1>Hola mundo, soy Sebas</h1>
  <p>Soy desarrollador Fronted- Backend</p>
</div>

const container = document.getElementById("root")

ReactDOM.render(jsx,container) */

// JS
