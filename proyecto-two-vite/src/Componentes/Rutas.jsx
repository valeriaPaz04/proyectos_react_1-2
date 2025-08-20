import { Routes, Route } from 'react-router-dom';


// Router S= Agrupa todas las rutas
// Route = Define una ruta o cada enlace
import Inicio from '../Pages/Inicio';
import Nosotros from '../Pages/Nosotros';

const Rutas = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/Nosotros" element={<Nosotros/>} />
        </Routes>
    );
}

export default Rutas;