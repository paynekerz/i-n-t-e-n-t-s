import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';


const Header = () => {
  let authData = Auth.getProfile().data; //.username
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="">
      <div className="">
        <div>
          <Link to="/"><h1 className="TENTS"><b className="in">in</b>TENTS</h1></Link>
        </div>
        <div>
          <Link className=" btn-lg m-2" to="/search"><b>find</b>-PARK</Link>
          <Link className=" btn-lg m-2" to="/blog"><b>my</b>-PAGE</Link>
          <Link className=" btn-lg m-2" onClick={logout}><b>log</b>-OUT</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
