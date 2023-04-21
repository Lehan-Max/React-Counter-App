import React from 'react';

//Stateless functional Components
const Navbar = ({totalCounters}) => {
    console.log('Navbar-Rendered');
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <h2 className="navbar-brand">
                    Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
                </h2>
            </nav>
        </div>
    );
}

export default Navbar;