import {Outlet} from 'react-router-dom';
import Navbar from './Navbar';

const MainLayout = () => {
    return (
        <div className='w-full mx-auto mt-0 p-2 pt-0'>
            <Navbar></Navbar>
        <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;