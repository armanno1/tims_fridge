import React from 'react';
import Ad from './Ad';

const BottomDoor = ({ isBottomOpen, setIsBottomOpen, images, insideBottomAds }) => {
    
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
            <div className="bottom-inside-top-row">
                <Ad imageUrl={insideBottomAds[19]} number="20" />
                <Ad imageUrl={insideBottomAds[20]} number="21" />
            </div>
            <div className="bottom-inside-middle-row">
                <Ad imageUrl={insideBottomAds[21]} number="22" />
                <Ad imageUrl={insideBottomAds[22]} number="23" />
            </div>
            <div className="bottom-inside-bottom-row">
                <Ad imageUrl={insideBottomAds[23]} number="24" />
                <Ad imageUrl={insideBottomAds[24]} number="25" />
            </div>
        </div>
    </div>
    )
}

export default BottomDoor;