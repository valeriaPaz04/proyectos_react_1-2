{/* Se importa Header, Menu, Footer */}
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

const Layout =({children}) =>{
    return(
        <div className='container'>
            <Header/>
            <Menu/>
                {children}
            <Footer/>
        </div>
    )
}
export default Layout;