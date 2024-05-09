import {Outlet} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from '../Routes/Footer';

const MainLayout = () => {
    return (
        <div className='w-full mx-auto mt-0 p-2 pt-0'>
            <Navbar></Navbar>
        <Outlet></Outlet>
        <div className='mt-4'>

        <Footer></Footer>
        </div>
            
        </div>
    );
};

export default MainLayout;