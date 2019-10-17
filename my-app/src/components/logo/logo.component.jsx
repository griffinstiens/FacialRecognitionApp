import React from 'react';
import Tilt from 'react-tilt';
import brain from './icon.png';
import './logo.styles.css';

const Logo = () => {
    return (
        <div>
            <br />
            <Tilt className="Tilt center" options={{ max : 55 }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner"> <img src={brain} alt='missing icon'/></div>
            </Tilt>
        </div>
    );
};

export default Logo;