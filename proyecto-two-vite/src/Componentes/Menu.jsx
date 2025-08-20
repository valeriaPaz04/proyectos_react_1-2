import {Link} from 'react-router-dom';

const Menu =() =>{
    return (
        <nav>
            {/* Forma de crear enlaces entre paginas */}
            <Link to="/">Inicio</Link>
            <Link to="/nosotros">Nosotros</Link>
        </nav>
    );
};
export default Menu;