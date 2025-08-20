const Nosotros =()=>{
    return(
        <>
        <section className='primera-seccion'>
          <div className='contenido'>
            <h1>¿Qué es Vite?</h1>
            <p>Vite es una herramienta de construcción y desarrollo moderna para aplicaciones web que ofrece un servidor de desarrollo extremadamente rápido y un proceso de build optimizado. Creado por Evan You (creador de Vue.js). <br/><br/> Vite utiliza módulos ES nativos durante el desarrollo y Rollup para producción, lo que resulta en tiempos de arranque instantáneos y actualizaciones en caliente (Hot Module Replacement) ultrarrápidas. A diferencia de bundlers tradicionales como Webpack, Vite no empaqueta todo el código durante el desarrollo, sino que sirve los módulos bajo demanda, reduciendo significativamente los tiempos de espera.</p>
          </div>
          <div className='caracteristicas'>
            <div>
              <h2>Funciona con React, Vue, <br/>Angular y otros frameworks <br/>sin configuración compleja.</h2>
            </div>
            <div>
              <h2>Viene preconfigurado con <br/>TypeScript, CSS preprocessors <br/>y otras herramientas modernas listas para usar.</h2>
            </div>
          </div>
        </section>

        <section className='segunda-seccion'>
          <h1>Características</h1>
          <div className='caracteristicas'>
            <div>
              <h2>Inicia el servidor de desarrollo en segundos, sin importar el tamaño del proyecto.</h2>
            </div>
            <div>
              <h2>Los cambios en el código se reflejan instantáneamente en el navegador sin perder el estado con Hot Module.</h2>
            </div>
            <div>
              <h2>Usa Rollup para generar bundles pequeños y eficientes en producción.</h2>
            </div>
          </div>
        </section>

        <section className='tercera-seccion'>
            <h1>Ventajas de usar Vite</h1>
            <p>React ofrece múltiples ventajas como componentes reutilizables que aceleran el desarrollo, Virtual DOM que optimiza el rendimiento actualizando solo elementos necesarios, y un ecosistema robusto con amplia comunidad y documentación. Su flexibilidad permite integrarse con otras bibliotecas, tiene una curva de aprendizaje accesible para desarrolladores JavaScript, y cuenta con el respaldo continuo de Meta, garantizando estabilidad y actualizaciones regulares en proyectos empresariales.</p>
        </section>
        </>
    )
}
export default Nosotros;