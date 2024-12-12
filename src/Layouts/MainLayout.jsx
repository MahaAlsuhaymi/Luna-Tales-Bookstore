import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import logo from '../Assest/lunalogo2.png'
import BookStoreContext from '../Context/BookStoreContext';

const MainLayout = ({ children }) => {

    const {cartInfoLength} = useContext(BookStoreContext)
    
    return (<>
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container px-4 px-lg-2">
                    <a className="navbar-brand">
                    <div className="d-flex align-items-center">
                    <Link className="nav-link" to="/"><img src={logo} id='logo'/></Link>
                        <Link className="nav-link ms-2" id='custom-font' to="/">Luna's Tales</Link>
                    </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/list">Books</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/aboutus">About us</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contactus">Contact us</Link></li>
                        </ul>
                        <form className="d-flex">
                        <Link to={"/cart"}>
                            <button className="btn btn-outline-light" type="submit">
                                <i className="bi-cart-fill me-1"></i>
                                Cart
                                {cartInfoLength > 0 && (
                                    <span className="badge bg-dark text-white ms-1 rounded-pill">{cartInfoLength}</span>
                                )}
                            </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            {children}
        </main>
    </>);
}

export default MainLayout;