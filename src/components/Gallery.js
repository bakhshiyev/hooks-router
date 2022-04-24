import { Outlet } from 'react-router-dom';

const Gallery = () => {
    return (
        <div className="text-center bg-blue-700 text-white">
            <Outlet/>
            Gallery
        </div>
    );
};

export default Gallery;