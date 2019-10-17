import React from 'react';
import './face-recognition.styles.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div style={{ position: 'absolute' }}>
            <img id='inputimage' className='responsive-img' src={imageUrl} alt='' />
            <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
        
    );
};

export default FaceRecognition;