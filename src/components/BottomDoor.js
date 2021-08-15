import React from 'react';
import Ad from './Ad';

const BottomDoor = ({ isBottomOpen, setIsBottomOpen, images }) => {
    
    const toggleBottomOpen = () => {
        setIsBottomOpen(!isBottomOpen);
    };

    return (
        <div className={`wrapper bottom-door ${isBottomOpen ? `open` : null}`}>
        <div className="door">
        <div className="bottom-door-top-row">
                <div className="bottom-door-handle-container">
                    <div className="top-handle" onClick={toggleBottomOpen}></div>
                    <Ad imageUrl={images[6]} number="7" />
                </div>
                <Ad imageUrl={images[7]} number="8" />
                <Ad imageUrl={images[8]} number="9" />
            </div>
            <div className="bottom-door-middle-row">
                <Ad imageUrl={images[9]} number="10" />
                <Ad imageUrl={images[10]} number="11" />
                <Ad imageUrl={images[11]} number="12" />
            </div>
            <div className="bottom-door-bottom-row">
                <Ad imageUrl={images[12]} number="12" />
                <Ad imageUrl={images[13]} number="13" />
                <Ad imageUrl={images[14]} number="14" />
            </div>
        </div>
        <div className="bg" onClick={toggleBottomOpen}>
        </div>
    </div>
    )
}

export default BottomDoor;