import './App.css';
import Footer from './componentes/Footer';
import Nav from './componentes/Nav';

function App() {
  return (
    <div className="App">
      <header>
        <img src="/logo192.png" alt="Logo" width="40"/>
        <Nav/>
      </header>

      <div className="anuncio">
        <p>Bienvenido, esto es una página informativa sobre React.</p>
      </div>

      <main>
        <section className='primera-seccion'>
          <div className='contenido'>
            <h1>¿Qué es React?</h1>
            <p>React es una biblioteca de JavaScript de código abierto, creada por Facebook, para construir interfaces de usuario interactivas y dinámicas. Se utiliza principalmente para desarrollar aplicaciones web de una sola página (SPA) y también puede utilizarse para desarrollar aplicaciones móviles nativas con React Native. <br/><br/>
            React permite a los desarrolladores crear componentes reutilizables que representan partes de la interfaz de usuario. Estos componentes pueden ser combinados para construir interfaces complejas y dinámicas.</p>
          </div>
          <div className='caracteristicas'>
            <div>
              <h2>Utiliza "DOM virtual" para optimizar el rendimiento.</h2>
            </div>
            <div>
              <h2>Utiliza (JSX) una sintaxis similar a HTML para<br/> describir la estructura de los componentes.</h2>
            </div>
          </div>
        </section>

        <section className='segunda-seccion'>
          <h1>¿Para qué sirve React?</h1>
          <div className='caracteristicas'>
            <div>
              <h2>Crear aplicaciones web rápidas y fluidas gracias a su DOM virtual que optimiza el rendimiento.</h2>
            </div>
            <div>
              <h2>Construir componentes reutilizables permitiendo desarrollar interfaces consistentes y mantenibles.</h2>
            </div>
            <div>
              <h2>Hacer aplicaciones interactivas con funciones en tiempo real.</h2>
            </div>
          </div>
        </section>

        <section className='tercera-seccion'>
            <h1>¿Por qué es una herramienta popular en desarrollo frontend?</h1>
            <p>Es una herramienta popular porque combina alto rendimiento con una curva de aprendizaje accesible: su sistema de componentes reutilizables agiliza el desarrollo, el DOM virtual optimiza la velocidad de las aplicaciones, y su flexibilidad permite integrarse fácilmente con otras tecnologías. Además, cuenta con el respaldo de una gran comunidad y herramientas de soporte, lo que lo hace ideal tanto para proyectos pequeños como para aplicaciones empresariales complejas.</p>
        </section>

        <section className='despedida'>
          <img src='/logo192.png' width="100"/>
          <h1>Gracias por tu lectura</h1>
          <div>ㅤ</div>
        </section>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
