import React from 'react';
import linkData from '../Router/RouteData'
import {Link} from "react-router-dom";
import Logo from "../Logo/Logo";


const Sidebar = () => {
    return (
      <>
          <Logo />
          <div className='flex flex-col'>
              {
                  linkData.map( ({label, path}) => (
                      <Link key={path} to={path}>{label}</Link>
                  ))
              }

          </div>
      </>
    );
};

export default Sidebar;