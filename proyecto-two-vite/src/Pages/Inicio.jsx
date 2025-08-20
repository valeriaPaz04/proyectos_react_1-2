const Inicio =()=>{
    return(
        <>
        <section className='primera-seccion'>
          <div className='contenido'>
            <h1>Componentes en React</h1>
            <p>Los componentes en React son bloques de construcción fundamentales que encapsulan tanto la lógica como la presentación, permitiendo crear aplicaciones modulares donde cada componente maneja su propio estado y ciclo de vida. <br/><br/>Estos componentes pueden ser funcionales (usando hooks como useState y useEffect) o de clase, y se comunican entre sí mediante props para pasar datos de componentes padre a hijo, mientras que para manejar datos compartidos entre múltiples componentes se utiliza el estado global o context API, creando así una arquitectura escalable y mantenible.</p>
          </div>
          <div className='caracteristicas'>
            <div>
              <h2>Los componentes son <br/>reutilizables, lo que reduce la duplicación de código.</h2>
            </div>
            <div>
              <h2>En React los datos van <br/>de componente padre a hijo <br/>mediante props, haciendo <br/>la aplicación más predecible <br/>y fácil de depurar.</h2>
            </div>
          </div>
        </section>

        <section className='tercera-seccion' style={{paddingBottom: '90px', paddingTop: '0px'}}>
            <h1>¿Qué es JSX?</h1>
            <p>JSX es una extensión de JavaScript que permite escribir elementos similares a HTML dentro del código JavaScript. Desarrollado por Facebook para React, combina lógica y marcado en un solo lugar, eliminando la separación de archivos HTML y JS. Aunque parece HTML, se transpila a JavaScript puro y permite incrustar expresiones JavaScript dentro de llaves para mostrar datos dinámicos y manejar lógica, creando código más legible y eficiente.</p>
        </section>

        <section className='segunda-seccion'>
          <h1>Diferencias entre JS y JSX</h1>
          <div className='caracteristicas'>
            <div>
              <h2>JavaScript usa sintaxis de programación pura, JSX permite escribir elementos tipo HTML en el código.</h2>
            </div>
            <div>
              <h2>JavaScript se ejecuta directamente, JSX necesita transpilarse a JavaScript primero.</h2>
            </div>
            <div>
              <h2>En JavaScript las variables se usan directamente, en JSX van dentro de llaves para ser evaluadas.</h2>
            </div>
          </div>
        </section>

        <section className='tercera-seccion'>
            <h1>¿Qué es Layout?</h1>
            <p>Un layout en React es un componente que define la estructura común de la aplicación (header, footer, navegación) que permanece constante mientras cambia el contenido principal entre páginas. Actúa como un contenedor padre que envuelve otros componentes, evitando duplicar elementos estructurales y manteniendo consistencia visual en toda la aplicación mediante el uso de props.children o sistemas de enrutamiento.</p>
        </section>
        </>
    )
}
export default Inicio;