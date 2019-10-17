import React from 'react';
import './image-link.styles.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='center white-text'>{'This application will detect faces in your pictures. Give it a try by providing a URL to an image!'}</p>


            <div className='row'>
                <div className='col s12'>
                    <div className='card-panel'>
                        <div className='input-field'>
                            <div className='row'>
                                <div className='input-field center'>
                                    <input type='text' className='validate' name='url_name' onChange={onInputChange} />
                                    <label htmlFor='url_name'>Enter image URL here!</label>
                                    
                                    <button className='btn deep-purple' onClick={onButtonSubmit}>DETECT</button>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
                    
        </div>
    )
}

export default ImageLinkForm;