import MainLayout from '../Layouts/MainLayout'
import {Link} from 'react-router-dom'

const Landing = () => {
    return (<>
        <MainLayout>
            <div className='container mt-5' id='banner'>
                <button className="btn btn-outline-dark flex-shrink-0 mt-5" id="browsebutton" type="button">
                 <Link className="nav-link" to="/list">Browse Books</Link>
                </button>
            </div>
        </MainLayout>
    </>);
}
 
export default Landing;