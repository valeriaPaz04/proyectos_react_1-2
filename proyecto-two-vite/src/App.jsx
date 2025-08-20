import { useState } from 'react'
import './App.css'
import Layout from './Componentes/Layout'
import Rutas from './Componentes/Rutas';

function App() {
  
  return (
    <div>
      <Layout />

      <div className="anuncio">
        <p>Bienvenido, esto es una página informativa sobre React.</p>
      </div>

      <Rutas />

      <section className='despedida'>
          <img src='/logo192.png' width="100"/>
          <h1>Gracias por tu lectura</h1>
          <div>ㅤ</div>
      </section>
    </div>
  )
}

export default App
