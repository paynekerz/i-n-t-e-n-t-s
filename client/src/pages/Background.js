import React from 'react';
import { render } from 'react-dom';


const imgUrls = [
    1,2,3
];

const ImageSlide = () => {

render() {
    const { url } = this.props;
    const Text="..."
    return (          
        <div>
            <div className={`pic${url}`}>
                <p className="p1_1">{Text.p1_1}</p>
            </div>
        </div>      
    );
}
}

export default ImageSlide;