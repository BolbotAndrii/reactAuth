import React from 'react';
import linkData from '../Router/RouteData'
import {Link} from "react-router-dom";


const Sidebar = () => {
    return (
        <div className='flex flex-col'>
            {
                linkData.map( ({label, path}) => (
                    <Link key={path} to={path}>{label}</Link>
                ))
            }

        </div>
    );
};

export default Sidebar;